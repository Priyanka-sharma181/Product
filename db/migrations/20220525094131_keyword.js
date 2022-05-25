exports.up = function (knex) {
    knex.schema.hasTable("keyword").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("keyword", function (table) {
                table.increments("keywordId", 11).primary();
                table.string("keyword", 255);
                table.string("metrics")
                table.string("category")
                table.string("keywords")
                table.integer("categoryId").unsigned().notNullable();
                table.foreign('categoryId').references('category.categoryId').onDelete('CASCADE')
            });
        }
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("keyword");

};