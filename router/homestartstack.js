import React from "react";

import { createStackNavigator} from "@react-navigation/stack";
import GameScreen from "../screens/GameScreen";
import StartScreen from "../screens/StartScreen";



const RootStack = createStackNavigator();



const Router = () => {
  

  
  return(
    
  <RootStack.Navigator>
       <RootStack.Screen
    name="Start"
    component={StartScreen}
    options={{
      headerShown: false,
  
    }
  }
    
    >
  

    </RootStack.Screen>
    <RootStack.Screen 
    name="Game" 
    component={GameScreen}
    options={{
      headerShown: false
    }}
    >
    </RootStack.Screen>
   
  </RootStack.Navigator>
  );
    


}

export default Router;