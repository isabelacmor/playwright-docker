import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/**
 * POC: Test a single page for accessibility.
 */
// test('accessibility', async ({ page }) => {
//   await page.goto('/keyboards');

//   const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

//   expect(accessibilityScanResults.violations).toEqual([]);
// });

/**
 * Approach #0: A single test.
 * Navigate to the site and grab all the valid URLs in the <nav>.
 * Then loop through those URLs and run a new test for each that tests the a11y.
 * 
 * This actually isn't possible to do because of how Playwright detects tests to be run.
 * See: https://stackoverflow.com/questions/78158808/dynamically-generate-playwright-test-asynchronously-shows-no-test-found
 * 
 * Error: Playwright Test did not expect test() to be called here.
 */
// test('test all URLs in <nav>', async ({ page }) => {
//   await page.goto('/');
//   const urls = await page.$$eval('nav a', anchors => anchors.map(a => (a as HTMLAnchorElement).href));

//   // Iterate through each link and run a test for each
//   for (const url of urls) {
//     test(`${url} tests`, async () => {
//         await page.goto(url);

//         const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//         expect(accessibilityScanResults.violations).toEqual([]);
//     });
//   }
// });

/**
 * Approach #1: A single test.
 * Before the test is run, we navigate to the site and grab all the valid URLs in the <nav>.
 * Then for each URL, we run a test.step to run the accessibility test for that URL.
 * 
 * Pros: Running a single test that's self-contained.
 * Cons: Test steps won't run in parallel. Test won't display the test.step() name, making debugging and validation more difficult.
 */
// let urls: string[] = [];
// test.beforeAll(async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage(); 
//   await page.goto('/');

//   // Find all <a> tags inside the <nav> element
//   urls = await page.$$eval('nav a', anchors => anchors.map(a => (a as HTMLAnchorElement).href));
// });

// test('test all URLs in <nav>', async ({ page }) => {
//   // Iterate through each link and run a test for each
//   for (const url of urls) {
//     await test.step(`${url} tests`, async () => {
      
//         await page.goto(url);

//         const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
//         expect(accessibilityScanResults.violations).toEqual([]);
//     });
//   }
// });

/**
 * Approach #2: Multiple tests with pre-generation.
 * Before we run the a11y tests, we run a separate test that generates all the URLs we want to test and saves them to a json file.
 * 
 * Pros: Tests run in parallel. Test names are displayed. Test reports are easier to read.
 * Cons: We have to remember to run the pre-generation test before running the a11y tests. This can be automated by adding the step to our pnpm scripts.
 */
const filePath = path.join(__dirname, 'generated-urls.json');
const json = fs.readFileSync(filePath, {encoding: "utf-8"});
const urls = JSON.parse(json);

for (const url of urls) {
  test(`Accessibility test: ${url}`, async ({ page }) => {
    await page.goto(url);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
}