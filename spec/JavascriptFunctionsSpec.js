describe("Hello World", function(){
	it("says Hello", function(){
		expect(helloWorld()).toEqual("Hello World!");
	});
	it("says World", function(){
		expect(helloWorld()).toContain("World");
	});
})