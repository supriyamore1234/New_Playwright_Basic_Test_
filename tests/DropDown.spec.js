import{test,expect} from '@playwright/test'
test('Locators',async({page})=>{

  await page.goto('https://www.globalsqa.com/demo-site/select-dropdown-menu/');

  await page.locator("//select").selectOption('India');

  await page.waitForTimeout(5000);
  const options=await page.locator('//select/option')
  const numberOfDropDowns= await options.count()
console.log("Number of options",numberOfDropDowns);
await expect(options).toHaveCount(249);

//check particulat option is present in dropdown or not
const textContents=await page.locator('//select').textContent();
await expect(textContents.includes('India')).toBeTruthy();

//Select option is present in dropdown or not Approach 2
const Options=await page.$$('//select')
let status=false;
for(const option of Options){
  let value= await option.textContent();
  if(value.includes('France'))
  {
    status=true;
    break;
  }
}
expect(status).toBeTruthy();})