import React, {useState} from 'react'

import {  Text, View, ScrollView, Image} from 'react-native';

import {Container, ContentContainer, TitleContainer, Title, Footer, SocialMediaContainer, Social, GrupouLogo, ContactContainer, ContactText, ContactEmail} from './styles';


import Card from '../../components/Card';
import Comparative from '../../components/Comparative';
import TopSkillStudent from '../../components/TopSkillStudent';
import MyTopHardSkills from '../../components/MyTopHardSkills';
import MyTopSoftSkills from '../../components/MyTopSoftSkills';
import StudentPage from '../../pages/Student';

import FacebookImg from '../../assets/logo_facebook.png';
import LinkedinImg from '../../assets/logo_linkedin.png';
import InstagramImg from '../../assets/logo_instagram.png';
import GrupouLogoImg from '../../assets/grupou_logo.png';

export default function Dashboard() {
    const [selectedStudent, setSelectedStudent] = useState();
      
    const [showSelectedStudent, setShowSelectedStudent] = useState(false);

    
    if(showSelectedStudent){
        return (<StudentPage student={selectedStudent} setShowSelectedStudent={setShowSelectedStudent}/>);
    }


    
    return (

        <Container>

            <ContentContainer>
                    <TitleContainer>
                        <Title>Dashboard</Title>
                    </TitleContainer>
                </ContentContainer>

                <ScrollView showsVerticalScrollIndicator={false} >
                <ContentContainer>                    
                        <Card title="Comparativo de skills">
                            <Comparative
                            title="HTML"
                            yourPercentege={50}
                            globalPercentage={80}
                            />
                            <Comparative
                            title="Css"
                            yourPercentege={40}
                            globalPercentage={50}
                            />
                            <Comparative
                            title="Javascript"
                            yourPercentege={90}
                            globalPercentage={100}
                            />
                            <Comparative
                            title="React Native"
                            yourPercentege={70}
                            globalPercentage={80}
                            />

                        </Card>


                        <Card title="Alunos top skills">
                            <TopSkillStudent setSelectedStudent={setSelectedStudent} setShowSelectedStudent={setShowSelectedStudent}/>
                            
                        </Card>
                        <Card title="Minhas top hard skills">
                            <MyTopHardSkills/>
                            
                        </Card>
                        <Card title="Minhas top soft skills">
                                <MyTopSoftSkills/>
                            
                        </Card>
                        </ContentContainer>
                        
                        
                        <Footer>

                            <ContactContainer>
                                    <ContactText>Contato</ContactText>
                                    <ContactEmail>grupou_contato@gmail.com</ContactEmail>
                            </ContactContainer>
                            <SocialMediaContainer>
                                    <Social source={LinkedinImg} />
                                    <Social source={InstagramImg} />
                                    <Social source={FacebookImg} />
                            </SocialMediaContainer>
                            <ContactContainer>
                                <GrupouLogo source={GrupouLogoImg}/>
                            </ContactContainer>
                            
                        
                        
                    </Footer>

                </ScrollView>
                
        </Container>
        
    )
}
