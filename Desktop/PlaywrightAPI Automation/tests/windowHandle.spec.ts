import { test, expect } from '@playwright/test';

test('Handle new window', async ({ page, context }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    page.getByText('Click Here').click()
  ]);

  await newPage.waitForLoadState();

  console.log(await newPage.title());

  await expect(newPage.locator('h3')).toHaveText('New Window');

  
});