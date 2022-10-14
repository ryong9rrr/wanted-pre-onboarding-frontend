type Fn = (...args: any[]) => void | Promise<void>

export default function debounce<T extends Fn>(cb: T, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null
  return function <U>(this: U, ...args: Parameters<typeof cb>) {
    // eslint-disable-next-line
    const context = this
    if (typeof timer === 'number') {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      cb.apply(context, args)
    }, delay)
  }
}
