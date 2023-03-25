import styled from "styled-components";


interface SocialMediaItemProps {
    background: string,
    // link: string
}
export const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: 50px;
    left: 0px;
    bottom: 0px;
    background: #373C3F;
`;

export const SocialMediaItem = styled.div<SocialMediaItemProps>`
    position: absolute;
    width: 30px;
    height: 30px;
    background-image: url(${props => props.background});  
    margin-left: 20px;
`;