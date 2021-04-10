const Employee = require("../lib/Employee");

// Test Employee class constructor and methods
describe("Employee", () => {

  // Test that entered name is stored in object.name.
  describe("name", () => {
    it("should store an input testName in testEmployee.name", () => {
      const testName = "Mango";
      const testId = "2312";
      const testEmail = "mango@gmail.com";

      const testEmployee = new Employee(testName, testId, testEmail);

      expect(testEmployee.name).toEqual(testName);
    });
  });

  // Test that id is stored in object.id
  describe("id", () => {
    it("should store an input testId in testEmployee.id", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.id).toEqual(testId);
    });
  });

   // Test that email is stored in object.email
   describe("email", () => {
    it("should store an input newEmail in testEmployee.email", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.email).toEqual(testEmail);
    });
  });

  // Test that .getName() method returns name
  describe("getName", () => {
    it("should return the current name", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.getName()).toEqual(testName);
    });
  });

  // Test that .getId() method returns id
  describe("getId", () => {
    it("should return the current id", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.getId()).toEqual(testId);
    });
  });

  // Test that .getEmail() method returns the employee email
  describe("getId", () => {
    it("should return the current email", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.getEmail()).toEqual(testEmail);
    });
  });

  // Test that .getRole() method returns "Employee"
  describe("getId", () => {
    it("should return 'Employee'", () => {
        const testName = "Mango";
        const testId = "2312";
        const testEmail = "mango@gmail.com";

        const testEmployee = new Employee(testName, testId, testEmail);

        expect(testEmployee.getRole()).toEqual("Employee");
    });
  });
});
