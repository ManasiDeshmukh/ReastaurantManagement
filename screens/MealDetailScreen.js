import React from 'react'
import {ScrollView,StyleSheet,Image,View,Text,Button} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import {MEALS} from '../Data/dummy-data'
import HeaderButton from '../components/HeaderButton'
import DefaultText from "../components/DefaultText";


const ListItem=props=>
{
    return (
    <View style={styles.ListItem}>
        <DefaultText>{props.children}</DefaultText></View>
    )
}


const MealDetailScreen=props=>
{
    const mealId=props.navigation.getParam('mealId')
    const selectedMeal=MEALS.find(meal=>meal.id===mealId)
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

MealDetailScreen.navigationOptions=(navigationData)=>
{const mealId=navigationData.navigation.getParam('mealId')
const selectedMeal=MEALS.find(meal=>meal.id===mealId)
    return{
        headerTitle:selectedMeal.title,
        headerTintColor:'white',
        headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton}>
<Item 
title='Favorite' iconName='ios-star'  
onPress={()=>
{
console.log('makred')
}}/>
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