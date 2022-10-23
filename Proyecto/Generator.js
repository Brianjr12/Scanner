import React, {useState} from 'react';
import QRCode from 'react-native-qrcode-svg';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  return (
    <View style={styles.container}>
      <QRCode
        value={qrvalue ? qrvalue : 'NA'}
        size={250}
        color="black"
        backgroundColor="white"
      />

      <Text style={styles.textStyle}>
        Por favor introduzca un valor para generar el código QR
      </Text>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={inputText => setInputText(inputText)}
        placeholder="Inserte el valor aquí"
        value={inputText}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => setQrvalue(inputText)}>
        <Text style={styles.buttonTextStyle}>Generar código QR </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  textStyle: {
    color: 'black',
    textAlign: 'center',
    margin: 30,
  },

  textInputStyle: {
    color: 'black',
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#000',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#000',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    padding: 10,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});

import React, {Component} from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

class App extends Component {
  //onSuccess = e => {
    //Linking.openURL(e.data).catch(err =>
      //console.error('An error occured', err),
    //);
    //};

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess}
        //flashMode={RNCamera.Constants.FlashMode.torch}
        topContent={
          <Text style={styles.centerText}>
            <Text style={styles.textBold}></Text> Escanea el código QR y
            accederas al menú de la mesa
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>Escanear</Text>
          </TouchableOpacity>
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default App;

