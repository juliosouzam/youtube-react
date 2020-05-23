import React from 'react';
import {
  MdDashboard,
  MdGrade,
  MdSubscriptions,
  MdLibraryMusic,
  MdHistory,
  MdPlayCircleFilled,
  MdAccessTime,
  MdSlowMotionVideo,
  MdTheaters,
  MdGames,
  MdWifi,
  MdSettings,
  MdFlag,
  MdHelp,
  MdInfo,
} from 'react-icons/md';

import { Container, Section } from './styles';

export default function Sidebar({ toggled }) {
  return (
    <Container toggled={toggled}>
      <Section>
        <ul>
          <li>
            <button type="button">
              <MdDashboard size={20} color="#8bb5c6" />
              Início
            </button>
          </li>
          <li>
            <button type="button">
              <MdGrade size={20} color="#8bb5c6" />
              Em Alta
            </button>
          </li>
          <li>
            <button type="button">
              <MdSubscriptions size={20} color="#8bb5c6" />
              Incrições
            </button>
          </li>
        </ul>
      </Section>

      <Section>
        <ul>
          <li>
            <button type="button">
              <MdLibraryMusic size={20} color="#8bb5c6" />
              Biblioteca
            </button>
          </li>
          <li>
            <button type="button">
              <MdHistory size={20} color="#8bb5c6" />
              Histórico
            </button>
          </li>
          <li>
            <button type="button">
              <MdPlayCircleFilled size={20} color="#8bb5c6" />
              Seus vídeos
            </button>
          </li>
          <li>
            <button type="button">
              <MdAccessTime size={20} color="#8bb5c6" />
              Assistir mais tarde
            </button>
          </li>
        </ul>
      </Section>

      <Section>
        <span>Mais do YouTube</span>
        <ul>
          <li>
            <button type="button">
              <MdSlowMotionVideo size={20} color="#8bb5c6" />
              YouTube Premium
            </button>
          </li>
          <li>
            <button type="button">
              <MdTheaters size={20} color="#8bb5c6" />
              YouTube Filmes
            </button>
          </li>
          <li>
            <button type="button">
              <MdGames size={20} color="#8bb5c6" />
              Jogos
            </button>
          </li>
          <li>
            <button type="button">
              <MdWifi size={20} color="#8bb5c6" />
              Ao Vivo
            </button>
          </li>
        </ul>
      </Section>

      <Section>
        <ul>
          <li>
            <button type="button">
              <MdSettings size={20} color="#8bb5c6" />
              Configurações
            </button>
          </li>
          <li>
            <button type="button">
              <MdFlag size={20} color="#8bb5c6" />
              Histórico de denúncias
            </button>
          </li>
          <li>
            <button type="button">
              <MdHelp size={20} color="#8bb5c6" />
              Ajuda
            </button>
          </li>
          <li>
            <button type="button">
              <MdInfo size={20} color="#8bb5c6" />
              Enviar Feedback
            </button>
          </li>
        </ul>
      </Section>
    </Container>
  );
}
