import {test,expect } from "@playwright/test";

test("Hard assertion",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await expect(page).toHaveURL('https://testautomationpractice.blogspot.com/')
    const til =await page.title()
    console.log(til)
    await expect(page).toHaveTitle("Automation Testing Practice")
    const txt = await page.locator('//a[text()="GUI Elements"]')
    await expect(txt).toBeVisible()
    // await expect(page.locator('//a[text()="GUI Elements"]')).toBeVisible()
    await expect(page.getByText("START")).toBeEnabled()
    // await page.goto('https://www.instagram.com/')
    // await expect(page.locator('//button[@type="submit"]')).toBeDisabled()
    const sun = await page.locator("#sunday")
    await sun.check()
    await expect(sun).toBeChecked()
    await expect(txt).toHaveText("GUI Elements")
    await expect(txt).toContainText("Elements")
    const input = await page.locator("#name")
    await input.fill("java")
    await expect(input).toHaveValue("java")
    // const dd = await page.$$("#country option")
    await expect(await page.locator("#country option")).toHaveCount(10)

})