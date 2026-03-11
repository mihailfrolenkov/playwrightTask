import { Before, After } from "@cucumber/cucumber"
import { chromium } from "playwright"
import { CustomWorld } from "./world"

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ headless: true })
})

After(async function (this: CustomWorld) {
  await this.browser.close()
})