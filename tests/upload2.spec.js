import {test, expect } from "@playwright/test";

test("upload single file",async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles("C:/Users/gajendran/Downloads/javascript notes/Array.txt")
    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(1000)
})