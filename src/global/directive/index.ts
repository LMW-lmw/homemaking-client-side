import { App } from 'vue'

export function directive(app: App): App {
  app.directive('loadFocus', {
    mounted(el) {
      el.focus()
    }
  })
  return app
}
