"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const storageKey = "rb-nepali-translation-cache";
type Cache = Record<string, string>;
const preferredTranslations: Cache = {
  "R.B. Complex": "आर.बी. कम्प्लेक्स",
  "R.B. Complex · New Road": "आर.बी. कम्प्लेक्स · न्यूरोड",
  "Everything you love.": "तपाईंलाई मन पर्ने सबै कुरा।",
  "Under one roof.": "एकै छानामुनि।",
  "Shop fashion, footwear, electronics, accessories and everyday services in the heart of Kathmandu's New Road district.": "काठमाडौंको न्यूरोडको मुटुमा फेसन, जुत्ता, इलेक्ट्रोनिक्स, सामान र दैनिक सेवाहरू एकै ठाउँमा पाउनुहोस्।",
  "Discover R.B.": "आर.बी. कम्प्लेक्स पत्ता लगाउनुहोस्",
  "Shopping made": "किनमेललाई",
  "easy to explore.": "सजिलो बनाउनुहोस्।",
  "More reasons": "आउनका थप",
  "to stop by.": "कारणहरू।",
  "What's new at R.B.": "आर.बी. कम्प्लेक्समा नयाँ के छ?",
  "Come to New Road": "न्यूरोड आउनुहोस्",
};

function getCache(): Cache {
  try {
    return JSON.parse(window.localStorage.getItem(storageKey) || "{}");
  } catch {
    return {};
  }
}

async function translate(text: string, cache: Cache) {
  if (preferredTranslations[text]) return preferredTranslations[text];
  if (cache[text]) return cache[text];
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.searchParams.set("client", "gtx");
  url.searchParams.set("sl", "en");
  url.searchParams.set("tl", "ne");
  url.searchParams.set("dt", "t");
  url.searchParams.set("q", text);
  const response = await fetch(url);
  if (!response.ok) throw new Error("Translation request failed");
  const result = await response.json();
  const translated = result[0]
    .map((part: [string]) => part[0])
    .join("")
    .replaceAll("R.B. जटिल", "आर.बी. कम्प्लेक्स")
    .replaceAll("आर.बी. जटिल", "आर.बी. कम्प्लेक्स");
  cache[text] = translated;
  return translated;
}

export default function GoogleTranslate() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.localStorage.getItem("rb-language") !== "ne") return;
    document.documentElement.lang = "ne";
    const cache = getCache();
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const text = node.textContent?.trim() || "";
      const parent = node.parentElement;
      if (
        text.length > 1 &&
        /[A-Za-z]/.test(text) &&
        parent &&
        !parent.closest("script, style, svg, .language-switcher, .brand, .header, .mall-footer")
      ) nodes.push(node as Text);
    }
    const attributes = [...document.querySelectorAll<HTMLElement>("[placeholder], [aria-label]")]
      .flatMap((element) => (["placeholder", "aria-label"] as const)
        .map((attribute) => ({ element, attribute, value: element.getAttribute(attribute) || "" })))
      .filter(({ value }) => value.length > 1 && /[A-Za-z]/.test(value));

    let cancelled = false;
    const queue = [...nodes];
    async function worker() {
      while (!cancelled && queue.length) {
        const textNode = queue.shift();
        if (!textNode) return;
        const original = textNode.textContent || "";
        const match = original.match(/^(\s*)([\s\S]*?)(\s*)$/);
        if (!match || !match[2]) continue;
        try {
          const translated = await translate(match[2], cache);
          if (!cancelled) textNode.textContent = `${match[1]}${translated}${match[3]}`;
        } catch {
          // Keep the original English text if a translation request is unavailable.
        }
      }
    }
    void Promise.all(Array.from({ length: 16 }, worker)).then(() => {
      const attributeQueue = [...attributes];
      async function attributeWorker() {
        while (!cancelled && attributeQueue.length) {
          const item = attributeQueue.shift();
          if (!item) return;
          try {
            const translated = await translate(item.value, cache);
            if (!cancelled) item.element.setAttribute(item.attribute, translated);
          } catch {
            // Keep the original attribute if a translation request is unavailable.
          }
        }
      }
      void Promise.all(Array.from({ length: 8 }, attributeWorker)).then(() => {
        try { window.localStorage.setItem(storageKey, JSON.stringify(cache)); } catch {}
      });
    });
    return () => { cancelled = true; };
  }, [pathname]);

  return null;
}
