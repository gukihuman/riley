import { init, h, classModule } from "snabbdom"
const patch = init([classModule])
const vnode = h("body.bg-sky-500", "Hello, Snabbdom.")
const app = document.body
patch(app, vnode)
