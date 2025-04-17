const {test,expect}=require('@playwright/test')
test('LocatingMultiple',async({page})=>{
 await page.goto('https://www.demoblaze.com/index.html');
 //wait for selector
await page.waitForSelector("//div[@id='tbodyid']//h4/a");

const products = await page.$$("//div[@id='tbodyid']//h4/a")

for (const productname of products)
{
  const productName=await productname.textContent();
  console.log(productName);
}

})