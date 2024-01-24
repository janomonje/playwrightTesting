import { test, expect } from '@playwright/test';

test('test', async ({ page, context }) => {
await context.tracing.start({snapshots:true, screenshots:true})

  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Hylkää kaikki' }).click();
  await page.getByLabel('Hae', { exact: true }).click();
  await page.getByLabel('Hae', { exact: true }).fill('iron maiden');

  await context.tracing.stop({path:'traceTest.zip'})
});