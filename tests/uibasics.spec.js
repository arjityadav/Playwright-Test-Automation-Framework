const {test, expect} = require('@playwright/test');
const exp = require('constants');

test.only('Success Login Playwright Test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    console.log("title is: "+ await page.title());
    const usernameField = page.locator("#user-name");
    const passwordField = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    await usernameField.fill("standard_user");
    await passwordField.fill("secret_sauce");
    await loginBtn.click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log(await page.locator("div[data-test='inventory-item-name']").nth(0).textContent());
});

test('Unsuccessful Login Playwright Test', async({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.saucedemo.com/");
    console.log("title is: "+ await page.title());
    const usernameField = page.locator("#user-name");
    const passwordField = page.locator("#password");
    const loginBtn = page.locator("#login-button");
    await usernameField.fill("standard_user");
    await passwordField.fill("sadadad");
    await loginBtn.click();
    console.log(await page.locator("h3[data-test='error']").textContent());
    await expect(page.locator("h3[data-test='error']")).toContainText("do not match");
});

test('Page Playwright Test', async({page})=>{
    await page.goto("https://www.facebook.com");
    await expect(page).toHaveTitle("Facebook – log in or sign up");

});