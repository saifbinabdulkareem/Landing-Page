import 'react-native-gesture-handler';
import React from 'react';
import './App.css';
import SiderDemo from './Components/sider.js';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>{
    <div className="App">
      <SiderDemo />
    </div>
    }</NavigationContainer>
  );
}

export default App;
