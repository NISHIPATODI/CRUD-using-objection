
exports.up = function(knex) {
    return knex.schema.createTable("customer",function(table){
        table.increments("cid").primary();
        table.string('cName');
        table.string('cAddress');
        table.string("prodName");
    
    })
};

exports.down = function(knex) {
  
};
