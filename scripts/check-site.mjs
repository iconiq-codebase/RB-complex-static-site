import { chromium } from '@playwright/test';
const browser = await chromium.launch({headless:true});
const page = await browser.newPage({viewport:{width:1440,height:1000}});
const errors=[];page.on('pageerror',e=>errors.push(e.message));
for(const route of ['', 'stores/','offers/','whats-on/','visit/','leasing/']){
 const response=await page.goto(`http://localhost:3000/${route}`);if(response.status()!==200)throw Error(route);
 await page.locator('h1').waitFor();
 if(await page.locator('h1').count()!==1)throw Error('Heading '+route);
}
await page.goto('http://localhost:3000/stores/');
await page.getByRole('textbox',{name:'Search stores'}).fill('pixel');
await page.waitForTimeout(200);
if(await page.locator('.store:not(.hidden)').count()!==1)throw Error('Search');
await page.getByRole('textbox',{name:'Search stores'}).fill('no-such-store');
await page.getByRole('status').filter({hasText:'No stores found'}).waitFor();
await page.getByRole('textbox',{name:'Search stores'}).fill('');
await page.getByRole('button',{name:'Footwear',exact:true}).click();
if(await page.locator('.store:not(.hidden)').count()!==2)throw Error('Filter');
await page.goto('http://localhost:3000/leasing/');
await page.getByLabel('Your name').fill('Test visitor');await page.getByLabel('Phone',{exact:true}).fill('9800000000');
await page.getByRole('button',{name:'Submit prototype enquiry'}).click();await page.getByRole('status').filter({hasText:'has not been sent'}).waitFor();
await page.setViewportSize({width:390,height:844});
for(const route of ['', 'stores/','offers/','whats-on/','visit/','leasing/']){
 await page.goto(`http://localhost:3000/${route}`);
 if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1))throw Error('Mobile overflow '+route);
}
await page.goto('http://localhost:3000/');await page.getByRole('button',{name:'Menu',exact:true}).click();
await page.locator('.nav').getByRole('link',{name:'Stores',exact:true}).click();await page.waitForURL('**/stores/');
await page.goto('http://localhost:3000/');await page.screenshot({path:'/tmp/rb-mobile.png'});
await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'/tmp/rb-desktop.png'});
if(errors.length)throw Error(errors.join('\n'));
console.log('PASS: six routes, search, filters, empty state, enquiry, mobile navigation and overflow; no browser errors.');
await browser.close();
