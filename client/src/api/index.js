import axios from 'axios'

const API_URL= process.env.REACT_APP_API_URL
const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

export const fetchSaladsList=()=>axios.get(API_URL+'salads',config )
export const fetchMoleculesList=()=>axios.get(API_URL+'molecules',config )
export const postOrder=(data)=>axios.post((API_URL+'order'), data,config )

