import { request } from "../lib/request"




const baseURL = 'http://localhost:3030/data/boxers'


export const getAll = async ()=>{
    const result =  await request('GET', baseURL)
  
      return result
  }

export const getOne = async (boxerId)=>{
    const result =  await request('GET', `${baseURL}/${boxerId}`)
  
      return result
  }
  export const create = async (boxerData) =>{
    const result = await request('POST', baseURL, boxerData)
     
    return result
}
export const update = async (boxerId, boxerData) =>{

    const result = await request('PUT', `${baseURL}/${boxerId}`, boxerData)

    return result

}
  export const remove = async (boxerId) =>{

    const result = await request('DELETE', `${baseURL}/${boxerId}`)

    return result
}