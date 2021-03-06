const initState = {
    popularGames: [], 
    newgames: [],
    upcomingGames: [],
    searched: [],
} 

export default function gamesReducer (state = initState, action) {
    switch(action.type) {
        case 'FETCH_GAMES':
            return {...state, popularGames: action.payload.popularGames }
        default:
            return {...state}
    }
} 

