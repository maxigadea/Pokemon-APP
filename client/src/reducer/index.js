

const initialState = {
    pokemons: [],
    pokemonsAll: [],
    pokemonsDetail: [],
    type: [],
    id: []
}

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'GET_POKEMONS':
            return {
                ...state,
                pokemons: action.payload,
                pokemonsAll: action.payload,
            }
        case 'GET_NAME_POKEMONS':
            return {
                ...state,
                pokemons: action.payload
            }
        case 'POST_POKEMON':
            return {
                ...state,
            }
        case 'GET_TYPES':
            return {
                ...state,
                type: action.payload
            }
        case 'FILTER_BY_TYPE':
            const pokemonsAll = state.pokemonsAll;
            const pokemonsApi = pokemonsAll.filter(e => e.type);
            const pokemonsDb = pokemonsAll.filter(e => e.types);
            const typeFiltered1 = action.payload === 'All' ? pokemonsApi : pokemonsApi.filter(el => el.type[0] === action.payload || el.type[1] === action.payload)
            const typeFiltered2 = action.payload === 'All' ? pokemonsDb : pokemonsDb.filter(el => el.types[0].name === action.payload || el.types[1].name === action.payload)
            const typeFiltered = typeFiltered1.concat(typeFiltered2);
            
            return {
                ...state,
                pokemons: typeFiltered
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
            case 'GET_DETAIL':
                return {
                    ...state,
                    id: [action.payload]
                }
        default: return state;
    }
}

export default rootReducer;


