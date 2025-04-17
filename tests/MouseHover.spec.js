const {test,expect}= require('@playwright/test')
test('Mouse hover',async({page})=>{
  await page.goto('http://demo.opencart.com/')

  const desktop=await page.locator('//a[normalize-space()="Desktops"]')
  const mackbook= await page.locator('//a[normalize-space()="Mac (1)"]')

  await page.waitForTimeout(5000)
})
