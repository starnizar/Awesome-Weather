// // React Native Geolocation
// // https://aboutreact.com/react-native-geolocation/
//
// // import React in our code
// import React, { useState, useEffect } from 'react';
//
// // import all the components we are going to use
// import {
//   SafeAreaView,
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Button,
// } from 'react-native';
//
// //import all the components we are going to use.
// import Geolocation from '@react-native-community/geolocation';
//
// const Location = () => {
//   const [currentLongitude, setCurrentLongitude] = useState('...');
//   const [currentLatitude, setCurrentLatitude] = useState('...');
//   const [locationStatus, setLocationStatus] = useState('');
//
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <View style={styles.container}>
//           <Image
//             source={{
//               uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/location.png',
//             }}
//             style={{ width: 100, height: 100 }}
//           />
//           <Text style={styles.boldText}>{locationStatus}</Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Longitude: {currentLongitude}
//           </Text>
//           <Text
//             style={{
//               justifyContent: 'center',
//               alignItems: 'center',
//               marginTop: 16,
//             }}>
//             Latitude: {currentLatitude}
//           </Text>
//           <View style={{ marginTop: 20 }}>
//             <Button title="Button" onPress={getOneTimeLocation} />
//           </View>
//         </View>
//         <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
//           React Native Geolocation
//         </Text>
//         <Text style={{ fontSize: 16, textAlign: 'center', color: 'grey' }}>
//           www.aboutreact.com
//         </Text>
//       </View>
//     </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     padding: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   boldText: {
//     fontSize: 25,
//     color: 'red',
//     marginVertical: 16,
//   },
// });
//
// export default Location;
