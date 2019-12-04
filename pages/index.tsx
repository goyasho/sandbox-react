import React from 'react';
import { NextPage } from 'next';
import Hello from '@src/components/Hello';

const IndexPage: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <div>
    <h1>Hello world! - useragent: {userAgent}</h1>
    <Hello />
  </div>
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};
export default IndexPage;
