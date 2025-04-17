const{test,expect}=require('@playwright/test')
test('Bootstrap dropdown',async({page})=>{
  await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2');
  
})