module.exports = {
  target: "serverless",
  env: {
    API_URL: process.env.API_URL,
    TO_EMAIL: process.env.TO_EMAIL,
  },
};
