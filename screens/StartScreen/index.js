
import React from 'react';
import {Button, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GameScreen from "../GameScreen";
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


const StartScreen = () => {
    const nav = useNavigation();
    const [valuetime, changeValueTime] = useState(10);
    const [valueadd, changeValueAdd] = useState(5);

    const onPress = () => {
        changeValueTime(parseInt(valuetime));
        changeValueAdd(parseInt(valueadd));
        nav.navigate("Game", {time: valuetime * 60, add: valueadd});
      
     


      
    };


    return(
        <ImageBackground style={{width: "100%", height: "100%", alignItems: "center", backgroundColor: "#121212"}}  > 
        <View style={{top: 20}}>
        <View style={{flexDirection: "row"}}>
            <Text style={{fontSize: 50, fontWeight: "bold", fontFamily: "serif", color: "white"}}>UR</Text>
            <MaterialCommunityIcons name={"chess-bishop"} size={58} color={"white"}></MaterialCommunityIcons>

        </View>
        <Text style={{marginLeft: 4, bottom: 10, fontFamily: "serif", color: "white", opacity: 0.9}} >Chess clock</Text>


        </View>
        
        <View style={{alignItems: "center", justifyContent: "center", flex: 1}}>

        <View style={{height: 183, width: 155, marginBottom: 20, borderRadius: 10, backgroundColor: "#574d4c"}}>
        <Text style={{fontSize: 17, color: "white", opacity: 0.9, margin: 5}}>Prechoices</Text>
        <View style={{alignItems: "center", marginTop: 8}}>
        <View style={{backgroundColor: "grey", width: 70, height: 30, borderRadius: 20, alignItems: "center", justifyContent: "center", marginBottom: 15}}>
            <TouchableOpacity onPress={() => {nav.navigate("Game", {time: 10 * 60, add: 5})}}>
            <Text style={{fontWeight: "bold", color: "white", opacity: 0.7, fontSize: 17}}>10|5</Text>
            </TouchableOpacity>
            
            </View>
            <View style={{backgroundColor: "grey", width: 70, height: 30, borderRadius: 20, alignItems: "center", justifyContent: "center", marginBottom: 15}}>
                <TouchableOpacity onPress={() => {nav.navigate("Game", {time: 3 * 60, add: 2})}}>
                <Text style={{fontWeight: "bold", color: "white", opacity: 0.7, fontSize: 17}}>3|2</Text>   

                </TouchableOpacity>
          
            </View>
            <View style={{backgroundColor: "grey", width: 70, height: 30, borderRadius: 20, alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress={() => {nav.navigate("Game", {time: 90 * 60, add: 60})}}>
                <Text style={{fontWeight: "bold", color: "white", opacity: 0.7, fontSize: 17}}>90|60</Text> 

                </TouchableOpacity>
              
            </View>
        </View>

        <View style={{alignItems: "center", flexDirection: "row", marginTop: 0}}></View>

        </View>
        
        <View style={{height: 200, width: 155, marginBottom: 20, borderRadius: 10, backgroundColor: "#574d4c"}}>
        <Text style={{fontSize: 17, color: "white", opacity: 0.9, margin: 5}}>Customize</Text>

        <View style={{alignItems: "center", flexDirection: "row", marginTop: 0}}>

       
    
        <View style={{borderRadius: 10, width: 70, marginLeft:17, marginTop: 16}}>
        <TextInput style={{paddingHorizontal: 5, width: "90%", borderBottomColor: "grey", height: 34, fontSize: 20, fontWeight: "bold",color: "white", borderBottomWidth: 1,}} keyboardType={"numeric"}defaultValue={"10"} placeholderTextColor={"grey"} onChangeText={(text) => {changeValueTime(text)}}></TextInput>
        <Text style={{fontSize: 10, color: "grey"}}>min</Text>
        </View>
        <Text style={{fontSize: 40, color: "#403b3a", marginLeft: 5, marginBottom: 7}}>|</Text>
        <View style={{ borderRadius: 10, width: 40, marginLeft: 5, flexDirection: "column"}}>
            <TouchableOpacity onPress={() => {changeValueAdd(val => val + 1)}}style={{backgroundColor: "grey", height: 25, width: 25, marginBottom: 5, borderRadius: 20, justifyContent: "center", alignItems: "center", marginLeft: 2}}><Text style={{color: "white", fontSize: 20, marginBottom: 3}}>+</Text></TouchableOpacity>
        <Text style={{paddingHorizontal: 5, width: "100%", height: 40, fontSize: 20, fontWeight: "bold", color: "white", paddingTop: 6,}} onChangeText={(text) => {changeValueAdd(text)}} keyboardType={'numeric'}>{valueadd}</Text>
        <TouchableOpacity onPress={() => {valueadd > 0 ? changeValueAdd(val => val-1) : null}}style={{backgroundColor: "grey", height: 25, width: 25, marginTop: 5, borderRadius: 20, justifyContent: "center", alignItems: "center", marginLeft: 2}}><Text style={{color: "white", fontSize: 30, marginBottom: 5}}>-</Text></TouchableOpacity>
        </View>
        </View>
        <View style={{width: "100%", marginTop: 20, alignItems: "center"}}>
        <View style={{width: 80, height: 30, borderRadius: 20}}>
            <TouchableOpacity style={{width: "100%", backgroundColor: "grey", height: "100%", borderRadius: 20, alignItems: "center", justifyContent: "center"}} onPress={onPress}>
                <Text style={{fontWeight: "bold", fontSize: 13}}>START</Text>
    
            </TouchableOpacity>
        
        </View>
        



        </View>
      
        
        </View>
        </View>
     
     
       
</ImageBackground>


    );
}

export default StartScreen;