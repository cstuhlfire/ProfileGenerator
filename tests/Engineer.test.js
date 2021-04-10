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
      const testGithubRepo = "https://github.com/mango"

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName, testGithubRepo);

      expect(testEngineer.githubName).toEqual(testGithubName);
    });
  });

  // Test that entered github repo is stored in object.githubRepo.
  describe("github repo", () => {
    it("should store an input testGithubRepo in testEngineer.githubRepo", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testGithubName = "MangoCodes";
      const testGithubRepo = "https://github.com/mango"

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName, testGithubRepo);

      expect(testEngineer.githubRepo).toEqual(testGithubRepo);
    });
  });

  // Test that .getRole() method returns "Engineer".
  describe("getRole", () => {
    it("should return 'Engineer", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";
      const testGithubName = "MangoCodes";
      const testGithubRepo = "https://github.com/mango"

      const testEngineer = new Engineer(testName, testId, testEmail, testGithubName, testGithubRepo);

      expect(testEngineer.getRole()).toEqual("Engineer");
    });
  });
});
