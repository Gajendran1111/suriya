import {test,expect } from "@playwright/test";

test("mouse hover",async({page})=>{

    await page.goto('https://www.myntra.com/')
    await page.hover('(//a[text()="Men"])[1]')
    await page.waitForTimeout(3000)
})
test("double click",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await page.waitForTimeout(3000)
})
test("mouse wheel",async({page})=>{

    await page.goto('https://www.myntra.com/')
    await page.mouse.wheel(0,2000)
    await page.waitForTimeout(3000)
    await page.mouse.wheel(0,-1000)
    await page.waitForTimeout(3000)

})
test("drag and drop",async({page})=>{

    await page.goto('https://demo.automationtesting.in/Static.html')
    const drag = await page.locator('#angular')
    const drop = await page.locator('div#droparea')
    await drag.dragTo(drop)
    await page.waitForTimeout(3000)
})