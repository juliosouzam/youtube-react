import React from 'react';
import {
  MdDehaze,
  MdVideoCall,
  MdGridOn,
  MdNotifications,
  MdSearch,
} from 'react-icons/md';

import { Container, Logo, Form, Actions, Profile } from './styles';

import logoImg from '../../assets/logo-light.svg';

export default function Header() {
  return (
    <Container>
      <Logo>
        <button type="button">
          <MdDehaze size={24} color="#ccc" />
        </button>
        <div>
          <img src={logoImg} alt="Logo" />
          <span>BR</span>
        </div>
      </Logo>

      <Form>
        <input type="text" name="" placeholder="Pesquisar" />
        <button type="button">
          <MdSearch size={24} color="#666" />
        </button>
      </Form>

      <Actions>
        <button type="button">
          <MdVideoCall size={24} color="#ccc" />
        </button>
        <button type="button">
          <MdGridOn size={24} color="#ccc" />
        </button>
        <button type="button">
          <MdNotifications size={24} color="#ccc" />
        </button>
        <Profile type="button">
          <img
            src="https://api.adorable.io/avatars/56/abott@adorable.png"
            alt="Profile"
          />
        </Profile>
      </Actions>
    </Container>
  );
}
