import{test,expect} from  '@playwright/test';
let page
test.beforeEach(async({browser})=>{
  page=await browser.newPage();
await page.goto('https://www.demoblaze.com/index.html')
//login
await page.locator('#login2').click();
await page.locator('#loginusername').fill('test');
await page.locator('#loginpassword').fill('test');
await page.locator('//button[normalize-space()="Log in"]').click();
})

test('Home page test',async()=>{const products=await page.$$('.card-block');
  expect(products).not.toBeNull();
  const productsLength=products.length;
  expect(products).toHaveLength(productsLength);
  
})

test.afterEach(async()=>{
  await page.locator('#logout2').click();
  console.log("Logout test");
})

test('Add product to cart test',async()=>{
await page.locator("//a[text()='Samsung galaxy s6']").click();
await page.locator("//a[text()='Add to cart']").click();
//logout
page.on('dialog',async dialog=> {
  expect(dialog.message()).toContain('Product added');
  await dialog.accept();
})
})