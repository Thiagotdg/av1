import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    padding: 30px;
    height: 100%;
  
`;


export const Bar = styled.View`
    margin-top: 10px;
    height: 1px;
    border-radius: 10px;
    background-color: black;

`

export const Title = styled.Text`
        margin-top: 20px;
        font-size: 20px;
`;

export const StudentName = styled.Text`
    font-size: 20px;
`;

export const StudentOcupation = styled.Text`
    width: 60%;
`;

export const ComparativeContainer = styled.View`
    height: 40%;
`;


export const StudentInfoContainer = styled.View`
    margin-left: 10px;

`;

export const Header = styled.View`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;


export const SoftSkillsContainer = styled.View`
    height: 20%;
`;



export const CloseButton = styled.TouchableOpacity`
    
    width: 50%;
    margin: 0 auto;
    background-color: red;
    padding: 10px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
`;
export const CloseButtonText = styled.Text`
color: #fff;
`;


export const ProfileContainer = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    width: 100px;
    
    margin-left: 20px;
`;

export const ProfilePic = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 100px;

`;
