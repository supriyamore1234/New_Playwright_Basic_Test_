// const{test,expect} = require('@playwright/test')
// another way of importing function
import{test,expect} from '@playwright/test'
test('Locators',async({page})=>{
  await page.goto("https://www.demoblaze.com/index.html");
  //login click -proprty approach
  await page.locator('id=login2').click();
//login another approach
  // await page.click('id=login2')

  // using  css
await page.locator('#loginusername').fill("pavanp")
// await page.fill('loginusername','pavanp')
// await page.type('loginusername')

//provide password using css
await page.fill("input[id='loginpassword']",'test@123')

//login xpath
await page.click("//button[normalize-space()='Log in']")

//verify logout link present 
// const logoutlink = await page.locator("//a[normalize-space()='Log out']")

// await expect(logoutlink).toBeVisible();

await page.close()

})