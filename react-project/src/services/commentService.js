import { request } from "../lib/request"

const baseURL = 'http://localhost:3030/data/comments'


export const getAll  =  async (boxerId) => {

    const query = new URLSearchParams({
        where: `boxerId="${boxerId}"`,
        load: `owner=_ownerId:users`

    })

  const result  =   await request('GET', `${baseURL}?${query}`)

   return result
}

export const createComment = async (boxerId, text) => {

    const newComment = await request('POST', baseURL, {
        boxerId,
        text
    })
    return newComment
}