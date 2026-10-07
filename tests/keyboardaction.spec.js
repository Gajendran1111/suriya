import { test,expect } from "@playwright/test";

test("keyboard actions",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('#name').fill("trend@gmail.com")
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+A')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+X')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Tab')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(1000)
    await page.keyboard.press('Shift+Tab')
    await page.waitForTimeout(1000)
    await page.keyboard.insertText("gajendran")
    await page.waitForTimeout(1000)
})