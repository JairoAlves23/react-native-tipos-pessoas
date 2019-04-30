import React, { Component } from 'react'
import { Text, View, Image} from 'react-native'

export default class Itens extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#FFF', boderColor:'#999',margin:10,padding:10,flexDirection:'row'}}>
        
        <View style={{width: 102,height:102}}>
         <Image style={{height:100, width:100}} source={{uri: this.props.item.image}} />
        </View>
        
        <View style={{marginLeft:20, flex:1}}>
          <Text style={{fontSize:18,  marginBottom: 5}}>Codigo: {this.props.item.id} </Text>
          <Text style={{fontSize:18,fontWeight:'bold', color:'blue', marginBottom: 5}}>Nome: {this.props.item.name} </Text>
          <Text style={{fontSize:18, fontWeight:'bold',  marginBottom: 5}}> Status: {this.props.item.status} </Text>
          <Text style={{fontSize:18,fontWeight:'bold', color:'red',  marginBottom: 5}}>Tipo: {this.props.item.species} </Text>
        </View>
      
      </View>
    )
  }
}

