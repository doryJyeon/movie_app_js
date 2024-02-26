import { Component } from "../core/core"

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: "footer"
    })
  }
  render() {
    this.el.innerHTML = /*html*/`
      <div>
        <a href="https://github.com/doryJyeon/movie_app_js" traget="_blank">
          GitHub Repository
        </a>
      </div>
      <div>
        <a>
          ${new Date().getFullYear()} doryJyeon
        </a>
      </div>
    `
  }
}