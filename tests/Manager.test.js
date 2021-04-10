const Manager = require("../lib/Manager");

// Test Manager class constructor and methods
describe("Manager", () => {

  // Test that entered office number is stored in object.officeNumber.
  describe("office number", () => {
    it("should store an input testOfficeNumber in testManager.officeNumber", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testOfficeNumber = "955-867-5309";

      const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);

      expect(testManager.officeNumber).toEqual(testOfficeNumber);
    });
  });

  // Test that .getRole() method returns "Manager".
  describe("getRole", () => {
    it("should return 'Manager", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testOfficeNumber = "955-867-5309";

      const testManager = new Manager(testName, testId, testEmail, testOfficeNumber);

      expect(testManager.getRole()).toEqual("Manager");
    });
  });
});
