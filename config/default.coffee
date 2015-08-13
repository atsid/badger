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
        google:
            clientID: 'your_consumer_key'
            clientSecret: 'bogus_secret'
            callbackURL: 'http://localhost:9000/api/auth/google/callback'
            scope: 'https://www.googleapis.com/auth/plus.login'
        github:
            clientID: 'your_consumer_key'
            clientSecret: 'bogus_secret'
            callbackURL: 'http://localhost:9000/api/auth/github/callback'
            scope: ['user:email']

    github:
        org: 'dummy-org'
        token: 'abc123'
        acceptHeader: 'application/json'
        user_agent: 'badger'

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
