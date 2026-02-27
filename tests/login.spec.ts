import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="login-credentials"]').click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="username"]').press('Tab');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  await page.locator('[data-test="title"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await page.locator('[data-test="secondary-header"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-0-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-1-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-5-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-2-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.locator('[data-test="item-3-title-link"]').click();
  await page.locator('[data-test="back-to-products"]').click();
});