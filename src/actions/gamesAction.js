import axios from 'axios'
import { popularGamesURL } from '../api'

// action creator 
export const loadGames = () => async (dispatch) => {
    // axios fetch 
    const popularData = await axios.get(popularGamesURL()); 

    // dispatch action 
    dispatch({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results, 
        } 
    }) 
}  










