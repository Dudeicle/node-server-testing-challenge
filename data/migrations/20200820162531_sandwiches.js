exports.up = function (knex) {
	return knex.schema.createTable("sandwiches", (tbl) => {
		tbl.increments();
		tbl.string("name", 255).notNullable();
		tbl.integer("cost").notNullable();
		tbl.integer("calories").notNullable();
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("sandwiches");
};
