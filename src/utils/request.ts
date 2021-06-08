import axios from 'axios'

export async function getArticle(id: number) {
  const res = await axios.get(`/api/markdown/${id}`)
  return res
}

export async function getTimeLineData(id: number) {
  const res = await axios.get(`/api/timeline/${id}`)
  return res
}