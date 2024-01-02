import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Login from "../screeens/Login";
import Drawer from "../screeens/Drawer";
import Double from "../screeens/Double";





const Stack=createNativeStackNavigator()


const Route=()=>{
    return(
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Login"  component={Login} options={{headerShown:false}}   />
        <Stack.Screen name="Drawer"  component={Drawer} options={{headerShown:false}}   />
        <Stack.Screen name="Double"  component={Double} options={{headerShown:false}}   />
    </Stack.Navigator>
</NavigationContainer>
    )
}

export default Route;