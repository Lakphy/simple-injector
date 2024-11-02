export interface Rule {
  id: string
  name: string
  urlPattern: string
  content: string
  type: "js" | "css"
  enabled: boolean
}
