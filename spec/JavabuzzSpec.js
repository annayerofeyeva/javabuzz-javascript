describe ('Javabuzz',function() {
	var javabuzz;

	beforeEach(function() {
		javabuzz = new Javabuzz();
	});

	describe("knows when a number is", function(){
		it("divisible by 3", function() {
			expect(javabuzz.isDivisibleByThree(3)).toBe(true);
		});

		it("divisible by 5", function() {
			expect(javabuzz.isDivisibleByFive(10)).toBe(true);
		});

		it("divisible by 15", function() {
			expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
		});
	});

	describe("knows when a number is not", function() {
		it("divisible by 3", function() {
			expect(javabuzz.isDivisibleByThree(1)).toBe(false);
		});

		it("divisible by 5", function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
		});

		it("divisible by 3", function() {
			expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
		});
	});

	describe("when playing, says", function() {
		it("'Java' when a number is divisible by 3", function() {
			expect(javabuzz.play(3)).toEqual("Java");
		});

		it("'Buzz' when a number is divisible by 5", function() {
			expect(javabuzz.play(5)).toEqual("Buzz");
		});

		it("'JavaBuzz' when a number is divisible by 3", function() {
			expect(javabuzz.play(15)).toEqual("JavaBuzz");
		});

		it("number when a number is not divisible by 3, 5 or both", function() {
			expect(javabuzz.play(2)).toEqual(2);
		});
	});

});

