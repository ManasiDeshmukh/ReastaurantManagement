import React from 'react'
import {StyleSheet,View,Text,Button,Platform,FlatList,TouchableOpacity} from 'react-native'
import {CATEGORIES} from '../Data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'

const CategoriesScreen=props=>
{

    const renderGridItem=(itemData)=>
    {
    return (
        <CategoryGrid title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>
        {
            props.navigation.navigate({routeName:'CategoryMeals',
            params:
        {
            cid:itemData.item.id
        }})
        }} />
    );
    };
    return(
    <FlatList  data={CATEGORIES}
  keyExtractor={(item,index)=>item.id}
    renderItem={renderGridItem}
      numColumns={2} />
    );
};



CategoriesScreen.navigationOptions=(navData)=>{
 return{   headerTitle:'Meal Categories',
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
    screen:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
export default CategoriesScreen;