import React from 'react'
import {Text,StyleSheet} from 'react-native'
const DefaultText=props=>
{
return <Text style={styles.text}text>{props.children}</Text>
}
const styles=StyleSheet.create({
    text:
    {
fontFamily:'open-sans'
    }
})
export default DefaultText;