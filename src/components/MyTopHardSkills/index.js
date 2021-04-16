import React from 'react'

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {Container, Loader, LoaderText, ProfileContainer} from './styles';



export default function MyTopHardSkills() {
    return (
      <Container>

<ScrollView
showsHorizontalScrollIndicator={false}
  horizontal={true}
  >
        <Loader><LoaderText>html</LoaderText></Loader>
        <Loader><LoaderText>css</LoaderText></Loader>
        <Loader><LoaderText>javascript</LoaderText></Loader>
        <Loader><LoaderText>react native</LoaderText></Loader>
        <Loader><LoaderText>mysql</LoaderText></Loader>

          </ScrollView>      

        
    </Container>
    )

}

