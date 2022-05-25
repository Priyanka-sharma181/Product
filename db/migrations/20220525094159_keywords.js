exports.up = function (knex) {
    knex.schema.hasTable("keywords").then(function (exists) {
        if (!exists) {
            return knex.schema.createTable("keywords", function (table) {
                table.string("keywordText", 255);
                table.integer("searchVolume")
                table.integer("keywordDifficulty")
                table.float("costPerClick")
                table.integer("competitionIndex")
                table.string("keywordLabel")
                table.string("adgroupLabel")
                table.string("matchType")
                table.boolean("isQuestion")
                table.integer("keywordsId").unsigned().notNullable();
                table.foreign('keywordsId').references('category.categoryId').onDelete('CASCADE')
            });
        }
    });
};
exports.down = function (knex) {
    return knex.schema.dropTable("keywords");

};