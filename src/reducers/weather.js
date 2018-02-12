function weather(state = {}, action) {
    switch (action.type) {
        case 'FETCH_WEATHER_DONE':
            return Object.assign(state, action.result)
        default:
            return state
    }
}

export default weather;
