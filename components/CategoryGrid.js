import React from 'react'
import{TouchableOpacity,View,Text,StyleSheet}from 'react-native'



const CategoryGrid=props=>{
return (<TouchableOpacity style={styles.gridItem}
     onPress={props.onSelect}>
  <View style={{ ...styles.container, ...{ backgroundColor:props.color} } } >



        <Text 
        style={styles.title}
        numberOfLines={2}
        
        >{props.title}</Text>
        </View>
        </TouchableOpacity>
    //title is from category file
) ;
};

const styles=StyleSheet.create({
    title:
    { 
        //fontFamily:'open-sans-bold',
        fontSize:20,
        textAlign:'right'
    },
    container:{
      flex:1,
      borderRadius: 10,
      shadowColor:'black',
      shadowOpacity:0.26,
      shadowOffset:{width:0,height:2},
      shadowRadius:10,
      elevation:3,
      padding:15,
      justifyContent:'flex-end',
      alignItems:'flex-end'

    },
    gridItem:
    {
        flex:1,
        margin:20,//spacing
height:120  ,
borderRadius:10,
//overflow:'hidden'
elevation:5 //shadow on windows
  }
})

export default CategoryGrid