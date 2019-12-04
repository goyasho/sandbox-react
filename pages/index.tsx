import React from 'react';
import { NextPage } from 'next';

const IndexPage: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - useragent: {userAgent}</h1>
);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  return { userAgent };
};
export default IndexPage;
