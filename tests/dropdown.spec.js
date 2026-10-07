import  {test,expect} from '@playwright/test'

test ("handling dropdown",async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    // await page.locator().selectOption("india")
    // await page.locator('#country').selectOption({label : "Brazil"})
    // await page.locator('#country').selectOption({index : 5})
    // await page.selectOption('#country',"india")
    await page.locator('#country').selectOption({value : "germany"})
    await page.waitForTimeout(3000)
})