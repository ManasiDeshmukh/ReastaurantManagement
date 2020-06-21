import React from 'react'
import {Text} from 'react-native'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Ionicons} from '@expo/vector-icons'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import FilterScreen from '../screens/FilterScreen'

import { createAppContainer} from 'react-navigation'
import CategoreisScreen from '../screens/CategoreisScreen'
import CategoryMeals from '../screens/CategoryMeals'
import  MealDetailScreen from '../screens/MealDetailScreen';
import  Favorite from  '../screens/Favorite'
import Colors from '../consts/Colors'

const defaultStackNavOptions=
    {
        headerStyle:{
            backgroundColor:Colors.primary,
    
        },
        headerTitleStyle:{
          fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
          fontFamily:'open-sans'
        },
        headerTintColor:'white'}
    

//install npm install --save react-navigation-material-bottom-tabs
// npm install --save react-native-paper

const MealsNavigator=createStackNavigator({
Categories:
{screen:CategoreisScreen,
  navigationOptions:{
    headerTitle:'Meal Categories'
    },
},
CategoryMeals:
{screen:CategoryMeals,
    
},
MealDetailScreen:MealDetailScreen
},
{
    defaultNavigationOptions:defaultStackNavOptions
}     
);




const FavNavigator=createStackNavigator(
{
    Favorites:Favorite,
    MealDetailScreen:MealDetailScreen
    

},{
    defaultNavigationOptions:defaultStackNavOptions
    });









//tab navigator
const MealsFavTabNavigator = createMaterialBottomTabNavigator(
    {
      Meals: {
        screen: MealsNavigator,
        navigationOptions: {
          tabBarIcon: tabInfo => {
            return (
              <Ionicons
                name="ios-restaurant"
                size={25}
                color={tabInfo.tintColor}
              />
            );
          },
          tabBarColor:Colors.primary,//niche ka clr
          tabBarLabel:<Text style={{fontFamily:'open-sans-bold'}}>Meals!!</Text>
        }
      },
      Favorites: {
        screen: FavNavigator,
        navigationOptions: {
          tabBarLabel: 'Favorites!',
          tabBarIcon: tabInfo => {
            return (
              <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
            );
          },
          tabBarColor:Colors.accent
        }
      }
    },
    {
      
      //  activeTintColor: Colors.accent,
        shifting:true
        /* if we want to set shifting false 
        barstyle:
        {
            backgroundColor:Colors.primary
        }
       */
    }
  );
  

const FiltersNavigator =createStackNavigator({
  Filters:FilterScreen
},
/* navigationOptions:{
  drawerLabel:'Filters!!'
}, */
{  defaultNavigationOptions:defaultStackNavOptions
})

const MainNavigator=createDrawerNavigator(
  {
    Mealsfavs:{
    screen:MealsFavTabNavigator,
    navigationOptions:{
      drawerLabel:'Meals'}
  },
    Filters:FiltersNavigator
  },
  {
      contentOptions:
      {
        activeTintColor:Colors.accent,
        labelStyle:{fontFamily:'open-sans-bold'}
      }
  }
)

export default createAppContainer(MainNavigator);

/* The navigationOptions you set on the navigator
 will NOT be used in its screens! 
That's the difference to
 defaultNavigationOptions - those option WILL be merged with the screens. */