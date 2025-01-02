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
  name: "Park JuYeon",
  email: "doryJyeon@gmail.com",
  blog: "https://www.notion.so/Welcome-16895eaa343d440daf65ce8ed1cbf347?pvs=25",
  github: "https://github.com/doryJyeon",
  repository: "https://github.com/doryJyeon/movie_app_js"
})
