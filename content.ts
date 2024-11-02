import type { Rule } from "./types"
import { run } from "./utils/page-runner"

async function injectRules(rules: Rule[]) {
  const url = window.location.href

  rules.forEach((rule) => {
    if (rule.enabled && new RegExp(rule.urlPattern).test(url)) {
      if (rule.type === "js") {
        const script = document.createElement("script")
        script.textContent = rule.content
        document.head.appendChild(script)
      } else if (rule.type === "css") {
        const style = document.createElement("style")
        style.textContent = rule.content
        document.head.appendChild(style)
      }
    }
  })
}

function main() {
  chrome.storage.local.get("rules", (result) => {
    console.log("======= result =======\n", result)
    injectRules(result.rules as Rule[])
  })
}

run(main)
