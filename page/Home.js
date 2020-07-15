import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {color} from '../utils';
import {Card} from '../component';

export default function home() {
  return (
    <View style={{backgroundColor: '#ecf0f1', height: '100%'}}>
      <View style={styles.header}>
        <View style={styles.TitleWrapper}>
          <Text style={styles.Title}>Selamat Pagi,</Text>
          <Text style={styles.name}>Bryand J</Text>
        </View>
        <Image source={require('../src/img/home.png')} style={styles.img} />
      </View>
      <View style={styles.action}>
        <Text style={styles.text}>E - Reporting</Text>
        <View style={styles.itemWrapper}>
          <View style={styles.item}>
            <Image source={require('../src/img/ic1.png')} style={styles.icon} />
            <Text style={styles.label}>Penanaman</Text>
          </View>
          <View style={styles.item}>
            <Image source={require('../src/img/ic2.png')} style={styles.icon} />
            <Text style={styles.label}>Kel-Tani</Text>
          </View>
          <View style={styles.item}>
            <Image source={require('../src/img/ic3.png')} style={styles.icon} />
            <Text style={styles.label}>Penyuluh</Text>
          </View>
        </View>
      </View>

      <View style={styles.scrollView}></View>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.body}>
          <Text style={styles.bodyTitle}>Penanaman Lahan</Text>
          <Card
            Nama="Montes"
            Tanaman="Padi"
            Tanggal="20/10/2020"
            Foto={require('../src/img/proses.jpeg')}
          />
          <Card
            Nama="Stef"
            Tanaman="pepaya"
            Tanggal="20/10/2020"
            Foto={require('../src/img/pepaya.jpeg')}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.utama,
    height: 200,
    color: 'white',
    padding: 18,
    flexDirection: 'row',
  },
  TitleWrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
  },

  Title: {
    color: '#fff',
    marginTop: 20,
    fontSize: 25,
    fontWeight: '600',
    paddingHorizontal: 4,
    fontWeight: 'bold',
    paddingRight: 12,
    textAlign: 'left',
  },
  name: {
    fontSize: 20,
    color: '#fff',
    marginTop: 3,
    textAlign: 'left',
    paddingHorizontal: 4,
  },
  img: {
    marginTop: 50,
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  action: {
    backgroundColor: '#fff',
    height: 150,
    padding: 10,
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: 20,
    marginTop: -50,
    borderRadius: 5,
    shadowColor: color.shadow,
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 0.2,
    elevation: 2,
  },
  text: {
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
  itemWrapper: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  item: {
    backgroundColor: color.icon,
    marginHorizontal: 15,
    width: 70,
    height: 70,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    position: 'absolute',
    bottom: -20,
    fontSize: 14,
    textAlign: 'center',
    width: 100,
  },

  icon: {
    width: 40,
    height: 40,
  },
  body: {
    backgroundColor: color.bg,
    padding: 20,
    marginTop: 10,
    paddingBottom: 50,
  },
  bodyTitle: {
    marginBottom: 10,
    fontSize: 20,
    color: 'gray',
    fontWeight: 'bold',
  },
});
