import fetch from "node-fetch"

const { APIKEY } = process.env

export default async function handler(request, response) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id 
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=pull`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`

  // node에서 js fetch 사용하기 위해 node-fetch@2버전 설치
  const res = await fetch(url)
  const json = await res.json()

  response.states(200).json(json)
}