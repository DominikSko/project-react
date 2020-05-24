import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { InfoData } from '../../data/dataStore.js';

const Info = () => (
  <Container>
    <Hero titleText={InfoData.title} image={InfoData.image}/>
    <p>{InfoData.content}</p>
  </Container>
);

export default Info;