import React from 'react';
import { StyleSheet, Text, TouchableOpacity, Image, Linking, ScrollView, View } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/aria.jpg')} style={styles.img} />
          <Text style={styles.texto}>Aria</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://prettylittleliars.fandom.com/wiki/Aria_Montgomery')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/hanna.jpg')} style={styles.img} />
          <Text style={styles.texto}>Hanna</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://prettylittleliars.fandom.com/wiki/Hanna_Marin')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/emily.jpg')} style={styles.img} />
          <Text style={styles.texto}>Emily</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Emily_Fields')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/spencer.jpg')} style={styles.img} />
          <Text style={styles.texto}>Spencer</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Spencer_Hastings')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/alison.jpg')} style={styles.img} />
          <Text style={styles.texto}>Alison</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Alison_DiLaurentis')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/mona.jpg')} style={styles.img} />
          <Text style={styles.texto}>Mona</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Mona_Vanderwaal')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/jenna.jpg')} style={styles.img} />
          <Text style={styles.texto}>Jenna</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Jenna_Marshall')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Image source={require('./assets/cece.jpg')} style={styles.img} />
          <Text style={styles.texto}>CeCe</Text>
          <TouchableOpacity
            style={styles.linkBtn}
            onPress={() => Linking.openURL('https://pretty-little-liars.fandom.com/wiki/Charlotte_Drake')}
          >
            <Text style={styles.linkText}>Ver mais</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: '#bd5151ff',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 0,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#8B0000',
    width: '48%',
    height: 200,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  texto: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '350',
    marginTop: 8,
    textAlign: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 40,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#8B0000',
  },
  linkBtn: {
    marginTop: 10,
    backgroundColor: '#bd5151ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
  },
  linkText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 13,
    textAlign: 'center',
  },
});
