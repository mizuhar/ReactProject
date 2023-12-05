import { request } from "../lib/request"




const baseURL = 'http://localhost:3030/data/boxers'


export const getAll = async ()=>{
    const result =  await request('GET', baseURL)
  
      return result
  }
  export const create = async (boxerData) =>{
    const result = await request('POST', baseURL, boxerData)
     
    return result
}