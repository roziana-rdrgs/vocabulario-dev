import React from 'react';
import { CoverPage } from './components/CoverPage';

import background from "./assets/mania-de-leitura.png";
import linkedin from "./assets/linkedin-logo.png";
import twitter from "./assets/twitter-logo.png";
import github from "./assets/github-logo.png";
import instagram from "./assets/instagram-logo.png";

import GlabalStyle from './styles/global';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    
    <>
      <GlabalStyle />
      <NavBar></NavBar>
      <CoverPage 
        image={background} 
        title='mania de leitura' 
        description='1.conjunto de termos que são característicos de determinado campo de conhecimento ou atividade, e sua codificação, com ou sem definições; glossário. "v. médico" 2.conjunto dos vocábulos de uma língua; léxico. '></CoverPage>
      <Footer github={github} twitter={twitter} instagram={instagram} linkedin={linkedin}></Footer>
    </>
     
  );
}

export default App;
