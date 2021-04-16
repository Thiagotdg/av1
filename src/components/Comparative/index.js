import React from 'react'

import { StyleSheet, Text, View } from 'react-native';

import {Container, Bar, ComparativeTitle, ComparativeSubtitle, BarContainer} from './styles';

export default function Comparative(props) {
    return (
      
      <Container>
        
        
        <ComparativeTitle>{props.title}</ComparativeTitle>

        
            <BarContainer>
            <Bar yours={true} percentage={props.yourPercentege}/>  
              <ComparativeSubtitle yours={true}>{props.globalPercentage ? 'Você' : (props.yourPercentege/10).toFixed(1)}</ComparativeSubtitle>     
            </BarContainer>
            
            {props.globalPercentage && (
              <BarContainer>
              <Bar yours={false} percentage={props.globalPercentage}/> 
              <ComparativeSubtitle yours={false}>Turma</ComparativeSubtitle>
            </BarContainer>
            )}
            
        
    </Container>
    )

}

