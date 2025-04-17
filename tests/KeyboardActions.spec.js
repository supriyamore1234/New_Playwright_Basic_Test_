const {test,expect} = require('@playwright/test')
test("Keyboard Actions",async({page})=>{
  await page.goto("https://gotranscript.com/text-compare")
  //Approach to provide text 1
  // await page.locator('name="text1"').fill("welcome to automation")
  //Approach 2 to provide text
  await page.type('[name="text1"]','Welcome to automation')
  //Control A press
  await page.keyboard.press('Control+A')
  //control C press
  await page.keyboard.press('Control+C')
  //tab key press to focus on another box
  await page.keyboard.down('Tab')
  //release
  await page.keyboard.up('Tab')


  //control 'V'  when two keys press use press method

  await page.keyboard.press('Control+V')

  await page.waitForTimeout(5000)


})