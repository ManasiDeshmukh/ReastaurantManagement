import React,{useEffect,useCallback} from 'react'
import {ScrollView,StyleSheet,Image,View,Text,Button} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {useSelector,useDispatch} from 'react-redux'
import HeaderButton from '../components/HeaderButton'
import DefaultText from "../components/DefaultText";
import {toggleFavorite} from '../store/actions/meals'


const ListItem=props=>
{
    return (
    <View style={styles.ListItem}>
        <DefaultText>{props.children}</DefaultText></View>
    )
}


const MealDetailScreen=props=>
{
const avaialableMeals=useSelector(state=>state.meals.meals);
//state.meals =state slice and then .meals is props in reducer file

const mealId=props.navigation.getParam('mealId')
const currentMealIsFav=useSelector(state=>state.meals.favMeals.some(meal=>meal.id===mealId));

    
    const selectedMeal=avaialableMeals.find(meal=>meal.id===mealId)
const dispatch=useDispatch();

const toggleFavoriteHandler=useCallback(()=>{
    dispatch(toggleFavorite(mealId));
},
[dispatch,mealId]
)
//dispatch and mealID r the values that should not chnage


    useEffect(()=>
    {
     //   props.navigation.setParams({ mealTitle:selectedMeal.title})
    props.navigation.setParams({toggleFav:toggleFavoriteHandler})
    
    },[toggleFavoriteHandler]) 
// so that we can use it niche


useEffect(()=>
{
    props.navigation.setParams({isFav:currentMealIsFav})
},[currentMealIsFav])




return(<ScrollView>
    <Image 
    source={{uri:selectedMeal.imageUrl}}
  style={styles.image}  />
 <View style={styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
          </View>

<Text style={styles.title}>Ingredients</Text>
{selectedMeal.ingredients.map(ingredient=><ListItem  key={ingredient}>{ingredient}</ListItem >)}

<Text style={styles.title}>Steps</Text>
{selectedMeal.steps.map(step=>(<ListItem key={step}>{step}</ListItem >))}


    <View style={styles.screen}>
        
        <Button title="Go back to categories"
        onPress={()=>
        {props.navigation.popToTop()
        //popToTop() will pop all screens
    }}/>
        
    </View></ScrollView>
)
};


//hook can be used within another hooks and in other functional components

MealDetailScreen.navigationOptions=(navigationData)=>

{
   // const mealId=navigationData.navigation.getParam('mealId')
const toggleFavorite=navigationData.navigation.getParam('toggleFav')
   const mealTitle=navigationData.navigation.getParam('mealTitle')
const isFavorite=navigationData.navigation.getParam('isFav')
//const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    return{
        headerTitle:mealTitle,
        headerTintColor:'white',
        headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
<Item 
title='Favorite' 
iconName= {isFavorite?'ios-star':'ios-star-outline'}
onPress={toggleFavorite}/>

        </HeaderButtons>
        //this is all to get star icon in right corner
        //install npm install npm start
     //install npm install --save react-navigation-header-buttons   
          };
}


const styles=StyleSheet.create({
    screen:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    details:
    {
        flexDirection:'row',
        padding:15,
        justifyContent:'space-around'
    },
    image:{
      width:'100%',
      height:200  
    },
    title:
    {
        fontFamily:'open-sans',
        fontSize:22,
        textAlign:'center'
    },
    ListItem:
    {
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }
})
export default MealDetailScreen;