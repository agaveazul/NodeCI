const puppeteer = require("puppeteer");

test("We can launch a browser", async () => {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000/");

  const text = await page.$eval("a.brand-logo", el => el.innerHTML);
  expect(text).toEqual("Blogster");
});
