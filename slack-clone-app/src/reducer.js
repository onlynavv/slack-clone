export const reducer = (state,action) => {
    if(action.type === 'ENTER_ROOM'){
        console.log(action.payload)
        return {
            ...state,
            roomId:action.payload
        }
    }
    return state
}