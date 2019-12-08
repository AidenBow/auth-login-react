module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/ChickenLand.sqlite3'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  }

};
