export function run(func: () => void) {
  const runner = () => {
    setTimeout(() => {
      func()
    }, 0)
  }
  window.addEventListener("load", runner)
}
