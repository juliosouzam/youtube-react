import styled from 'styled-components';

export const Container = styled.aside`
  height: 100%;
  background: #202020;
  color: #fff;
  position: fixed;
  margin-top: 56px;
  overflow-y: hidden;
  display: ${props => (props.toggled ? 'block' : 'none')};

  &:hover {
    overflow-y: scroll;
  }
`;

export const Section = styled.div`
  padding-top: 12px;

  span {
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
    margin-left: 25px;
  }

  & + div {
    border-top: 1px solid #333;
  }

  ul {
    list-style: none;

    li {
      button {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: transparent;
        border: 0;
        width: 100%;
        height: 40px;
        color: #fff;
        font-size: 14px;
        font-weight: 500;
        padding: 5px 25px;

        svg {
          margin-right: 10px;
        }

        &:hover {
          background: #333;
        }
      }
    }
  }

  &:last-child {
    margin-bottom: 200px;
  }
`;
