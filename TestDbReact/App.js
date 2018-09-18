import {
  createStackNavigator
} from 'react-navigation';
import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,TextInPut,Button} from 'react-native';
import Home from './app/TrangChu';
import ShowDataActivity from './app/DanhSachHs';


const Navigation = createStackNavigator({
	Home:{
		screen:Home,
	},
	main:{
		screen:ShowDataActivity,
	},

})

export default Navigation;