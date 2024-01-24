import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://react-redux.realworld.io/');
  await page.goto('https://react-redux.realworld.io/#/');
  await page.goto('https://react-redux.realworld.io/#/?_k=zmhd9i');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('playwrightdemo@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('playwrightdemo');
  await page.getByPlaceholder('Password').press('Enter');
});