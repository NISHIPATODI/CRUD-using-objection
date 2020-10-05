
exports.up = function(knex) {
  
    return knex.schema.createTable("university",function(table){
        table.integer("studid").references("id").inTable("student");
        table.string("uniname") ;      
        table.uuid("uniId"); 
        table.string("branch");
       // .references("Name").inTable("student")
        
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("university");

};
