const {test,expect}=require('@playwright/test')

test("Handle Checkbox",async({page})=>{
  await page.goto("https://app.endtest.io/guides/docs/how-to-test-checkboxes/");
  //sinle checkbox
   await page.locator("//input[@id='pet1']").check();
   expect(await page.locator("//input[@id='pet1']")).toBeChecked();
   expect(await page.locator("//input[@id='pet1']").isChecked()).toBeTruthy();

   expect(await page.locator("//input[@id='pet3']").isChecked()).toBeFalsy();
   //Uncheck the box
   await page.waitForTimeout(5000);
//Multiple checkboxex
//create array
const checkboxselectors=["//input[@id='pet1']","//input[@id='pet2']","//input[@id='pet3']"];

for(const locator of checkboxselectors)
  {
  await page.locator(locator).check();
  }
  await page.waitForTimeout(5000);
for(const locator of checkboxselectors)
  {
    if(await page.locator(locator).isChecked())
  await page.locator(locator).uncheck();
  }
  await page.waitForTimeout(5000);
}
)