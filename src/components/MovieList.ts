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
        : '<div class="movies"></div>'}
      <div class="loading-icon hide"></div>
    `

    const moviesEl = this.el.querySelector(".movies")
    moviesEl?.append(
      ...movieStore.state.movies.map(movie => new MovieItem({
        movie
      }).el)
    )

    const loderEl = this.el.querySelector(".loading-icon") as HTMLDivElement
    movieStore.state.loading
      ? loderEl?.classList.remove("hide")
      : loderEl?.classList.add("hide")
  }
}