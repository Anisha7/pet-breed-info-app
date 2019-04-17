import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableHighlight } from 'react-native';
import BreedCell from './breedCell'
import { petTypes, cats, dogs } from './breeds'

console.log(petTypes)

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedBreed : 'cat_breeds',
    }
  }

  
  buttons() {
    const items = petTypes.filter((val) => {
      return val !== 'default'
    }).map((val) => {
      let currStyle = styles.button
      if (this.state.selectedBreed == val) {
        currStyle = styles.selectedButton
      }
      return (
      <TouchableHighlight
          style={currStyle}
          onPress={() => this.setState({selectedBreed: val})}
          key = {val}
        >
        <Text style = {styles.buttonText}> {val} </Text>
      </TouchableHighlight>)
    })
    return items
  }

  renderItems({item, index}) {
    // console.log(item)
    return (
      <BreedCell data={item} breed={item.breed}/>
    )
  }
  
  render() {
    console.log(this.state.selectedBreed)
    let breed = cats
    if (this.state.selectedBreed == 'dog_breeds') {
      breed = dogs
    } else if (this.state.selectedBreed == 'cat_breeds') {
      breed = cats
    } else if (this.state.selectedBreed == 'default') {
      breed = cats
    }

    return (
      <View style={styles.container}>
       <Text style={styles.text}>Pet Breeds</Text>
       <View>{this.buttons()}</View>
       <FlatList 
          style={styles.list}
          data = {breed}
          keyExtractor={(item, index) => `${index}-${item.breed}`}
          renderItem={this.renderItems}
       />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    color: 'white',
  },
  text: {
    margin: 30,
    fontSize: 36,
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 50,
  }, 
  list: {
    width: '100%',
   flex: 1 
  },
  cell: {
    borderWidth: 2,
    borderColor: '#f00'
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'pink',
    padding: 15,
    margin: 10,
    borderRadius: 20,
  },
  selectedButton: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 15,
    margin: 10,
    borderRadius: 20,
  }
});
