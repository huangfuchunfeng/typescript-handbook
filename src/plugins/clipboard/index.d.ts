declare namespace clipboard {
  interface Options {
    /**
     * Overwrites default command ('cut' or 'copy').
     * @param elem Current element
     */
    action?(elem: Element): 'cut' | 'copy'

    /**
     * Overwrites default target input element.
     * @param elem Current element
     * @returns <input> element to use.
     */
    target?(elem: Element): Element

    /**
     * Returns the explicit text to copy.
     * @param elem Current element
     * @returns Text to be copied.
     */
    text?(elem: Element): string

    /**
     * For use in Bootstrap Modals or with any
     * other library that changes the focus
     * you'll want to set the focused element
     * as the container value.
     */
    container?: Element
  }

  interface Event {
    action: string
    text: string
    trigger: Element
    clearSelection(): void
  }
}
export as namespace clipboard
declare module 'clipboard' {
  export default class clipboard {
    constructor(
      selector: string | Element | NodeListOf<Element>,
      options?: clipboard.Options
    ) {}
    on(type: 'success' | 'error', handler: (e: clipboard.Event) => void): this
    on(type: string, handler: (...args: any[]) => void): this
    destroy(): void
    static isSupported(): boolean
  }
}
