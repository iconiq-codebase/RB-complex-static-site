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
  function close() { nav.classList.remove('open'); document.body.classList.remove('menu-open'); menu.setAttribute('aria-expanded', 'false'); }
  function resize() { nav.classList.toggle('mobile', innerWidth <= 1020); if (innerWidth > 1020) close(); }
  close(); resize(); window.addEventListener('resize', resize, options);
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); document.body.classList.toggle('menu-open', open); menu.setAttribute('aria-expanded', String(open)); }, options);
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
   status.textContent = count ? `${count} sample stores found` : 'No stores found. Try another search or category.';
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
  document.querySelectorAll<HTMLFormElement>('form').forEach(form => form.addEventListener('submit', e => {
   e.preventDefault();
   let message = form.parentElement?.querySelector<HTMLElement>('.form-status');
   if (!message) { message = document.createElement('p'); message.className = 'form-status'; form.after(message); }
   message.textContent = form.classList.contains('newsletter-form') ? 'Preview only. Your email has not been subscribed or stored.' : 'Demo complete. Your enquiry has not been sent. Please contact mall management directly.';
   message.setAttribute('role', 'status'); message.style.display = 'block';
  }, options));
  return () => { controller.abort(); status.remove(); document.body.classList.remove('menu-open'); };
 }, [pathname]);
 return null;
}
