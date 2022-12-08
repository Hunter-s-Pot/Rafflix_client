import React from 'react';
import styled from 'styled-components';
import Layout from '@components/articles/Layout';

const TopWrapper = styled('div')`
  font-size: 20px;
  font-weight: 300;
`;

const MainPage = () => {
  return (
    <Layout>
      <TopWrapper>Main</TopWrapper>
    </Layout>
  );
};

export default MainPage;
