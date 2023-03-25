import React from 'react';
import { Container, ImageBackground, PageDescription, PageTitle } from './styles';

export interface CoverPageProps  {
    description?: string;
    title: string
    image: string
  }

export const CoverPage: React.FC<CoverPageProps> = ({
    description,
    title,
    image,
    ...rest
}) =>{
    return (
       
        <Container>
            <ImageBackground background={image}></ImageBackground>
            <PageTitle>
                {title}
            </PageTitle>
            <PageDescription>
                {description}
            </PageDescription>
        </Container>
        
      );
    };
