const config = {
  defaultTitle: 'Austin Turpen',
  url:
    process.env.NODE_ENV !== 'development'
      ? process.env.NEXT_PUBLIC_PORTFOLIO_URL
      : 'http://localhost:3040',
  defaultDescription: 'I’m Austin and I’m a MERN and Django developer!',
  googleAnalyticsID: 'G-PE8QW0ZGTZ',
};

export default config;
