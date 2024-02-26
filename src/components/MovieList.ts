import { Component } from "../core/core"
import movieStore from "../store/movie"
import MovieItem from "./MovieItem"

export default class MovieList extends Component {
  constructor() {
    super()
    movieStore.subscribe("movies", () => {
      this.render()
    })
    movieStore.subscribe("loading", () => {
      this.render()
    })
    movieStore.subscribe("message", () => {
      this.render()
    })
  }
  render() {
    this.el.classList.add("movie-list")
    this.el.innerHTML = /* html */`
      ${movieStore.state.message
        ? `<div class="message">${movieStore.state.message}</div>`
        : '<div class="movies"></div>' }
      <div class="loading-icon hide"></div>
    `

    const moviesEl = this.el.querySelector(".movies")
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loderEl = this.el.querySelector(".loading-icon")
    // loderEl 선언 시 as HTMLDivElement로 하는게 더 정확함.
    movieStore.state.loading
      ? loderEl?.classList.remove("hide")
      : loderEl?.classList.add("hide")
  }
}