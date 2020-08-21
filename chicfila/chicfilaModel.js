const db = require("../data/db-config.js");

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById,
};

async function insert(sandwich) {
	return db("sandwiches")
		.insert(sandwich, "id")
		.then((ids) => ids[0]);
} // WORKING

async function update(id, changes) {
	return null;
}

function remove(id) {
	return db("sandwiches").where({ id }).del();
} // WORKING

function getAll() {
	return db("sandwiches");
} // WORKING

function findById(id) {
	return db("sandwiches").where({ id }).first();
} // WORKING
