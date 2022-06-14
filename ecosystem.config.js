module.exports = {
    apps: [{
      name: "muf-fde",
      script: "dist/main.js",
      env: {
        NODE_ENV: "dev",
        APP_URL:"http://localhost:8080",
        WEBTOKEN_SECRET_KEY:"uAsBw6WxqD",
        WEBTOKEN_EXPIRATION_TIME:2400,
        DB_URL:"mongodb+srv://muf:Cideng123@cluster0.xzsj6.mongodb.net/fdedb?retryWrites=true&w=majority"
      },
      env_test: {
        NODE_ENV: "dev",
        APP_URL:"http://localhost:8080",
        WEBTOKEN_SECRET_KEY:"uAsBw6WxqD",
        WEBTOKEN_EXPIRATION_TIME:2400,
        DB_URL:"mongodb+srv://muf:Cideng123@cluster0.xzsj6.mongodb.net/fdedb?retryWrites=true&w=majority"
      },
      env_staging: {
        NODE_ENV: "dev",
        APP_URL:"http://localhost:8080",
        WEBTOKEN_SECRET_KEY:"uAsBw6WxqD",
        WEBTOKEN_EXPIRATION_TIME:2400,
        DB_URL:"mongodb+srv://muf:Cideng123@cluster0.xzsj6.mongodb.net/fdedb?retryWrites=true&w=majority"
      },
      env_production: {
        NODE_ENV: "dev",
        APP_URL:"http://localhost:8080",
        WEBTOKEN_SECRET_KEY:"uAsBw6WxqD",
        WEBTOKEN_EXPIRATION_TIME:2400,
        DB_URL:"mongodb+srv://muf:Cideng123@cluster0.xzsj6.mongodb.net/fdedb?retryWrites=true&w=majority"
      }
    }]
  }