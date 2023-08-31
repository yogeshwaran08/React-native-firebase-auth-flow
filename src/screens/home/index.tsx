import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {firebase} from '@react-native-firebase/database';
import {ScreenProps} from '../../navigation/types';
import {getData} from '../../Components/firebaseUtils';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {logOut} from '../../Components/auth';

type HomeProps = ScreenProps<'Home'>;

const Home: React.FC<HomeProps> = ({navigation}) => {
  const [data, setData] = useState<string>('');
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const handleLogOut = () => {
    logOut();
    navigation.navigate('LoginScreen');
  };

  useEffect(() => {
    const func = async () => {
      const data = await getData('/test');
      setData(data);
    };
    func();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      {user ? (
        <View style={styles.dataContainer}>
          <View>
            <Text style={styles.header}>User : </Text>
            <Text style={styles.header}>Data : </Text>
          </View>
          <View>
            <Text style={styles.header}>{user.email}</Text>
            <Text style={styles.header}>{data}</Text>
          </View>
        </View>
      ) : (
        <Text>Error</Text>
      )}
      <View>
        <Pressable style={styles.btnStyles} onPress={handleLogOut}>
          <Text style={styles.btnTextStyle}>Log out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 40,
  },
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    color: 'black',
    fontSize: 20,
    fontWeight: '500',
  },
  dataContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  btnStyles: {
    height: 50,
    width: 300,
    borderRadius: 30,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  btnTextStyle: {
    color: 'white',
    fontSize: 20,
  },
});
