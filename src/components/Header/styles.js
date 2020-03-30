import styled from 'styled-components';

export const Container = styled.div`
  height: 56px;
  background: #202020;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 20px;

  z-index: 10000;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 56px;
      margin: 0;
    }

    span {
      font-size: 10px;
      color: #ccc;
      margin: -15px 0 0 -18px;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 650px;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 30px;
    align-self: stretch;
    width: 100%;
    background: #000;
    border: 1px solid #3c3c3c;
    padding: 0 6px;

    &::placeholder {
      color: #ccc;
      font-size: 16px;
    }
  }

  button {
    height: 30px;
    padding: 5px 18px;
    border: 0;
    background: #323232;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    border: 0;
    background: transparent;
    margin: 0 10px;
  }
`;

export const Profile = styled.button`
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;
