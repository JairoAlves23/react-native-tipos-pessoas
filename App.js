
import React, {Component} from 'react';
import { ScrollView } from 'react-native';

import Itens from './src/componentes/Itens'
import axios from 'axios'

initState = {
  listaItens: []
}

export default class App extends Component {
  
  state = {...initState} 

  componentWillMount() {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      this.setState({ listaItens:response.data.results})
    })
    .catch(_ => console.log("Erro"))
  }
  
  render() {
    return (  
      <ScrollView style={{backgroundColor: '#DDD'}}> 
        {this.state.listaItens.map(item => <Itens key={item.id} item={item}/>)} 
      </ScrollView>
    )
  }
}


