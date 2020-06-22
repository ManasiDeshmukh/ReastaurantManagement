import React, { useState } from 'react';
import * as Font from 'expo-font';
import{AppLoading} from 'expo'
import{enableScreens} from 'react-native-screens'

import MealsNavigator from './navigation/MealsNvaigator'
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import mealsReducer from './store/reducers/meals'


enableScreens();//use in larger application

const rootReducer=combineReducers({
 meals:mealsReducer //IN END it will merges this meal reducer into this root reducer and later able 
 //to work with the state managed by the meals reducer 
 //able to access state using this meals
})
const store=createStore(rootReducer);


const fetchFonts=()=>
{
  Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const[fontLoaded,setFontLoaded]=useState(false);
  
  
  
  if(!fontLoaded)
  return <AppLoading 
  startAsync={fetchFonts}
   onFinish={()=> setFontLoaded(true)}/>

return <Provider store={store}><MealsNavigator /></Provider>
//store is property to which store made upr is passesd
}
