import React from 'react'
import {HeaderButton} from 'react-navigation-header-buttons'

import {Ionicons} from '@expo/vector-icons'
//npm install --save @expo/vector-icons
import Colors from '../consts/Colors'
const CustomHeaderButton=props=>
{
    return( <HeaderButton {...props} 
    IconComponent={Ionicons}
    iconSize={23}
    color={'white'}
    />);
    //...props==forward alll props
};
export default CustomHeaderButton