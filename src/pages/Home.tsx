import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/home'
import { Card, Layout, Text } from '@ui-kitten/components';
import { show } from '../mocks/shows';

const Home: React.FC<Props> = (props) => {
  return (
    <Layout style={styles.root}>
      <Image style={{height: '60%', width: '80%'}} source={{uri: show.img}} resizeMode='contain' />
    </Layout>
  );
};

export default Home;
