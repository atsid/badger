module.exports =
  app:
    name: 'badger'

  session:
    name: 'badger'
    secret: 'random_gibberish'
    proxy: true

  auth:
    local:
      password:
        saltWorkFactor: 10

    github:
      clientID: 'your_consumer_key'
      clientSecret: 'bogus_secret'
      callbackURL: 'http://localhost:9000/api/auth/github/callback'
      scope: ['user', 'repo']

  github:
    acceptHeader: 'application/json'
    user_agent: 'badger'
    pageSize: 50

  container:
    composed: 0

  clustering:
    workerLimit: 1
    entryPoint: __dirname + '/../server/main'

  server:
    port: 9000

  database:
    connectionString: 'mongodb://localhost/badger'
    populateSeedData: true
    composeConnection:
      dbName: 'badger'
