const reducer = (state, action) =>{

    switch (action?.type) {
        
        case 'Get_All_Commnets':

        return [...action.payload]
         
        case 'Add_Comm':

        return [...state, action.payload]
         
    
        default:
            return state;
    }
}

export default reducer
