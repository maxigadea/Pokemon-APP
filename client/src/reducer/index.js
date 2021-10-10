

const initialState = {
    pokemons: [],
    pokemonsAll: []
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                pokemonsAll: action.payload,
            }
        case 'FILTER_BY_TYPE':
            const pokemonsAll = state.pokemonsAll;
            const typeFiltered = action.payload === 'All' ? pokemonsAll : pokemonsAll.filter(el => el.type.includes(action.payload))
            return {
                ...state,
                pokemons: typeFiltered,
            }
        case 'FILTER_CREATED':
            const createdFilter = action.payload === 'created'? state.pokemonsAll.filter(el => el.createdInDb) : state.pokemonsAll.filter(el => !el.createdInDb)
            return {
                ...state,
                pokemons: action.payload === 'All' ? state.pokemons : createdFilter
            }
        case 'ORDER_BY_NAME':
            let orderArray = action.payload === 'asc' ? state.pokemons.sort(function(a,b){
                if(a.name > b.name) {
                    return 1
                }
                if(a.name < b.name) {
                    return -1
                }
                return 0;
            }) : state.pokemons.sort(function(a,b) {
                if(a.name < b.name) {
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0;
            })
            return {
                ...state,
                pokemons: orderArray
            }
            case 'ORDER_BY_ATTACK':
            let orderArrayAttack = action.payload === 'more' ? state.pokemons.sort(function(a,b){
                if(a.name > b.name) {
                    return 1
                }
                if(a.name < b.name) {
                    return -1
                }
                return 0;
            }) : state.pokemons.sort(function(a,b) {
                if(a.name < b.name) {
                    return 1
                }
                if(a.name > b.name){
                    return -1
                }
                return 0;
            })
            return {
                ...state,
                pokemons: orderArrayAttack
            }
        default: return state;
    }
}

export default rootReducer;


