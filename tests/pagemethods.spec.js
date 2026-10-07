// const {test,expect} = require('@playwright/test')
import {test,expect} from '@playwright/test' 

test("page methods concept",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator('button.start').click()
    // await page.click('button.start')
    // await page.close()
    await page.fill('#name',"trendnologies")
    await page.waitForTimeout(3000)
    const url = await page.url()
    console.log(url);
    const title = await page.title()
    console.log(title);
    await page.check("#sunday")
    await page.waitForTimeout(2000)
    await page.uncheck("#sunday")
    await page.selectOption("#country","india")
    await page.waitForTimeout(2000)
    
})