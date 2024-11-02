export default function PopupWrapper({
  title,
  onCreate,
  children
}: {
  title: string
  onCreate: () => void
  children: React.ReactNode
}) {
  return (
    <div className="w-[400px] h-[600px] bg-slate-900 text-stone-100">
      <div className="p-4 bg-slate-600 flex justify-between items-center">
        <div className="text-2xl font-bold">{title}</div>
        <div>
          <button className="bg-slate-800 rounded-md p-2" onClick={onCreate}>
            添加
          </button>
        </div>
      </div>
      <div className="p-3 h-[calc(100%-50px)] overflow-y-auto">{children}</div>
    </div>
  )
}
