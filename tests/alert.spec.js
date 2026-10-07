import  {test,expect} from '@playwright/test'

/*test ("simple alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog" ,async dialog=>{
        expect(await dialog.type('simple'))
        expect(await dialog.message('I am an alert box!'))
        await dialog.accept()
    })

    await page.getByText("Simple Alert").click()
    
})*/
test ("confirmation alert",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    page.on("dialog" ,async dialog=>{
        expect( dialog.type('confirm'))
        expect( dialog.message('Press a button!'))
        // await dialog.accept()
        await dialog.dismiss()
    })

    await page.getByText("Confirmation Alert").click()
    
})