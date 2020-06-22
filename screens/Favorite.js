import React from 'react'
import Meallist from '../components/Meallist'
import {useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import { View,StyleSheet } from 'react-native'
import DefaultText from '../components/DefaultText'

const FavoritesScreen=props=>
{
    const favMeals=useSelector(state=>state.meals.favMeals)
    //firlst meals use stateslice and 2nd meals use favoritemeals prop from reducer file 
   if(favMeals.length===0 || !favMeals) 
   {
//ys isliye li agr koi fav nahi hai toh kuch text dikhaye vo screnn  pe
return <View style={styles.content}>
    <DefaultText>No favorite Meals found!Start adding some.</DefaultText></View>
   }
return(
   
  <Meallist listData={favMeals}
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
   
   const styles=StyleSheet.create({
     content:
     {
         flex:1,
         justifyContent:'center',
         alignItems:'center'
     }  
   })
export default FavoritesScreen;