import React from 'react';
import { Page } from './ui/components/layout';
import GlobalStyles from './ui/core/GlobalStyles';
import IssueTrackingPage from './ui/pages/IssueTrackingPage';

const App = () => (
  <>
    <Page>
      <IssueTrackingPage />
    </Page>
    <GlobalStyles />
  </>
);
export default App;
