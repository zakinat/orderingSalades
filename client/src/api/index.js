import axios from 'axios'

const API_URL=process.env.REACT_APP_API_URL

export const fetchSaladsList=()=>axios.get(API_URL+'salads')
export const fetchMoleculesList=()=>axios.get(API_URL+'molecules')

//exporting to "/src/redux/stories.js"