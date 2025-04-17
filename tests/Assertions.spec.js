const {test,expect}=require('@playwright/test')
test('AssertionTest',async({page})=>{
// /open url
await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
//expect(page).toHaveURL
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')
//Check Title

await expect(page).toHaveTitle('nopCommerce demo store. Register')
//Check element visible or not
const logoelement=await page.locator('.header-logo')
await expect(logoelement).toBeVisible()
//check element is enable or disable
const searchStoreBox = await page.locator('#small-searchterms')
await expect(searchStoreBox).toBeEnabled()

//Check Radio button or check box is selected or not
const maleRadioButton =await page.locator('#gender-male')
await maleRadioButton.click()
await expect(maleRadioButton).toBeChecked()

//check box
const newsLetterCheckBox=await page.locator('#Newsletter')
await expect(newsLetterCheckBox).toBeChecked()
//expect element have attribut or not
const regButton =await page.locator('#register-button')
await expect(regButton).toHaveAttribute('type','submit')
//expect locator toHaveText()

await expect(await page.locator('.page-title h1')).toHaveText('Register')
await expect(await page.locator('.page-title h1')).toContainText('Reg')

//expect (locator) toHaveValue('test@demo.com')
const emailInput=await page.locator('#Email')
await emailInput.fill('test@demo.com')
await expect(emailInput).toHaveValue('test@demo.com')

// //expect(locator).toHaveCount()
// const options=await page.locator('select[name="DateOfBirthMonth"] option')
// await expect(options).toHaveCount(13)


})