import React from 'react';
// import { View, Image, StyleSheet } from 'react-native';

interface CircularImgViewProps {
  imageUri: string;
}

const CircularImgView = ({ imageUri }: CircularImgViewProps) => {
  return (
    <img 
        src={imageUri}
        style={{
          borderRadius: "50%",
          width: 275,
          height: 275,
          display: "inline"
        }}></img>
    // <View style={styles.container}>
    //   <Image
    //     source={{ uri: imageUri }}
    //     style={styles.circularImgView}
    //   />
    // </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circularImgView: {
//     width: 150,
//     height: 150,
//     borderRadius: 75, // Half of width and height to make it circular
//   },
// });

export default CircularImgView;