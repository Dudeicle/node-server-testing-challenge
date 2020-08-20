const db = require("../data/db-config.js");

module.exports = {
	insert,
	update,
	remove,
	getAll,
	findById,
};

async function insert(hobbit) {
	return db("sandwiches")
		.insert(sandwich, "id")
		.then((ids) => ids[0]);
}

async function update(id, changes) {
	return null;
}

function remove(id) {
	return null;
}

function getAll() {
	return db("sandwiches");
}

function findById(id) {
	return null;
}
