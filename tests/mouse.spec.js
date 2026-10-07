import {test,expect } from "@playwright/test";

/*test("mouse hover",async({page})=>{

    await page.goto('https://www.myntra.com/')
    await page.hover('(//a[text()="Kids"])[1]')
    await page.locator('//a[text()="Lehenga choli"]').click()
    await page.waitForTimeout(3000)
})*/

/*test("dblckick",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#')
    await page.locator('//button[text()="Copy Text"]').dblclick()
    await page.mouse.wheel(0,-1000)
    await page.locator('//a[text()="Youtube"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(3000)
})*/
test("drag and drop",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/#')
    const drag =await page.locator('div#draggable')
    const drop =await page.locator('div#droppable')

    await drag.dragTo(drop)
    
    await page.waitForTimeout(3000)
})