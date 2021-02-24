module.exports = (...args) => {
  const [api] = args
  console.log('args', args);
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [!api.env("production") && "react-refresh/babel"].filter(Boolean),
  };
};
