import { App } from 'vue'

import registerElement from './register-element'
import registerProperties from './regist-properties'

export function registerApp(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  app.use(registerProperties)
}
