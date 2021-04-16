import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #35A6FF;
 
  
`;


export const ContentContainer = styled.View`
        padding: 30px;
  
`;
export const Title = styled.Text`
    margin-top: 10px;
    font-size: 30px;
    color: #fff;
    font-weight: bold;
`;

export const TitleContainer = styled.View`

`;

export const Footer = styled.View`
    margin-top: 20px;
    background-color: #40163E;
    height: 300px;
    width: 100%;

`;


export const SocialMediaContainer = styled.View`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 50px;
margin-top: 10px;
`;
export const Social = styled.Image`
    height: 70px;
    width: 70px;
`;
export const GrupouLogo = styled.Image`
        margin-top: 5%;
        height: 80px;
        width: 300px;
    `;


export const ContactContainer = styled.View`
    display: flex;
    width: 100%;
    align-items: center;
    padding: 10px;
    margin-bottom: 5%;
`;
export const ContactText = styled.Text`
    font-size: 20px;
    color: #fff;
`;
export const ContactEmail = styled.Text`
    font-size: 20px;
    color: #fff;
`;
