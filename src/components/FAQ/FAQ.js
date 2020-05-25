import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero.js';
import { FAQData } from '../../data/dataStore.js';

const FAQ = () => (
  <Container>
    <Hero titleText={FAQData.title} image={FAQData.image} />
    <p>{FAQData.content}</p>
  </Container>
);

export default FAQ;