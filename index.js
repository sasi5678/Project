class Student {
    constructor(rollNo, name, age, grade) {
      this.rollNo = rollNo;
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  
    updateDetails(name, age, grade) {
      this.name = name;
      this.age = age;
      this.grade = grade;
    }
  }
  
  class StudentManagementSystem {
    constructor() {
      this.students = [];
    }
  
    addStudent(student) {
      const exists = this.students.find(s => s.rollNo === student.rollNo);
      if (exists) {
        console.log("❌ Student with this Roll No already exists.");
      } else {
        this.students.push(student);
        console.log("✅ Student added successfully!");
      }
    }
  
    viewAllStudents() {
      if (this.students.length === 0) {
        console.log("📭 No students found.");
        return;
      }
  
      console.log("📋 All Students:");
      this.students.forEach(s => {
        console.log(`Roll No: ${s.rollNo}, Name: ${s.name}, Age: ${s.age}, Grade: ${s.grade}`);
      });
    }
  
    searchStudent(rollNo) {
      const student = this.students.find(s => s.rollNo === rollNo);
      if (student) {
        console.log(`🔍 Found: Roll No: ${student.rollNo}, Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`);
      } else {
        console.log("❌ Student not found.");
      }
    }
  
    updateStudent(rollNo, name, age, grade) {
      const student = this.students.find(s => s.rollNo === rollNo);
      if (student) {
        student.updateDetails(name, age, grade);
        console.log("✅ Student details updated.");
      } else {
        console.log("❌ Student not found.");
      }
    }
  
    deleteStudent(rollNo) {
      const index = this.students.findIndex(s => s.rollNo === rollNo);
      if (index !== -1) {
        this.students.splice(index, 1);
        console.log("🗑️ Student deleted.");
      } else {
        console.log("❌ Student not found.");
      }
    }
  }
  
  // Sample Usage
  const system = new StudentManagementSystem();
  
  // Add some students
  system.addStudent(new Student(1, "Sasi", 20, "A"));
  system.addStudent(new Student(2, "Rahul", 21, "B"));
  
  // View students
  system.viewAllStudents();
  
  // Search
  system.searchStudent(1);
  
  // Update
  system.updateStudent(1, "Sasi Kumar", 21, "A+");
  
  // Delete
  system.deleteStudent(2);
  
  // View again
  system.viewAllStudents();
  