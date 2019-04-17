import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

const BreedCell = ({breed, data}) => {
  const keys = Object.keys(data).filter(key => key != 'breed')
  const desc = keys.map(key => `${key}: ${data[key]}`)
  return (
    <View style={styles.container}>
      <Text style={styles.breed}>{breed}</Text>
      <Text>{desc.join(',')}</Text>
    </View>
  )
}

export default BreedCell

const { width, height } = Dimensions

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 18,
    width: width - 20,
    marginLeft: 10,
    marginRight: 10
  },
  breed: {
    fontSize: 24
  }
})