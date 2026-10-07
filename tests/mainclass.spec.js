import {test,expect} from '@playwright/test'
import orangehrm from '../login'

test("login functionality",async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    const run = new orangehrm(page)
    await run.loginpage('Admin','admin123')

})