import React from 'react'
import {StyleSheet,View,FlatList} from 'react-native'
import {CATEGORIES,MEALS} from '../Data/dummy-data';
import Meallist from '../components/Meallist';

const CategoryMeals=props=>
{
  
 const catid=props.navigation.getParam('cid');

    const displayMeals=MEALS.filter(
        meal=>meal.categoryIds.indexOf(catid)>=0);
  
   //gives selected category
return(
    <Meallist listData={displayMeals}
    navigation={props.navigation}/>
)
};



//setting header
CategoryMeals.navigationOptions=(navigationData)=>
{
const catid=navigationData.navigation.getParam('cid');
const selectedcategory=CATEGORIES.find(cat =>cat.id === catid)
return{
    headerTitle:selectedcategory.title,  
};
}

export default CategoryMeals;