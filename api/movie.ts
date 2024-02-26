import fetch from "node-fetch"
// ts용 node-fatch 설치 필요. npm i -D @types/node-fetch
import { VercelRequest, VercelResponse } from "@vercel/node"
// vercel node 폴더 찾아보면 뭐뭐 있는지 확인 가능

const { APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { title, page, id } = JSON.parse(request.body)
  const url = id 
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=pull`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`

  // node에서 js fetch 사용하기 위해 node-fetch@2버전 설치
  const res = await fetch(url)
  const json = await res.json()

  response.status(200).json(json)
}