import{test,expect} from '@playwright/test'
test('Handle Inner Frame :',async({page})=>{
  await page.goto("https://ui.vision/demo/webtest/frames/")
  const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
  frame3.locator("input[name='mytext3']").fill('Welcome')
  await page.waitForTimeout(3000)
  //Nested frame
  const childframes=await frame3.childFrames();
  childframes[0].locator("/html/body/div/div[1]/form/div[2]/div[1]/div[2]/div[1]/div/div/div[2]/div[1]/div/span/div/div[1]/label/div/div[2]/div/span").check()
  await page.waitForTimeout(3000)
  
})