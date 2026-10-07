import {test, expect } from "@playwright/test";

test("web table handling",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const table = await page.locator('//table[@id="productTable"]')

    const column =await table.locator('thead tr th')
    console.log("No of column :"+await column.count());
    await expect(await column.count()).toBe(4)
    

    const rows = await table.locator('tbody tr');
    console.log(await rows.count());
    await expect(await rows.count()).toBe(5)

    const cbox = rows.filter({
        has: page.locator('td'),
        hasText: "Smartphone"
    })
    await cbox.locator('input').check()
})
