const{test,expect} = require('@playwright/test')
test("date picker",async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')
  // await page.fill('#datepicker','04/16/2025');
await page.waitForTimeout(3000);
//date picker
const year="2025";
const month="May";
const date="20";
await page.click('#datepicker')
while(true)
  {
    const currentYear=await page.locator('.ui-datepicker-year').textContent();
    const currentMonth=await page.locator('.ui-datepicker-month').textContent();
    if(currentYear==year && currentMonth==month)
    {
      break;
    }
    
    await page.locator('[title="Next"]').click()
  }
  //date selection using loop

    const dates= await page.$$("//a[@class='ui-state-default']")
  // for(const dt of dates)
  // {
  //   if(await dt.textContent()==date)
  //   {
  //       await dt.click();
  //       break;
  //   }
  // }

  //select date without for loop
    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(3000);

})

