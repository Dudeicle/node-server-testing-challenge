exports.seed = function (knex, Promise) {
	return knex("sandwiches")
		.truncate()
		.then(function () {
			return knex("sandwiches").insert([
				{
					name: "Chic-Fil-A Chicken Sandwich",
					cost: 3.75,
					calories: 440,
				},
				{
					name: "Chic-Fil-A Delux Sandwich",
					cost: 4.45,
					calories: 500,
				},
				{
					name: "Chic-Fil-A Spicy Delux",
					cost: 4.69,
					calories: 550,
				},
			]);
		});
};
