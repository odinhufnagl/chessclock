
import React from 'react';
import {Text, TextInput, View } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

import { TouchableOpacity } from 'react-native-gesture-handler';
import { min } from 'react-native-reanimated';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import FoundationIcon from "react-native-vector-icons/Foundation";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


class GameScreen2 extends React.Component {

    constructor(props){
       super(props);
       this.route = this.props.route;
       
       this.state = {
           timer1iscurrent: false, 
           timer2iscurrent: false, 
           timer1: parseInt(this.route.params.time), 
           timer2: parseInt(this.route.params.time),
           timer1moves: 0,
           timer2moves: 0,
           currenttimer1: 0,
           currenttimer2: 0};
        this.change1 = this.change1.bind(this);
        this.change2 = this.change2.bind(this);
       

    };
    
 

    startTimer1(){
        
        if (this.state.timer1iscurrent == false){

        clearInterval(this.state.currenttimer2);
   
        
       
        this.setState({timer1iscurrent: true, timer2iscurrent: false, timer2: this.state.timer1iscurrent || this.state.timer2iscurrent ? parseInt(this.state.timer2) + this.route.params.add : this.state.timer2, currenttimer1: setInterval(this.change1, 1000), timer2moves: this.state.timer2moves + 1});
       
    }
            

    };
    change1() {
        this.setState({timer1: parseInt(this.state.timer1) - 1});
       
    };
    startTimer2(){
            if (this.state.timer2iscurrent == false){
                clearInterval(this.state.currenttimer1);
                this.setState({timer2iscurrent: true, timer1iscurrent: false, timer1:  this.state.timer1iscurrent || this.state.timer2iscurrent ? parseInt(this.state.timer1) + this.route.params.add : this.state.timer1, currenttimer2: setInterval(this.change2, 1000), timer1moves: this.state.timer1moves+1});
                }
            }
            
        
    change2(){
        this.setState({timer2: parseInt(this.state.timer2) - 1});
       
    };
    pauseGame() {
        
        clearInterval(this.state.currenttimer1);
        clearInterval(this.state.currenttimer2);
        this.setState({changetimer1iscurrent: false, changetimer2iscurrent: false});
    };
    reload() {
        clearInterval(this.state.currenttimer1);
        clearInterval(this.state.currenttimer2);
        this.setState({
            
            timer1iscurrent: false, 
            timer2iscurrent: false, 
            timer1: parseInt(this.route.params.time), 
            timer2: parseInt(this.route.params.time),
            currenttimer1: 0,
            currenttimer2: 0,
            timer1moves: 0,
            timer2moves: 0});
       

    }
    componentWillUnmount() {
        clearInterval(this.state.currenttimer1);
        clearInterval(this.state.currenttimer2);
        this.setState({
            
            timer1iscurrent: false, 
            timer2iscurrent: false, 
            timer1: parseInt(this.route.params.time), 
            timer2: parseInt(this.route.params.time),
            currenttimer1: 0,
            currenttimer2: 0,
            timer1moves: 0,
            timer2moves: 0});
       

    };


   
    
  

    
    


    render() {
        return(
        <View style={{flex: 1, backgroundColor: "#121212"}}>
              <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
              <Text style={{fontSize: 15, color: "white", opacity: 0.7, marginBottom: 4, transform: [{rotate: "-180deg"}]}}>Moves: {this.state.timer1moves}</Text>
                  <View style={{backgroundColor: this.state.timer1iscurrent ? "#85691e" : "#161617", width: "80%", height: "80%", borderRadius: 40, borderWidth: 4, borderColor: "#fafafa", justifyContent: "center", alignItems: "center"}}>
                  <TouchableOpacity style={{width: "100%", height: "100%", justifyContent: "center", alignItems: "center"}} onPress={this.startTimer2.bind(this)}> 
                      <Text style={{fontSize: 80, color: "#ffffff", opacity: 0.7, transform: [{rotate: "-180deg"}]}}>{(Math.floor(this.state.timer1 / 60))} : {this.state.timer1 % 60 < 10 ? "0" + this.state.timer1 % 60 : this.state.timer1 % 60}</Text>
                      </TouchableOpacity>
                  </View>
                 
              </View>
              <View style={{marginLeft: 100, flexDirection: "row", justifyContent: "space-between", marginRight: 100}}>
                  <TouchableOpacity onPress={this.pauseGame.bind(this)}>
                  <FoundationIcon name={"pause"} size={40} color={"#ffffff"} style={{opacity: 0.5}}>
                  </FoundationIcon>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.reload.bind(this)}>
                  <MaterialCommunityIcons name={"reload"} size={40} color={"#ffffff"} style={{opacity: 0.5}}>
                  </MaterialCommunityIcons>
                  </TouchableOpacity>
                  
              </View>
              
              <View style={{flex: 0.5, justifyContent: "center", alignItems: "center"}}>
                  <View style={{backgroundColor: this.state.timer2iscurrent ? "#85691e" : "#161617", width: "80%", height: "80%", borderRadius: 40, borderWidth: 4, borderColor: "#fafafa", justifyContent: "center", alignItems: "center"}}>
                      <TouchableOpacity style={{width: "100%", height: "100%",justifyContent: "center", alignItems: "center"}} onPress={this.startTimer1.bind(this)}>

                      <Text style={{fontSize: 80, color: "#ffffff", opacity: 0.7}}>{(Math.floor(this.state.timer2 / 60))} : {this.state.timer2 % 60 < 10 ? "0" + this.state.timer2 % 60: this.state.timer2 % 60}</Text>
                      </TouchableOpacity>
                     
                  </View>
                  <Text style={{fontSize: 15, color: "white", opacity: 0.7, marginTop: 4}}>Moves: {this.state.timer2moves}</Text>
              </View>
            
          



        </View>
        )
       
        
        

    }

    
    };

const GameScreen = () => {
    const route = useRoute();
    return(
    <GameScreen2 route={route}></GameScreen2>
    );


};




export default GameScreen;