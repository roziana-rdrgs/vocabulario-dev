import * as React from 'react';
import { Container, SocialMediaItem } from './styles';

interface FooterProps  {
    instagram: string,
    linkedin: string,
    github: string,
    twitter: string
}

export const Footer: React.FC<FooterProps> = ({
    instagram,
    linkedin,
    github,
    twitter,
    ...rest
}) =>{
    return (
        <div>
            <Container>
                <SocialMediaItem background={linkedin}></SocialMediaItem>
                <SocialMediaItem background={twitter}></SocialMediaItem>
                <SocialMediaItem background={github}></SocialMediaItem>
                <SocialMediaItem background={instagram}></SocialMediaItem>
            </Container>
           
        </div>
      );
    };
