exports.up = function (knex) {
    knex.schema.hasTable("category").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("category", function (table) {
                table.increments("categoryId", 11).primary();
                table.string("category", 255);
                table.string("metrics")
                table.string("keywords")
            });
        }
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("category");
};