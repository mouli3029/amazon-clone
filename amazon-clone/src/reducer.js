//All of the datalayer logic takes place
export const getBasketTotal = (basket)=>
    basket?.reduce((amount,item)=> item.price+amount ,0);


export const initialState ={
    basket :[],
    user:null,

}

// reducer :-- manupilate data layer with actions(add to basket ,remve from basket) like that
const reducer= (state,action)=>{
    console.log(action)

    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user

            }
            break;
        case 'ADD_TO_BASKET':
            //Logic for adding
            return{ 
                ...state,
                basket: [...state.basket,action.item]
            }
            break;
        case 'REMOVE_FROM_BASKET':
            // Logic for removing
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem)=>basketItem.id=== action.id)
            if(index>=0){
                newBasket.splice(index, 1);



            }else{
                console.warn("Cannot")
            }
            return { ...state, basket: newBasket}
            break;
        default:
            return state;

    }
}

export default reducer;