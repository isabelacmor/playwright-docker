import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * Use the same approach as we do for accessibility testing.
 */

const filePath = path.join(__dirname, 'generated-urls.json');
const json = fs.readFileSync(filePath, {encoding: "utf-8"});
const urls = JSON.parse(json);

for (const url of urls) {
  test(`Visual regression test: ${url}`, async ({ page }) => {
    await page.goto(url);
    const screenshotName = url.replace(/[^a-z0-9]/gi, '-').toLowerCase();
    await expect(page).toHaveScreenshot(`${screenshotName}.png`);
  });
}