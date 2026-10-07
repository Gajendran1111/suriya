import {test, expect } from "@playwright/test";

test("upload single file",async({page})=>{

    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(["C:/Users/gajendran/Downloads/Playwright Folder Structure (1).txt","C:/Users/gajendran/Downloads/Java-String Part 1 (1).webex"])
    await page.waitForTimeout(3000)
    await page.locator('#filesToUpload').setInputFiles([])
    await page.waitForTimeout(3000)
})