const {test,expect}=require('@playwright/test')
test("Upload File",async({page})=>{
  await page.goto('https://practice.expandtesting.com/upload')
  await page.waitForSelector('#fileInput');
  await page.locator('#fileInput').setInputFiles('tests/UploadFiles/Agrolife payment.pdf');
  await page.waitForTimeout(9000)
})
//to upload multiple files
test.only("Multiple files",async({page})=>{
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
await page.locator('#filesToUpload').setInputFiles(['tests/UploadFiles/Agrolife payment.pdf','tests/UploadFiles/Agrolife payment - Copy.pdf']);
  await page.waitForTimeout(6000);

})