import React from 'react'
import Meallist from '../components/Meallist'
import {MEALS} from '../Data/dummy-data'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
const FavoritesScreen=props=>
{
    const Favmeals=MEALS.filter(meal=>meal.id==='m1' || meal.id==='m2')
return(
   
  <Meallist listData={Favmeals}
  navigation={props.navigation}
  />  
)
};



FavoritesScreen.navigationOptions=(navData)=>{
    return{   headerTitle:' Your Favorite',
       headerLeft:(<HeaderButtons 
       HeaderButtonComponent={HeaderButton}>
           <Item title="Menu"
           iconName="ios-menu"
           onPress={()=>
           {
   navData.navigation.toggleDrawer();
           }}/>
       </HeaderButtons>
       )
       }
   }
   
   
export default FavoritesScreen;