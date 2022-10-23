import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class App extends Component {
  state = {
    showModalQR: false,
    dataQR: '',
  };
  onSuccess = e => {
    this.setState({dataQR: e.data, showModalQR: false});
    console.log(e.data);
  };

  onPressModal = () => {
    this.setState({showModalQR: true});
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Button title="Abrir QR" onPress={this.onPressModal}></Button>
        <Text>{this.state.dataQR}</Text>
        {this.state.showModalQR && (
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
        )}
      </View>
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
