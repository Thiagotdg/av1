import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

import {Container, CardTitle} from './styles';

export default function Card(props) {
    return (
      <Container>
        <View >
            <CardTitle>{props.title}</CardTitle>
               {props.children}
        </View>
        </Container>
    )

}

