import React from 'react'

import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {Container, ProfilePic, ProfileContainer, ProfileName, ProfileSkillText} from './styles';

import Picture from '../../assets/person.jpg';


export default function TopSkillStudent({setSelectedStudent, setShowSelectedStudent}) {


const students = [
      {     
            id: 1,
            name: 'Juliana Almeira',
            skill: 'HTML'
      },
      {
            id: 2,
            name: 'Paulo Carlos',
            skill: 'javascript'
      },
      {
            id: 3,
            name: 'Joao Lima',
            skill: 'css'
      },
      {
            id: 4,
            name: 'Juliana Pinto',
            skill: 'Java'
      },
      {
            id: 5,
            name: 'Andre Luiz',
            skill: 'C#'
      },
]

const handleShowStudent = (student) => {
      setSelectedStudent(student);
      setShowSelectedStudent(true);
}


    return (
      <Container>

      <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      >

            {students.map((student) => (

                  <ProfileContainer key={student.id} onPress={() => {handleShowStudent(student)}}>
                              <ProfilePic source={Picture}></ProfilePic>
                              <ProfileName>{student.name}</ProfileName>
                              <ProfileSkillText>{student.skill}</ProfileSkillText>
                  </ProfileContainer>

            ))}



          </ScrollView>      

        
    </Container>
    )

}

