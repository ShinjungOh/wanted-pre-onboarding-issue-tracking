import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => <Container>{children}</Container>;

export default Layout;

const Container = styled.div`
  width: 100vw;
  max-width: 1000px;
  height: 100vh;
  max-height: 600px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
`;
