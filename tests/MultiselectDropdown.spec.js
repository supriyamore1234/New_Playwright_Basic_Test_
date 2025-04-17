const{test,expect}=require('@playwright/test')
test("Handle dropdowns",async({page})=>{
  await page.goto('https://testautomationpractice.blogspot.com/');

  await page.waitForTimeout(5000);
  //select multiple options from dropdown
  await page.selectOption('#colors',['Blue','Red','Yellow'])
//Assertions
//1.Check number of options from dropdown
  const options =await page.locator('#colors option')
  await expect(options).toHaveCount(7);

  await page.waitForTimeout(5000);

  //2check number of options available in js array
  const options2 = await page.$$('#colors option')
  // console.log("Number of options : "+options2.length)
  await expect(options2.length).toBe(7);
  //Check presnce of dropdown in options
  const content = await page.locator('#colors').textContent()
  await expect(content.includes('Blue')).toBeTruthy();
  await expect(content.includes('Black')).toBeFalsy();



})