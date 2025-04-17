const{test,expect} = require('@playwright/test')
test('Drag And Drop',async ({page})=>{
  await page.goto('http://www.dhtmlgoodies.com/packages/dhtml-suite-for-applications/demos/demo-drag-drop-3.html')

    const Washingtonname =await page.locator('#dropContent').getByText('Washington')
    const spain = await page.locator('#box107')
  //Approach 1
    // await Washingtonname.hover()
    // await page.mouse.down()

    // await spain.hover()
    // await page.mouse.up()
    //Approach2
   await Washingtonname.dragTo(spain)
  
    await page.waitForTimeout(5000)

})