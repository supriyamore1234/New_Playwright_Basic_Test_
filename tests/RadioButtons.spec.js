import {test,expect} from '@playwright/test';
test ('Radio Buttons',async({page})=>{

  await page.goto('https://practice.expandtesting.com/radio-buttons');

  // await page.locator("//input[@id='black']").check();
  //Another method is
  await page.check("//input[@id='black']");
  //Assertion to check weather it is checked or not
  await expect(await page.locator("//input[@id='black']")).toBeChecked();
  // await expect(await page.locator("//input[@id='black']")).isChecked().toBeTruthy();
  const isBlackChecked = await page.locator("//input[@id='black']").isChecked();
  expect(isBlackChecked).toBeTruthy();
  // expect(isBlackChecked).toBeFalsy();

  await page.waitForTimeout(5000); //pausing code
}
)
