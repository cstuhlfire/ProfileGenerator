const Intern = require("../lib/Intern");

// Test Intern class constructor and methods
describe("Intern", () => {

  // Test that entered school is stored in object.school.
  describe("school", () => {
    it("should store an input testSchool in testIntern.school", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testSchool = "UCSD";

      const testIntern = new Intern(testName, testId, testEmail, testSchool);

      expect(testIntern.school).toEqual(testSchool);
    });
  });

  // Test that .getSchool() method returns school.
  describe("getSchool", () => {
    it("should return intern's school name", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testSchool = "UCSD";

      const testIntern = new Intern(testName, testId, testEmail, testSchool);

      expect(testIntern.getSchool()).toEqual(testSchool);
    });
  });

  // Test that .getRole() method returns "Intern".
  describe("getRole", () => {
    it("should return 'Intern", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testSchool = "UCSD";

      const testIntern = new Intern(testName, testId, testEmail, testSchool);

      expect(testIntern.getRole()).toEqual("Intern");
    });
  });
});
