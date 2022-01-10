import axios from 'axios'

const API_URL=process.env.REACT_APP_API_URL

export const fetchSaladsList=()=>axios.get(API_URL+'salads')

//exporting to "/src/redux/stories.js"