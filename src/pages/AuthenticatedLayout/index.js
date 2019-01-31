import React, { lazy } from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';

import Navigation from '../../components/Navigation';

const DashboardPage = lazy(() => import('../DashboardPage'));
const BlogPage = lazy(() => import('../BlogPage'));
const ExplorePage = lazy(() => import('../ExplorePage'));

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthenticatedLayout = () => (
  <>
    <Navigation />
    <StyledWrapper>
      <Route exact path="/" render={() => <DashboardPage />} />
      <Route exact path="/blog" render={() => <BlogPage />} />
      <Route exact path="/explore" render={() => <ExplorePage />} />
    </StyledWrapper>
  </>
);

export default AuthenticatedLayout;
