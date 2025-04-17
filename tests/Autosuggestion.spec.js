import {test,expect} from '@playwright/test'
test('Autosuggestion',async({page}) => {
  await page.goto('https://www.redbus.in/')
  await page.locator('#src').fill('delhi')
  await page.waitForSelector("(//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text)[1]")
  const fromCityVariables=await page.$$("(//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text)")
  for(let option of fromCityVariables)
  {
   const value=await option.textContent()
  //  console.log(value);
  if(value.includes("Badarpur"))
  {
    await option.click()
    break;
  }
  
  }
  await page.waitForTimeout(5000);
})
  
  
