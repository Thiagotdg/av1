import React from 'react'

import {  Text, View, ScrollView } from 'react-native';

import {Container, Header, Title, ComparativeContainer, SoftSkillsContainer, StudentName, StudentInfoContainer, StudentOcupation, CloseButtonText, CloseButton, ProfilePic, Bar} from './styles';

import Card from '../../components/Card';
import Comparative from '../../components/Comparative';
import MyTopSoftSkills from '../../components/MyTopSoftSkills';
import Picture from '../../assets/person.jpg';



export default function Student({setShowSelectedStudent, student}) {
    
    return (

        <Container>

                <Header>
                        <ProfilePic source={Picture}></ProfilePic>
                    <StudentInfoContainer>
                        <StudentName>{student.name}</StudentName>
                        <StudentOcupation>Está no seu grupo de Gestão de Design</StudentOcupation>
                    </StudentInfoContainer>
                </Header>

                <Bar/>
                <Title>Hard Skills</Title>

                <ComparativeContainer >
                            <Comparative
                            title="HTML"
                            yourPercentege={50}
                         
                            />
                            <Comparative
                            title="Css"
                            yourPercentege={40}
                          
                            />
                            <Comparative
                            title="Javascript"
                            yourPercentege={90}
                            
                            />
                            <Comparative
                            title="React Native"
                            yourPercentege={70}
                          
                            />

                </ComparativeContainer>
                <Title>Soft Skills</Title>

                            <SoftSkillsContainer>
                                <MyTopSoftSkills/>
                            </SoftSkillsContainer>

                    <CloseButton onPress={() => {setShowSelectedStudent(false)}}>
                                <CloseButtonText>Fechar</CloseButtonText>
                            </CloseButton>
  
                            
        </Container>
        
    )
}
