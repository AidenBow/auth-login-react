module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/farmerLand.sqlite3'
    },
    migrations: {
      tableName: 'migrations'
    },
    useNullAsDefault: true
  }

};
