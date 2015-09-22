module.exports =
  server:
    port: "SERVER_PORT"

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
    pageSize: "GITHUB_PAGE_SIZE"

  auth:
    local:
      password:
        saltWorkFactor: "SALT_WORK_FACTOR"

    github:
      clientID: "GITHUB_CLIENT_ID"
      clientSecret: "GITHUB_CLIENT_SECRET"
      scope: "GITHUB_SCOPE"
      callbackURL: "GITHUB_CALLBACK_URL"


