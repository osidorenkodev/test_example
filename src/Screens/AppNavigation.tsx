import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import NewsList from "./News";
import DetailNews from "./News/DetailNews";

const NewsNavigationStack = createNativeStackNavigator();

const NewsNavigation = () => {
  return (
      <NewsNavigationStack.Navigator>
          <NewsNavigationStack.Screen name={'NewsList'} component={NewsList}/>
          <NewsNavigationStack.Screen name={'DetailNews'} component={DetailNews}/>
      </NewsNavigationStack.Navigator>
  );
}
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <NewsNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation;
