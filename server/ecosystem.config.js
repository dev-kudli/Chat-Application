module.exports = {
    apps : [{
      name   : "texty-webserver",
      script : "./index.js",
      env: {
        SERVER_PORT: 8000,
        MONGODB_URI: 'mongodb+srv://texty-dev:GaKRIdIVujU3qMnh@cluster0.ud5fxon.mongodb.net/texty?retryWrites=true&w=majority',
        SESSION_TOKEN: 'ThisIsMyWhatsappSessionTokenPassword!'
      }
    }]
  }