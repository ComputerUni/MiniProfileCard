import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { s, vs } from 'react-native-size-matters'

const Favorites = () => {
  return (
    <ScrollView style={{marginTop: vs(8)}} horizontal showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <Image
            source={{uri: `https://picsum.photos/200?random=${item}`}}
            key={item}
            style={{
                width: s(100),
                height: s(100),
                borderRadius: s(10),
                marginRight: s(10),
            }}   
        />
      ))}
    </ScrollView>
  )
}

export default Favorites

const styles = StyleSheet.create({})