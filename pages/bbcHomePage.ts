import { Page, expect } from "@playwright/test"

export class BBCNewsPage {
  constructor(private page: Page) {}

  url = "https://www.bbc.com/"
  sportUrl = this.url + "sport"

  navMenu = '[data-testid="level1-navigation-container"]'
  navMenuItems = '[data-testid="mainNavigationLink"]'
  hamburgerButton = 'button[aria-label="Open menu"]'
  hamburgerMenuItems = '[data-testid="navigationPanel-navItem-level0-/"]'
  hamburgerSportButton = '[data-testid="level0NavButton-/sport"]'
  agreeCookieMessageButton = 'button[title="I agree"]'
  cookieFrame = '[title="SP Consent Message"]'
  sportsPageHeader = '[data-testid="masthead"]'
  sportsPageNavMenuItems = '[data-testid="navigation"]'

  expectedMenuItems = [
    "Home",
    "News",
    "Sport",
    "Business",
    "Technology",
    "Health",
    "Culture",
    "Arts",
    "Travel",
    "Earth",
    "Audio",
    "Video",
    "Live"
  ]

  expectedSportsMenuItems = [
    "Home",
    "Football",
    "Cricket",
    "Formula 1",
    "Rugby U",
    "Tennis",
    "Golf",
    "Cycling",
    "Athletics"
  ]

  extraBurgerItems = ["Weather", "Newsletter"]

  expectedBurgerMenuItems = [...this.expectedMenuItems, ...this.extraBurgerItems]

  async open() {
    await this.page.goto(this.url)
  }

  async verifyDesktopNavigation() {
    await expect(this.page.locator(this.navMenu)).toBeVisible()
  }

  async verifyHamburgerVisible() {
    await expect(this.page.locator(this.hamburgerButton)).toBeVisible()
  }

  async openHamburgerMenu() {
    await this.page.locator(this.hamburgerButton).click()
  }

  async clickSport() {
    await this.page.locator(this.navMenuItems, { hasText: "Sport" }).click()
  }

  async clickHamburgerSportButton() {
    await this.page.locator(this.hamburgerSportButton, { hasText: "Sport" }).click()
  }

  async verifySportPage() {
    await expect(this.page).toHaveURL(this.sportUrl)
    await expect(this.page.locator(this.sportsPageHeader)).toBeVisible()
  }

  async clickAgreeCookieMessage() {
    const frame = this.page.frameLocator(this.cookieFrame)
    await frame.locator(this.agreeCookieMessageButton, {hasText: "I agree"}).click()
  }

  async verifyNavMenuItems() {
    for (const item of this.expectedMenuItems) {
      await this.page.locator(this.navMenuItems, { hasText: item }).isVisible()
    }
  }

  async verifySportNavMenuItems() {
    for (const item of this.expectedSportsMenuItems) {
      await this.page.locator(this.sportsPageNavMenuItems, { hasText: item }).isVisible()
    }
  }

  async verifyBurgerMenuItems() {
    for (const item of this.expectedBurgerMenuItems) {
      await this.page.locator(this.hamburgerMenuItems, { hasText: item }).first().isVisible()
    }
  }
}