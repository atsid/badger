module.exports =
    session:
        secret: "SESSION_STATE_SECRET"

    container:
        composed: "DOCKER_COMPOSED"

    clustering:
        workerLimit: "CLUSTERING_WORKER_LIMIT"

    database:
        connectionString: "DB_CONNECTION_STRING"
        composeConnection:
            host: "MONGO_1_PORT_27017_TCP_ADDR"
            port: "MONGO_1_PORT_27017_TCP_PORT"

    github:
        org: "GITHUB_ORG"
        token: "GITHUB_TOKEN"
        user_agent: "GITHUB_USER_AGENT"

    auth:
        local:
            password:
                saltWorkFactor: "SALT_WORK_FACTOR"
        google:
            clientID: "GOOGLE_CLIENT_ID"
            clientSecret: "GOOGLE_CLIENT_SECRET"
            scope: "GOOGLE_SCOPE"
        github:
            clientID: "GITHUB_CLIENT_ID"
            clientSecret: "GITHUB_CLIENT_SECRET"
            scope: "GITHUB_SCOPE"
