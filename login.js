class  orangehrm {
    constructor (page){
        this.page = page;
        this.username = page.locator('//input[@name="username"]')
        this.password = page.locator('//input[@type="password"]')
        this.loginbtn = page.locator('//button[@type="submit"]')
    }

    async loginpage(user,pass) {
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.loginbtn.click()
    }
    
}
export default orangehrm;