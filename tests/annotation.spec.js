import {test,expect} from '@playwright/test'


// skip  
/*test.skip("skip",async()=>{
    console.log("hello java");
})

test("skip2",async()=>{
    console.log("hello javascript");
})*/



// only 

// test("only1",async()=>{
//     console.log("hello java");
// })
// test("only",async()=>{
//     console.log("hello javascript");
// })



// fail 

test ('fail',async()=>{
    expect(1).toBe(1)
})


// test ('slow',async({page})=>{
//     test.slow()
//     await page.goto('https://testautomationpractice.blogspot.com/')
// })