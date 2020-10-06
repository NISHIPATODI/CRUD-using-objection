

module.exports = {
    development: {
    client: 'pg',
    //connection: 'postgres://localhost/mydb' 
    // Change these with your own Database connection URL.
    connection: {
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'postgres'
      }
    }
}
