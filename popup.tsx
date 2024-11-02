import { useEffect, useState } from "react"

import PopupWrapper from "./components/PopupWrapper"
import RuleItem from "./components/RuleItem"
import type { Rule } from "./types"

import "./style.css"

function IndexPopup() {
  const [rules, setRules] = useState<Rule[]>([])

  const [expandedRule, setExpandedRule] = useState<Rule | null>(null)

  useEffect(() => {
    chrome.storage.local.get("rules", (result) => {
      setRules(result.rules || [])
    })
  }, [])

  useEffect(() => {
    chrome.storage.local.set({ rules })
  }, [rules])

  const handleCreate = () => {
    const newId = Date.now().toString()
    const newItem = {
      id: newId,
      name: "Untitled",
      urlPattern: "",
      content: "",
      type: "css",
      enabled: true
    } as Rule
    setRules([newItem, ...rules])
    setExpandedRule(newItem)
  }

  return (
    <PopupWrapper title="💉 Simple Injector" onCreate={handleCreate}>
      {rules.map((rule) => (
        <RuleItem
          key={rule.id}
          rule={rule}
          expanded={expandedRule?.id === rule.id}
          onExpand={() => setExpandedRule(rule)}
          onClose={() => setExpandedRule(null)}
          onUpdate={(rule) => {
            setRules(rules.map((r) => (r.id === rule.id ? rule : r)))
            setExpandedRule(null)
          }}
          onDelete={() => {
            setRules(rules.filter((r) => r.id !== rule.id))
          }}
        />
      ))}
    </PopupWrapper>
  )
}

export default IndexPopup
