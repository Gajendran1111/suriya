import {test, expect } from "@playwright/test";
import { afterEach, beforeEach } from "node:test";

let page;
test.beforeEach("before",async({browser})=>{
page = await browser.newPage()

    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername',"gajendrans")
    await page.fill('#loginpassword','11112000')
    await page.click('//button[@onclick="logIn()"]')
})

test.afterEach('after',async()=>{
    await page.click('#logout2')
})



test("hooks concpet",async()=>{

    await expect(await page.locator('.card')).toHaveCount(9)

})

test("hooks2",async()=>{
    await page.click('//a[text()="Samsung galaxy s7"]')
    await page.click('//a[text()="Add to cart"]')

    page.on('dialog',async dialog =>{
        await dialog.accept()
    })
})