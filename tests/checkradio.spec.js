import {test, expect } from "@playwright/test";

test("radio button",async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    // radio button 
    await page.locator('#male').check()
    await page.waitForTimeout(1000)
    await page.locator('#female').check()
    // await page.locator("#female").uncheck()

    // we can't uncheck the radio button 


    // check box 
    // we can check and we can uncheck and we can select mutiple checkboxes

    await page.locator("#sunday").check()
    await page.locator("#sunday").uncheck()
    await page.waitForTimeout(2000)

    const days = ["#sunday","#wednesday","#saturday"]

    for(let box of days){
        const checkbox = await page.locator(box)
        await checkbox.check()
        await page.waitForTimeout(2000)
    }
})