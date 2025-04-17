import{test,expect} from '@playwright/test'
test('HandleFrame',async({page})=>{
  
  await page.goto("https://ui.vision/demo/webtest/frames/")
  
  //total frames
  const allframes=await page.frames();
  console.log("Number of frames :",allframes.length)

  //using name or url of page 
  const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
  //const frame1= await page.frame('name')
  await frame1.fill("[name='mytext1']",'Hello');
  await page.waitForTimeout(5000);

})