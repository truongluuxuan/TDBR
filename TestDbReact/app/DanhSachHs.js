import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, Image, Text, TextInput, TouchableOpacity, Alert, YellowBox, ListView } from 'react-native';
 
var Realm = require('realm');
 
let realm ;
 
import { StackNavigator } from 'react-navigation';


export default class ShowDataActivity extends Component
{
  static navigationOptions =
  {
     title: 'ShowDataActivity',
     header: null 
  };
 
  constructor() {
 
    super();
  
    YellowBox.ignoreWarnings([
     'Warning: componentWillMount is deprecated',
     'Warning: componentWillReceiveProps is deprecated',
   ]);

    //Định nghĩa bảng dữ liệu real
   realm = new Realm({
    schema: [{name: 'Student_Info', 
    properties: 
    {
      student_id: {type: 'int',   default: 0},
      student_name: 'string', 
      student_class: 'string',
      student_subject: 'string'
    }}]
  });
 
   var mydata = realm.objects('Student_Info');
 
   let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 
    this.state = {
      dataSource: ds.cloneWithRows(mydata),
    };
  
  }
 
  GetClickedItem (student_name) {
 
    Alert.alert(student_name);
     
    }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
  render()
  {
    //sự kiện quay lại hoặc thoát màn hình hiện tại
    const {goBack} = this.props.navigation;
 
     return(
        <View style = { styles.MainContainer }>
        <View style={{flexDirection:'row'}}>
        <View style={styles.HeaderScreen}>
        <TouchableOpacity onPress={() => goBack()} >
        <Image style={styles.ImageBack} source={require('../images/back_icon.png')} 
        />
        </TouchableOpacity>
        </View>
        <View style={styles.ViewOfTextHeader}>
        <Text style={styles.TextHeader} onPress={() => goBack()}>Danh sách chi tiết</Text>
        </View>
        </View>
           
            <ListView
            
            dataSource={this.state.dataSource}
 
            renderSeparator= {this.ListViewItemSeparator}
 
            renderRow={(rowData) => <View style={{flex:1, flexDirection: 'column'}} >
 
                      <TouchableOpacity onPress={this.GetClickedItem.bind(this, rowData.student_name)} >
                    
                      <Text style={styles.textViewContainer} >{'id = ' + rowData.student_id}</Text>
              
                      <Text style={styles.textViewContainer} >{'Tên của mày = ' + rowData.student_name}</Text>
              
                      <Text style={styles.textViewContainer} >{'Lớp mày học = ' + rowData.student_class}</Text>
              
                      <Text style={styles.textViewContainer} >{'Môn mày học = ' + rowData.student_subject}</Text>
              
                      </TouchableOpacity>
              
                    </View> }
 
            />
 
        </View>
     );
  }
}


const styles = StyleSheet.create({
    
    MainContainer :{
    
     flex:1,
     justifyContent: 'center',
    
       
     },
     TextHeader:{
         padding:10,
        color:'#ffffff',
       
     },
     ViewOfTextHeader:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#1976D2'
     },
     ImageBack:{
            marginLeft:10,
            width:15,
            height:15,
     },
     HeaderScreen:{
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
         padding:5,
         color:'#ffffff',
        backgroundColor:'#1976D2'
     },
    
     TextInputStyle:
       {
         borderWidth: 1,
         borderColor: '#009688',
         width: '100%',
         height: 40,
         borderRadius: 10,
         marginBottom: 10,
         textAlign: 'center',
       },
    
     button: {
       
         width: '100%',
         height: 40,
         padding: 10,
         backgroundColor: '#4CAF50',
         borderRadius:7,
         marginTop: 12
       },
        
     TextStyle:{
         color:'#fff',
         textAlign:'center',
       },
    
       textViewContainer: {
    
         textAlignVertical:'center', 
         padding:10,
         fontSize: 20,
         color: '#000',
         
        }
      
     });