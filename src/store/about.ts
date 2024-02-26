import { Store } from "../core/core"

interface State {
  photo?: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: "",
  name: "Jyeon / Bak JuYeon",
  email: "doryJyeon@gmail.com",
  blog: "none",
  github: "https://github.com/doryJyeon",
  repository: "https://github.com/doryJyeon/movie_app_js"
})
