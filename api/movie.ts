import fetch from "node-fetch"
// ts용 node-fatch 설치 필요. npm i -D @types/node-fetch
import { VercelRequest, VercelResponse } from "@vercel/node"
import dotenv from 'dotenv';

dotenv.config();

const { APIKEY } = process.env

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', ['POST'])
    return response.status(405).json({ error: 'Method Not Allowed' })
  }

  if (!APIKEY) {
    return response.status(500).json({ error: 'API key is missing' })
  }

  const { title, page, id } = JSON.parse(request.body)
  const url = id
    ? `https://www.omdbapi.com/?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://www.omdbapi.com/?apikey=${APIKEY}&s=${title}&page=${page}`

  // node에서 js fetch 사용하기 위해 node-fetch@2버전 설치
  try {
    const res = await fetch(url, {
      headers: {
        Accept: "application/json"
      }
    })
    if (!res.ok) {
      return response.status(res.status).json({ error: 'Failed to fetch data from OMDB API' })
    }

    const json = await res.json()
    return response.status(200).json(json)
  } catch (error) {
    return response.status(500).json({ error: error })
  }
}