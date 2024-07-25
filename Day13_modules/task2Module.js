// *** Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script. ***

export const person = {
    name: "Alok kumar",
    empId: 456,
    skills: {
        tools: ["git", "github", "Vs code"],
        proLang: ["c++", "Javascript"],
    },
    greet() {
        console.log(`Good Day ${this.name}`);
    },
        
};

