import{test,expect,chromium} from '@playwright/test';
test('Frame Handle',async()=>{
const browser= await chromium.launch({headless:false});
const context=await browser.newContext();
const page=await context.newPage();
await page.goto("https://prafpawar11.github.io/twoFrame.html");
await page.locator("#name").fill("Sanket More");
await page.frameLocator("#chk").locator("#Selenium").click();
await page.frameLocator("#topic").locator("#course").selectOption({label:"POM Page Object Model"});


});