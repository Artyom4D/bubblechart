(function() {
	module('BubbleChart Patches Tests');

	test('randMax', function() {
		var test5 = Math.randMax(5),
			test3 = Math.randMax(3),
			test8 = Math.randMax(8);

		equal(true, test5 < 5);
		equal(true, test5 >= 0);
		equal(true, test3 < 3);
		equal(true, test3 >= 0);
		equal(true, test8 < 8);
		equal(true, test8 >= 0);
	});
})();
