import styled, { css } from 'styled-components';
import "@fontsource/montserrat";

interface ImageBackgroundProps {
    background: string
}

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 236px;
    left: 0px;
    top: 0px;
`;

export const ImageBackground = styled.div<ImageBackgroundProps>`
    position: absolute;
    background-image: url(${props => props.background});  
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    
    width: 100vw;
    height: 236px;
    left: 0px;
    top: 45px;
    repeat: no-repeat;
    filter: blur(3px);
`;

export const PageTitle = styled.h2`
    position: absolute;
    width: 303px;
    height: 44px;
    left: 100px;
    top: 50px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;

    color: #FFFFFF;
`;
export const PageDescription = styled.text`
    position: absolute;
    width: 856px;
    height: 90px;
    left: 120px;
    top: 125px;

    font-family: 'Montserrat';
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
`;

