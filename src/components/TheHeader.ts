import { Component } from "../core/core"

interface State {
  [key: string]: unknown
  menus:{
    name: string
    href: string
  }[]
}

export default class TheHeader extends Component {
  // 초기화 데이터는 없지만 !로 할당한 것으로 인식시킴. 할당 단언
  public state!: State
  constructor() {
    super({
      tagName: "header",
      state: {
        menus: [
          {
            name: "Search",
            href: "#/"
          },
          {
            name: "Movie",
            href: "#/movie?id=tt2294629"
          },
          {
            name: "About",
            href: "#/about"
          },
        ]
      }
    })
    window.addEventListener("popstate", () =>{
      this.render()
    })
  }
  render() {
    this.el.innerHTML = /*html*/`
      <a href="#/" class="logo">
        <span>OMDbAPI</span>.COM
      </a>
      <nav>
        <ul>
          ${this.state.menus.map(menu => {
            const href = menu.href.split("?")[0]
            const hash = location.hash.split("?")[0]
            const isActive = href === hash
            return /*html*/`
              <li>
                <a 
                  class="${isActive && 'active'}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`
          }).join("")}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <div class="user-img"></div>
      </a>
    `
  }
}