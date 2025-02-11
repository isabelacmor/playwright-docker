import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

test('Generate all valid page URLs', async ({ page, baseURL }) => {
  await page.goto('/');
  const urls = (await page.$$eval('nav a', anchors => anchors.map(a => (a as HTMLAnchorElement).href))).map(url => url.replace(baseURL ?? '', ''));

  // Ensure we generate the file in this same directory
  const filePath = path.join(__dirname, 'generated-urls.json');
  await fs.writeFileSync(filePath, JSON.stringify(urls));
});