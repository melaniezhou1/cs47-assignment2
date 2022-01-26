import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar, TouchableWithoutFeedback } from 'react-native';
import { useFonts } from 'expo-font';
import { Themes } from './assets/Themes';
import {Image} from 'react-native' ; 
import {ImageBackground} from 'react-native' ;
import themes from './assets/Themes/themes';

export default function App() {
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    'Sydney-Bold': require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });
  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.light.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/

  /* insert your code here */

  return (
    <View style={styles.container}>
      <View style={styles.flexParent}>
        <View style={styles.flexChild}>
          <Image source={require("./assets/Icons/menu_light.png")} style={styles.navImage}/>
        </View>
        <Text style={styles.navWord}>
        ensom
      </Text>
        <View style={styles.flexChild}>
          <Image source={require("./assets/Icons/sun.png")} style={styles.navImage}/>
        </View>
      </View>


      <View style={styles.flexProfile}>
         <ImageBackground style={styles.flexProfileImg} imageStyle = {{borderRadius: 10}} source={require("./assets/Profiles/mtl.jpg")} >
         <Text style={styles.flexProfileText1}>
              MTL 
            </Text>
            <Text style={styles.flexProfileText2}>
              2 miles away
            </Text>
          </ImageBackground>
         <View style={styles.flexProfileHotTake}>
              <Text style={styles.hotTakeText}>
              My hottest take
            </Text>
            <View style={styles.hotTakeAudio}>
              <Image source={require("./assets/Icons/player_light.png")} style={styles.playImage}/>
              <Image source={require("./assets/Icons/audio_waveform_light.png")} style={styles.waveImage}/>
            </View>
         </View>
      </View>



      <View style={styles.flexBottom}>
        <View style={styles.flexBottomChild}>
          
          <Image source={require("./assets/Icons/discover_light.png")} style={styles.bottomImage}/>
          <Text style={styles.bottomWord}>
              Discover
            </Text>
        </View>
        <View style={styles.flexBottomChild}>
          
          <Image source={require("./assets/Icons/heart_light.png")} style={styles.bottomImage}/>
          <Text style={styles.bottomWord}>
              Matches
            </Text>
        </View>
        <View style={styles.flexBottomChild}>
          
          <Image source={require("./assets/Icons/messages_light.png")} style={styles.bottomImage}/>
          <Text style={styles.bottomWord}>
              DMs
            </Text>
        </View>
        
      </View>
      



    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
  flexParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "black",
    top: '10%',
    width: '85%',
    height: '10%',
  },

  flexChild: {
    width: 60,
    height: 60,
    padding: 4,
    margin: 10,
    display: "flex",
    flexDirection: "row", 
    justifyContent: "flex-end", // if flexDirection === "row", justifyContent handles x-axis, else: y-axis
    alignItems: "flex-end" // if flexDirection === "row", alignItems handles y-axis, else: x-axis
  },

  navWord: {
    margin: 20,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Sydney-Bold',

  },
  navImage: {
    width: '100%',
    height: '100%',
  },



  flexProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    borderColor: "black",
    top: '2%',
    width: '100%',
    height: '50%',
  
  }, 
  flexProfileImg: {
    borderRadius: 100,
    position: 'relative',
    top: '5%',
    width: '92%',
    height: '95%',
    left: "8%",
    shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },
  },

  flexProfileText2: {
    top: '80%',
    left: '2%',
   fontSize: 18,
   color: 'white',
   fontFamily: 'Sydney',

  },

  flexProfileText1: {
    top: '2%',
    left: '2%',
   fontSize: 32,
   color: 'white',
   fontFamily: 'Sydney',
   
  },


  flexProfileHotTake: {
    marginTop: 50,
    left: "8%",
    width: '85%',
    borderRadius: 10,
    height: '30%',
    backgroundColor: "white", 
    shadowColor: 'black',
      shadowOpacity: 0.4,
      shadowRadius: 5,
      shadowOffset: { width: -1, height: 5 },  
  },

  hotTakeText: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 32,
    fontWeight: 'normal',
    fontFamily: 'Sydney',
  },

  hotTakeAudio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },

  playImage: {
    marginLeft: 20,
    marginTop: 10,
    height: 50,
    width: 50,
  },

  waveImage: {
    marginTop: 8,
    marginLeft: 8,
    width: '75%',
    height: '90%',
  },

  flexBottom: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: 'black',
    top: '60%',
    width: '100%',
    height: '100%',
  
  },


  flexBottomChild: {
   
    display: "flex",
    alignItems: "center", // if flexDirection === "row", alignItems handles y-axis, else: x-axis
    flexDirection: "column",
    justifyContent: "space-between",
    width: '30%',
    height: '10%',
  },
  

  bottomImage: {  
    margin: 10,
    padding: 5,
    height: 50, 
    width: 50,
  }, 

  

  bottomWord: {
    margin: 3,
    fontSize: 18,
    fontWeight: 'normal',
    fontFamily: 'Sydney',
    color: 'white',
    
  },

  
});
