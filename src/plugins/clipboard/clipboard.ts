import Clipboard from 'clipboard'
export default class ClipboardJs {
  copy(text: string) {
    return new Promise(function(resolve, reject) {
      const fakeElement = document.createElement('button')
      const clipboard = new Clipboard(fakeElement, {
        text: function() {
          return text
        }
      })
      clipboard.on('success', function(e: unknown) {
        clipboard.destroy()
        resolve(e)
      })
      clipboard.on('error', function(e: unknown) {
        clipboard.destroy()
        reject(e)
      })
      fakeElement.click()
    })
  }
}
