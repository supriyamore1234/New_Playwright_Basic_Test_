const{test,expect}=require('@playwright/test')
test("InputBox",async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  //Input box firstname
  await expect(await page.locator("//input[@id='user-name']")).toBeVisible();
  //if assertion present then pass else fail
  //to check empty or not
  await expect(await page.locator("//input[@id='user-name']")).toBeEmpty();
  //to check Editable or not
  await expect(await page.locator("//input[@id='user-name']")).toBeEditable();
//to check enable or not
  await expect(await page.locator("//input[@id='user-name']")).toBeEnabled();

await page.locator("//input[@id='user-name']").fill("John")
//  page.fill("//input[@id='name']",'john');

await page.waitForTimeout(5000); //pausing code



})