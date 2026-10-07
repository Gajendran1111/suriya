import {test, expect } from "@playwright/test";

test("hooks concpet",async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername',"gajendrans")
    await page.fill('#loginpassword','11112000')
    await page.click('//button[@onclick="logIn()"]')

    await page.waitForTimeout(3000)

    await expect(await page.locator('.card')).toHaveCount(9)

    await page.click('#logout2')
})
test("hooks2",async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')
    await page.click('#login2')
    await page.fill('#loginusername',"gajendrans")
    await page.fill('#loginpassword','11112000')
    await page.click('//button[@onclick="logIn()"]')

    await page.waitForTimeout(3000)

    await page.click('//a[text()="Samsung galaxy s7"]')
    await page.click('//a[text()="Add to cart"]')

    page.on('dialog',async dialog =>{
        await dialog.accept()
    })
    await page.click('#logout2')
})