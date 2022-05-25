exports.up = function (knex) {
    knex.schema.hasTable("metrics").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("metrics", function (table) {
                table.integer("noOfKeywords", 255);
                table.integer("totalVolume")
                table.integer("avgrageCpc")
                table.integer("keywordDiffiulty")
                table.integer('metricsId').unsigned().notNullable();
                table.foreign('metricsId').references('category.categoryId').onDelete('CASCADE')
            });
        }
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("metrics");
};