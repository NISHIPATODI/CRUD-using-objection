
exports.up = function(knex) {
    return knex.schema.createTable("student",function(table){
        table.increments("id");
        table.string("Name");
        table.string("Description");
    })

};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("student");
};
