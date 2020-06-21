import React,{useState,useEffect,useCallback} from 'react'
import {StyleSheet,View,Text,Switch} from 'react-native'
import {HeaderButtons,Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/HeaderButton'
import Colors from '../consts/Colors'




const FilterSwitch=props=>
{
    return(
        <View style={styles.filtercontainer}>
        <Text>{props.label}</Text>
        <Switch value={props.state}
        trackColor={{true:Colors.primary}}
  thumbColor={Colors.primary} 
  onValueChange={props.onChange}/>
    </View>
    )
}

const FilterScreen=props=>
{
    const {navigation}=props;

    const[isGlutenFree,setIsGlutenFree]=useState(false)
    const[isLactoesFree,setIsLactoesFree]=useState(false)
    const[isVeagan,setIsVegan]=useState(false)
    const[isVegetarian,setIsVegetarian]=useState(false)


const saveFilters=useCallback(()=>
{
    const appliedFilters={
        glutenfree:isGlutenFree,
        lactoesfree:isLactoesFree,
        vegan:isVeagan,
        vegetarian:isVegetarian
    }
},[isGlutenFree,isLactoesFree,isVeagan,isVegetarian]//dependencies
//if any of 4 state changes then this function will recreated
)

useEffect(()=>
{
navigation.setParams({save:saveFilters})
    //if unhad existing params, u would still use setParams(), ur new params get merged with existing paramas
},[saveFilters])
//useeefect hr bar jb update hoga to render hoga isliye
//2nd arg diya mtlb jb 2nd arg update hoga to useefect run hoga


return(
    <View style={styles.screen}>
        <Text style={styles.title}>Available Filters/Restrictions</Text>
  <FilterSwitch label='Gluten-Free'
  state={isGlutenFree}
  onChange={newValue=>setIsGlutenFree(newValue)}
  />
   <FilterSwitch label='Lactose-Free'
  state={isLactoesFree}
  onChange={newValue=>setIsLactoesFree(newValue)}
  />
   <FilterSwitch label='Vegan'
  state={isVeagan}
  onChange={newValue=>setIsVegan(newValue)}
  />
   <FilterSwitch label='Vegetarian'
  state={isVegetarian}
  onChange={newValue=>setIsVegetarian(newValue)}
  />
  
    </View>
)
};

FilterScreen.navigationOptions=(navData)=>{
    return{   headerTitle:'Filter Screen',
       headerLeft:(<HeaderButtons 
       HeaderButtonComponent={HeaderButton}>
           <Item title="Menu"
           iconName="ios-menu"
           onPress={()=>
           {
   navData.navigation.toggleDrawer();
           }}/>
       </HeaderButtons>
       ),
       headerRight:(<HeaderButtons 
        HeaderButtonComponent={HeaderButton}>
            <Item title="Save"
            iconName="ios-save"
            onPress={
            
   navData.navigation.getParam('save')
            }/>
        </HeaderButtons>
        ),
       }
   }
   
   
const styles=StyleSheet.create({
    screen:
    {
        flex:1,
        alignItems:'center'
    },
    title:{
        fontFamily:'open-sans-bold',
        fontSize:22,
        margin:20,
        textAlign:'center'
    },
    filtercontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'80%',
        marginVertical:15
    }
})
export default FilterScreen;