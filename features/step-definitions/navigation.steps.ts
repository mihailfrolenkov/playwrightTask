import { Given, When, Then } from "@cucumber/cucumber"
import { devices } from "playwright"

import { BBCNewsPage } from "../../pages/bbcHomePage"
import { CustomWorld } from "../support/world"

let newsPage: BBCNewsPage

Given("I open the BBC News homepage in desktop view", async function (this: CustomWorld) {

  this.context = await this.browser.newContext({
    viewport: { width: 1920, height: 1080 }
  })

  this.page = await this.context.newPage()

  newsPage = new BBCNewsPage(this.page)

  await newsPage.open()
})

Then("the top navigation menu should be visible", async function () {
  await newsPage.verifyDesktopNavigation()
})

When('I click the "Sport" section', async function () {
  await newsPage.clickSport()
})

When('I click the "Sport" section in hamburger menu', async function () {
  await newsPage.clickHamburgerSportButton()
})

When('I accept cookie message', async function () {
  await newsPage.clickAgreeCookieMessage()
})

Then("I should be navigated to the Sport page", async function () {
  await newsPage.verifySportPage()
})

Given("I open the BBC News homepage in mobile view", async function (this: CustomWorld) {

  this.context = await this.browser.newContext({
    ...devices["iPhone 13"]
  })

  this.page = await this.context.newPage()

  newsPage = new BBCNewsPage(this.page)

  await newsPage.open()
})

Then("the hamburger menu should be visible", async function () {
  await newsPage.verifyHamburgerVisible()
})

When("I open the hamburger menu", async function () {
  await newsPage.openHamburgerMenu()
})

When("All navigation menu items are visible", async function () {
  await newsPage.verifyNavMenuItems()
})

When("All burger menu items are visible", async function () {
  await newsPage.verifyBurgerMenuItems()
})

Then("All sport navigation menu items are visible", async function () {
  await newsPage.verifySportNavMenuItems()
})