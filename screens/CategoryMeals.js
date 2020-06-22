import React from 'react'
import {View,StyleSheet} from 'react-native'
import {useSelector} from  'react-redux'
import {CATEGORIES} from '../Data/dummy-data';
import Meallist from '../components/Meallist';
import DefaultText from '../components/DefaultText'
const CategoryMeals=props=>
{
  
 const catid=props.navigation.getParam('cid');

 const availableMeals=useSelector(state=>state.meals.filterMeals);

    const displayMeals=availableMeals.filter(
        meal=>meal.categoryIds.indexOf(catid)>=0);
  

if(displayMeals.length===0)
{
    return <View style={styles.content}>
         <DefaultText>No meals found,maybe check your filters?</DefaultText>
         </View>
}
   
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
const styles=StyleSheet.create({
    content:{
flex:1,
justifyContent:'center',
alignItems:'center'
    }
})
export default CategoryMeals;