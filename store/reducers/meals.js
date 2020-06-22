import{MEALS} from '../../Data/dummy-data'
import {TOGGLE_FAVORITE,SET_FILTERS} from '../actions/meals'
const initialState={
    meals:MEALS,
    filterMeals:MEALS,//filter kiya nahi hai toh initially sbhi meals aayenge
    favMeals:[]//initialy fav mark nhi kia hai toh empty
}


const mealsReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case TOGGLE_FAVORITE:
        const existingIndex= state.favMeals.findIndex(meal=>meal.id===action.mealId)//action.mealId=action file me jo set kia hai
            //findindex return current index of array
if(existingIndex>=0)//already have that meal as part of fav meals
 {
     const updatedFavMeals=[...state.favMeals];
     updatedFavMeals.splice(existingIndex,1)//remove existingindex vala item
     return{...state,favMeals:updatedFavMeals}
 }
  else  {
      const meal=state.meals.find(meal=>meal.id===action.mealId)
return {...state,favMeals:state.favMeals.concat(meal)}
  } 

//    mealId is added to action so if that meal is already part of fav meals
        //if yes then want to remove it
        //if not then add it 
         
        case SET_FILTERS:
            const appliedFilters=action.filters;
            const updatedfilteredMeals=state.meals.filter(meal=>
                {
                    if(appliedFilters.glutenfree && !meal.isGlutenFree)
                    return false;
                    if(appliedFilters.lactoesfree && !meal.isLactoseFree)
                    return false;
                    if(appliedFilters.vegetarian && !meal.isVegetarian)
                    return false;
                    if(appliedFilters.vegan && !meal.isVegan)
                    return false;
                    return true;
                })
                return{...state,filterMeals:updatedfilteredMeals}
        default:
               return state; 
    }

}
export default mealsReducer
