import styled, {css} from 'styled-components/native';

export const ComparativeTitle = styled.Text`
    font-size: 10px;
    font-weight: bold;
    margin-bottom: 5px;
`;



export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: #fff;
    
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    
    
`;



export const Bar = styled.View`

    height: 10px;
    border-radius: 10px;
    
    ${props => props.yours && css`
    background-color: red;
    `}

    ${props => !props.yours && css`
        margin-top: 20px;
        background-color: blue;
    `}


    ${props => props.percentage && css`
        width: ${(props.percentage - 20) + '%'};
    `}

`

export const ComparativeSubtitle = styled.Text`
    margin-left: 10px;
    
    ${props => props.yours && css`
        color: red;
    `}

    ${props => !props.yours && css`
        
        color: blue;
    `}

`;

export const BarContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
`;