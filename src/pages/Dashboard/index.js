import React from 'react';

import Sidebar from '../../components/Sidebar';
import Section from '../../components/Section';

import { Container, Content } from './styles';

export default function Dashboard({ toggled }) {
  return (
    <Container>
      <Sidebar toggled={toggled} />

      <Content>
        <Section />
      </Content>
    </Container>
  );
}
