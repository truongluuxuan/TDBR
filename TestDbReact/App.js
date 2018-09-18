import {
  createStackNavigator
} from 'react-navigation';
import React,{Component} from 'react';
import {Platform,StyleSheet,Text,View,TextInPut,Button} from 'react-native';
import Home from './app/TrangChu';
import ShowDataActivity from './app/DanhSachHs';
import ChiTietSv from './app/ChiTietSv';


const Navigation = createStackNavigator({
	Home:{
		screen:Home,
	},
	main:{
		screen:ShowDataActivity,
	},
	chitietsv:{
		screen:ChiTietSv,
	}

})

export default Navigation;