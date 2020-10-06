
exports.up = function(knex) {
    return knex.schema.createTable("productDes",function(table){
        table.string("prodName").primary();
        table.integer('qty');
        table.integer('price');
        table.string('brand');
        table.integer("cid").references("cid").inTable("customer").onDelete("CASCADE");
       
    }).
   createTable("order",function(table){
        table.integer("cid").references("cid").inTable("customer").onDelete("CASCADE");
        table.integer("orderid").primary();
        table.string("prodName").references("prodName").inTable("productDes").onDelete("CASCADE");
    
    }).createTable("pbill",function(table){
        table.integer("orderid").references("orderid").inTable("order").onDelete("CASCADE");
        table.integer('pbill');
        table.integer("cid").references("cid").inTable("customer").onDelete("CASCADE");
        table.string("prodName").references("prodName").inTable("productDes").onDelete("CASCADE");
       
    }).createTable("tbill",function(table){
        table.integer("cid").references("cid").inTable("customer").onDelete("CASCADE");
        table.integer('tbill');
       
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("customer");
};
