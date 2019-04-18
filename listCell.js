import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import BreedCell from './breedCell'

export default class ListCell extends React.Component {
    renderItems = ({item, index}) => {
        // console.log(item)
        return (
          <BreedCell data={item} breed={item.breed}/>
        )
      }

    render() {
        // console.log(this.props)
        return (
            <FlatList 
                    style={styles.list}
                    data = {this.props.data}
                    keyExtractor={(item, index) => `${index}-${item.breed}`}
                    renderItem={this.renderItems}
                />
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
       flex: 1 
    },

})