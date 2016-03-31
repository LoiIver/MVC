describe("pow", function () {

	function makeTest(x) {
		var expected = x * x * x;
		it("возводит " + x + " в 3 степень. ожидаем " + expected, function() {
			assert.equal(pow(x, 3), expected);
		});
	}


	for (var i = 0; i < 5; i++) {
		makeTest(i);
	}	
});