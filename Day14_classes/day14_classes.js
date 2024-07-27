// ***** Activity 1: Class Definition *****

// *** Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. ***
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Have a good Day ${this.name}.`;
    }

    // Static method
    static genericGreeting(){
        return `AApka din shubh hoo.`
    }
}

const person1 = new Person('Alok', 12);

console.log(person1.greeting());


// *** Task 2: Add a method to the Person class that updates the age property and logs the updated age. ***
Person.prototype.updateAge = function(newAge) {
    this.age = newAge;
    return this.age;
}

console.log("person Age: ", person1.updateAge(15));

// ***** Activity 2: Class Inheritance *****

// *** Task 3: Define a class 'Student' that extends the 'Person' class. Add a property studentId and a method to return the student ID. ***

class Student extends Person {
    // static properties
    static studentNum = 0;

    constructor(name, age, studentId) {
        super(name, age);
        
        this.studentId = studentId;

        // Increasing static properties on each call (static property belong to class not to its instances)
        Student.studentNum++;
    }

    getStudentId() {
        return this.studentId;
    }
}

const student1 = new Student('AK', 20, 420);
const student2 = new Student('AK', 20, 420);

console.log("StudentId is: ", student1.getStudentId());

// *** Task 4: Override the greeting method in the 'Student' class to include the student ID in the message. Log the overridden greeting message. ***
Student.prototype.greeting = function() {
    return `Have a good Day ${this.name} with studentID ${this.studentId}`;
}

console.log(student1.greeting());

// *** Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message. ***

// Note: static method added above in Person class
console.log(Person.genericGreeting());


// *** Task 6: Add a static property to the Student class to keep track of the number of student created. Increment this property in the constructor and log the total number of students. ***

// NOte: static propertie added above in student class
console.log(Student.studentNum);


// ***** Activity 4: Getters and setters *****

// *** Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.


// *** Task 8: Add a setter method to the Person class to update the name properties ( firstname and lastname). Update the name using the setter and log the updated full name. ***

class PersonClass {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Getter method for fullName
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // Setter method for fullName
    set updateName(name) {
        const [firstName, lastName] = name.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person = new PersonClass('Alok', 'kumar');

console.log(person.fullName); // using getter

person.updateName = 'Abhishek kumar';  // using setter

console.log(person.fullName);  // using getter
