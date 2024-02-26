import { Component } from "../core/core"
import { SimpleMovie } from "../store/movie"

interface Props {
  [key: string]: unknown
  movie: SimpleMovie
}

export default class MovieItem extends Component {
  // 초기화 데이터는 없지만 !로 할당한 것으로 인식시킴.
  public props!: Props
  constructor(props: Props) {
    super({
      props,
      tagName: "a"
    })
  }

  render() {
    const { movie } = this.props

    this.el.setAttribute("href", `#/movie?id=${movie.imdbID}`)
    this.el.classList.add("movie")
    this.el.style.backgroundImage = `url(${movie.Poster})`
    this.el.innerHTML = /* html */`
      <div class="info">
        <div class="year">${movie.Year}</div>
        <div class="title">${movie.Title}</div>
      </div>
    `
  }
}