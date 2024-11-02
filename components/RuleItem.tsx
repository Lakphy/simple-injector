import { useState } from "react"

import type { Rule } from "../types"

export default function RuleItem({
  rule,
  expanded,
  onExpand,
  onClose,
  onUpdate,
  onDelete
}: {
  rule: Rule
  expanded: boolean
  onExpand: () => void
  onClose: () => void
  onUpdate: (rule: Rule) => void
  onDelete: () => void
}) {
  const [name, setName] = useState(rule.name)
  const [urlPattern, setUrlPattern] = useState(rule.urlPattern)
  const [type, setType] = useState(rule.type)
  const [content, setContent] = useState(rule.content)
  return (
    <div
      className={`bg-slate-700 rounded-md mb-2 overflow-y-auto transition-all duration-300 ${
        expanded ? "max-h-[400px]" : "max-h-9"
      }`}>
      <div className="flex gap-2 flex-row items-center p-2">
        <div className="text-sm font-bold ">{rule.name}</div>
        <div className="flex-1"></div>
        {expanded || (
          <>
            <button
              className="text-sm text-stone-400 hover:text-stone-100"
              onClick={onExpand}>
              编辑
            </button>
            <button
              className="text-sm text-stone-400 hover:text-stone-100"
              onClick={onDelete}>
              删除
            </button>
          </>
        )}
        {expanded && (
          <>
            <button
              className="text-sm text-stone-400 hover:text-stone-100"
              onClick={onClose}>
              关闭
            </button>
            <button
              className="text-sm text-stone-400 hover:text-stone-100"
              onClick={() =>
                onUpdate({
                  ...rule,
                  name,
                  urlPattern,
                  type,
                  content
                })
              }>
              保存
            </button>
          </>
        )}
      </div>
      <div className="w-[100%] p-2">
        <div className="text-sm text-stone-400 mb-2">
          <div className="font-bold">名称</div>
          <input
            className="w-[100%] bg-slate-800 rounded-md p-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="text-sm text-stone-400 mb-2">
          <div className="font-bold">正则</div>
          <input
            className="w-[100%] bg-slate-800 rounded-md p-2"
            value={urlPattern}
            onChange={(e) => setUrlPattern(e.target.value)}
          />
        </div>
        <div className="text-sm text-stone-400 mb-2">
          <div className="font-bold">类型</div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value as "js" | "css")}
            className="w-[100%] bg-slate-800 rounded-md p-2">
            {/* <option value="js">脚本</option> */}
            <option value="css">样式表</option>
          </select>
        </div>
        <div className="text-sm text-stone-400 mb-2">
          <div className="font-bold">内容</div>
          <textarea
            className="w-[100%] h-[100px] bg-slate-800 rounded-md p-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}
