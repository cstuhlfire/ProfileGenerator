const Engineer = require("../lib/Engineer");

// Test Engineer class constructor and methods
describe("Engineer", () => {

  // Test that entered github username is stored in object.githubName.
  describe("github username", () => {
    it("should store an input testGithubName in testEngineer.githubName", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testGithubName = "MangoCodes";

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName);

      expect(testEngineer.githubName).toEqual(testGithubName);
    });
  });

  // Test that getGithub() method returns "Engineer".
  describe("getGithub()", () => {
    it("should return github", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testGithubName = "MangoCodes";

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName);

      expect(testEngineer.getGithub()).toEqual(testGithubName);
    });
  });

  // Test that getRole() method returns "Engineer".
  describe("getRole()", () => {
    it("should return 'Engineer", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testGithubName = "MangoCodes";

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName);

      expect(testEngineer.getRole()).toEqual("Engineer");
    });
  });
});
