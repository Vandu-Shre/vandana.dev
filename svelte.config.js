import adapter from '@sveltejs/adapter-static';

const repo = 'my-portfolio'; 

const config = {
  kit: {
    adapter: adapter({ fallback: '404.html' }),
    paths: {
      base: process.env.NODE_ENV === 'production' ? `/${repo}` : ''
    },
    prerender: { entries: ['*'] }
  }
};

export default config;
