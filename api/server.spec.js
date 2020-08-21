const request = require("supertest");
const server = require("./server.js");
const db = require("../data/db-config.js");

describe("server", () => {
	beforeEach(async () => {
		// empty table and reset primary key back to 1
		await db("sandwiches").truncate();
	});

	describe("GET /", () => {
		// using return
		it("should return 200 OK", () => {
			return request(server)
				.get("/")
				.then((res) => {
					expect(res.status).toBe(200);
				});
		});
		// using async await
		it("should return 200 OK using async/await", async () => {
			const res = await request(server).get("/");
			expect(res.status).toBe(200);
		});
	}); // PASSING

	describe("GETALL /sandwiches", () => {
		it("should return an array of 1", async () => {
			// add an item
			await request(server).post("/sandwiches").send({
				name: "server.js getAll TEST Chicken Sandwich",
				cost: 3.75,
				calories: 440,
			});

			// look for it
			const sandwichArray = await db("sandwiches");
			expect(sandwichArray).toHaveLength(1);

			// get array
			const res = await request(server).get("/sandwiches");
			// expect(res.body).toBe([{}]);
			expect(res.body).toEqual(expect.arrayContaining(sandwichArray));
		});
	}); // PASSING

	describe("POST /sandwiches", () => {
		// using return
		it("should add a sandwich", async () => {
			await request(server).post("/sandwiches").send({
				name: "server.js post TEST Chicken Sandwich",
				cost: 3.75,
				calories: 440,
			});

			// check that sandwich is in the database
			const sams = await db("sandwiches");
			expect(sams).toHaveLength(1);
		});
	}); // PASSING

	describe("DELETE /sandwiches/:id", () => {
		// using return
		it("should delete a sandwich", async () => {
			await request(server).post("/sandwiches").send({
				name: "server.js delete TEST Chicken Sandwich",
				cost: 3.75,
				calories: 440,
			});

			// check that sandwich is in the database
			const samsDelete = await db("sandwiches");
			expect(samsDelete).toHaveLength(1);

			// delete that sandwich
			await request(server).delete("/sandwiches/1");

			// check for sandwich's existance
			const samExist = await db("sandwiches");
			expect(samExist).toHaveLength(0);
		});
	}); // PASSING
	// outer describe for server
});
