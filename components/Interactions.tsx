'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Interactions() {
 const pathname = usePathname();
 useEffect(() => {
  const controller = new AbortController();
  const options = { signal: controller.signal };
  const nav = document.querySelector<HTMLElement>('.nav')!;
  const menu = document.querySelector<HTMLButtonElement>('.menu')!;
  nav.id = 'main-navigation'; menu.setAttribute('aria-controls', nav.id);
  document.querySelectorAll<HTMLAnchorElement>('.nav a').forEach(link => {
   const active = link.pathname.replace(/\/$/, '') === pathname.replace(/\/$/, '');
   link.classList.toggle('active', active);
   if (active) link.setAttribute('aria-current', 'page'); else link.removeAttribute('aria-current');
  });
  function close() {
   nav.classList.remove('open');
   menu.classList.remove('open');
   nav.style.transform = '';
   nav.style.visibility = '';
   document.body.classList.remove('menu-open');
   menu.setAttribute('aria-expanded', 'false');
  }
    function resize() { nav.classList.toggle('mobile', innerWidth <= 900); if (innerWidth > 900) close(); }
  close(); resize(); window.addEventListener('resize', resize, options);
  menu.addEventListener('click', () => {
   const open = nav.classList.toggle('open');
   menu.classList.toggle('open', open);
   nav.style.transform = open ? 'translateX(0)' : '';
   nav.style.visibility = open ? 'visible' : '';
   document.body.classList.toggle('menu-open', open);
   menu.setAttribute('aria-expanded', String(open));
  }, options);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { close(); } }, options);
  function progress() { const max = document.documentElement.scrollHeight - innerHeight; document.documentElement.style.setProperty('--p', `${max > 0 ? scrollY / max * 100 : 0}%`); }
  progress(); window.addEventListener('scroll', progress, { ...options, passive: true });
  const search = document.querySelector<HTMLInputElement>('#storeSearch');
  const stores = [...document.querySelectorAll<HTMLElement>('.store')];
  let category = 'all', letter = '';
  const status = document.createElement('p'); status.className = 'directory-result'; status.setAttribute('role', 'status');
  document.querySelector('.store-grid')?.after(status);
  function filter() {
   const query = search?.value.toLowerCase().trim() || '';
   let count = 0;
   stores.forEach(store => { const visible = (category === 'all' || store.dataset.category === category) && (!letter || store.querySelector('h3')?.textContent?.startsWith(letter)) && `${store.dataset.search} ${store.textContent}`.toLowerCase().includes(query); store.classList.toggle('hidden', !visible); if (visible) count++; });
  status.textContent = count ? `${count} stores found` : 'No stores found. Try another search or category.';
  }
  search?.addEventListener('input', filter, options);
  document.querySelectorAll<HTMLButtonElement>('.filter').forEach(button => {
   button.setAttribute('aria-pressed', String(button.dataset.filter === 'all'));
   button.addEventListener('click', () => { category = button.dataset.filter || 'all'; letter = ''; document.querySelectorAll('.az-strip button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed','false'); }); document.querySelectorAll<HTMLButtonElement>('.filter').forEach(b => { b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button)); }); filter(); }, options);
  });
  document.querySelectorAll<HTMLButtonElement>('.az-strip button').forEach(button => {
   button.setAttribute('aria-pressed', 'false');
   button.addEventListener('click', () => { letter = letter === button.textContent ? '' : button.textContent || ''; document.querySelectorAll('.az-strip button').forEach(b => { b.classList.toggle('active', b.textContent === letter); b.setAttribute('aria-pressed', String(b.textContent === letter)); }); filter(); search?.scrollIntoView({ block: 'center', behavior: 'smooth' }); }, options);
  });
  if (search) filter();
    document.querySelectorAll<HTMLFormElement>('.demo-form').forEach(form => form.addEventListener('submit', e => {
     e.preventDefault();
     const values = new FormData(form);
     const message = [
        'Hello R.B. Complex, I would like to enquire about leasing.',
        `Name: ${values.get('field-0') || ''}`,
        `Phone: ${values.get('field-1') || ''}`,
        `Business: ${values.get('field-2') || ''}`,
        `Category: ${values.get('field-3') || ''}`,
        `Requirements: ${values.get('field-4') || ''}`,
     ].join('\n');
     window.open(`https://wa.me/9779841112360?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
     let status = form.parentElement?.querySelector<HTMLElement>('.form-status');
     if (!status) { status = document.createElement('p'); status.className = 'form-status'; form.after(status); }
     status.textContent = 'Your enquiry is ready in WhatsApp. Review it there before sending to the leasing team.';
     status.setAttribute('role', 'status'); status.style.display = 'block';
    }, options));
  return () => { controller.abort(); status.remove(); document.body.classList.remove('menu-open'); };
 }, [pathname]);
 return null;
}
