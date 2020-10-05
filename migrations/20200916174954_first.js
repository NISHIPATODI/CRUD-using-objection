
exports.up = function(knex) {
    return knex.schema.createTable("student",function(table){
        table.increments("id").primary();
        table.string("Name").notNull();
        table.string("Description");
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("student");
};
