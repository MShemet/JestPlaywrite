const { chromium } = require('playwright');

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

describe('Browser UI test', () => {
  test('should create an element with text and correct class', async () => {
    const browser = await chromium.launch({
      headless: false,
    });

    const page = await browser.newPage();

    await page.goto('file:///C:/Users/Admin/Desktop/JestPlaywrite/index.html');

    await sleep(3000);

    await page.click('input#name');
    await page.fill('input#name', 'Anna');

    await sleep(3000);

    await page.click('input#age');
    await page.fill('input#age', '28');

    await sleep(3000);

    await page.click('#btnAddUser');

    await sleep(3000);

    const finalText = await page.$eval('.user-item', (el) => el.textContent);

    await browser.close();

    expect(finalText).toBe('Anna (28 years old)');
  }, 30000);
});
