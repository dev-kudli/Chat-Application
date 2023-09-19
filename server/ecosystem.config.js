module.exports = {
    apps : [{
      name   : "texty-webserver",
      script : "./index.js",
      env_production: {
        NODE_ENV: "prod",
        SERVER_PORT: 8000,
        MONGODB_URI: 'mongodb+srv://texty-dev:GaKRIdIVujU3qMnh@cluster0.ud5fxon.mongodb.net/texty?retryWrites=true&w=majority',
        SESSION_TOKEN: 'ThisIsMyWhatsappSessionTokenPassword!'
      },
      env_development: {
        NODE_ENV: "dev",
        SERVER_PORT: 8000,
        MONGODB_URI: 'mongodb+srv://texty-dev:GaKRIdIVujU3qMnh@cluster0.ud5fxon.mongodb.net/texty?retryWrites=true&w=majority',
        SESSION_TOKEN: 'ThisIsMyWhatsappSessionTokenPassword!'
      }
    }]
  }