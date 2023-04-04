import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './src/screen/About';
import Contact from './src/screen/Contact';
import Course from './src/screen/Course';
import UserData from './src/screen/UserData';
import Home from './src/screen/Home';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Home">
          {(props) => <Home channelname="Learning Point" />}
        </Stack.Screen>
        <Stack.Screen name="About">
          {() => <About />}
        </Stack.Screen>
        <Stack.Screen name="Contact">
          {() => <Contact />}
        </Stack.Screen>
        <Stack.Screen name="Course">
          {() => <Course />}
        </Stack.Screen>
        <Stack.Screen name="UserData">
          {() => <UserData />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
