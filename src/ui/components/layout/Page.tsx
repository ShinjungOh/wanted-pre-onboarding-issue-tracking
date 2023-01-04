import React from 'react';
import styled from 'styled-components';

import { Layout } from './index';

interface Props {
  children: React.ReactNode;
}

const Page = ({ children }: Props) => (
  <Container>
    <Layout>{children}</Layout>
  </Container>
);

export default Page;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #eeeeee;
`;
