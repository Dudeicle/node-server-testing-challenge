const db = require("../data/db-config.js");
const Sandwiches = require("./chicfilaModel.js");

describe("chicfilaModel", () => {
	// Truncate to work with empty database
	beforeEach(async () => {
		// empty table and reset primary key back to 1
		await db("sandwiches").truncate();
	});

	// TESTING insert()
	describe("insert()", () => {
		it("should add a sandwich", async () => {
			// make reqeust, send data
			await Sandwiches.insert({
				name: "insert TEST Chicken Sandwich",
				cost: 999.01,
				calories: 1,
			});

			// check the sandwich is in the database (without using GET / route)
			const sandwiches = await db("sandwiches");

			expect(sandwiches).toHaveLength(1);
		});
	});

	// TESTING getAll()
	describe("getAll()", () => {
		it("should return all sandwiches", async () => {
			const allsams = await db("sandwiches");

			expect(allsams).toHaveLength(0);
			// expect(allsams).toHaveLength(1); // intentional failure
		});
	});

	// TESTING findById()
	describe("findById()", () => {
		it("should return a single sandwich by ID", async () => {
			// step 1 show that the db is empty
			const allsams = await db("sandwiches");
			expect(allsams).toHaveLength(0);

			// step 2 add an item to the database and prove it exists
			await Sandwiches.insert({
				name: "find by ID TEST Chicken Sandwich",
				cost: 999.01,
				calories: 1,
			});
			const allsamstwo = await db("sandwiches");
			expect(allsamstwo).toHaveLength(1);

			// step 4 delete the item just added and prove it has been deleted
		});
	});
});
