/*********** LEC 7: DATA TYPES SUMMARY ***********/
// Run: node index.js

console.log("🚀 === JAVASCRIPT DATA TYPES SUMMARY === 🚀");
console.log("=".repeat(50));

// ================= 1. PRIMITIVE DATA TYPES (7) =================
console.log("\n📦 1. PRIMITIVE TYPES (STACK MEMORY)");
console.log("=".repeat(40));

let name = "Samra";              // String
let age = 23;                    // Number
let isStudent = true;            // Boolean
let score = null;                // Null
let city;                        // Undefined
let id = Symbol("unique");       // Symbol
let bigNum = 123n;               // BigInt

// DISPLAY ALL
console.log("String:", name, typeof name);
console.log("Number:", age, typeof age);
console.log("Boolean:", isStudent, typeof isStudent);
console.log("Null:", score, typeof score);
console.log("Undefined:", city, typeof city);
console.log("Symbol:", id, typeof id);
console.log("BigInt:", bigNum, typeof bigNum);

// ================= 2. NON-PRIMITIVE DATA TYPES =================
console.log("\n🌐 2. NON-PRIMITIVE TYPES (HEAP MEMORY)");
console.log("=".repeat(45));

let student = {                  // Object
    name: "Samra",
    age: 23
};
let marks = [95, 87, 92];        // Array
let greet = function(){          // Function
    return "Hello!";
};

console.log("Object:", student, typeof student);
console.log("Array:", marks, typeof marks);
console.log("Function:", greet(), typeof greet);

// ================= 3. MEMORY TEST =================
console.log("\n🧠 3. STACK vs HEAP MEMORY TEST");
console.log("=".repeat(40));

// STACK (COPY)
let a = 10;
let b = a;
b = 20;
console.log("STACK - Original:", a);  // 10 ✅

// HEAP (REFERENCE)
let x = { num: 5 };
let y = x;
y.num = 10;
console.log("HEAP - Original:", x.num); // 10 😱

// ================= 4. COMPARISON TEST =================
console.log("\n⚖️ 4. COMPARISON OPERATORS TEST");
console.log("=".repeat(43));

console.log("5 == '5':", 5 == "5");      // true ❌
console.log("5 === '5':", 5 === "5");    // false ✅
console.log("null == 0:", null == 0);    // true ❌
console.log("null === 0:", null === 0);  // false ✅
console.log("'Ali' !== 'ali':", "Ali" !== "ali"); // true ✅

// ================= 5. QUICK CHALLENGES =================
console.log("\n🔥 5. SOLVE THESE CHALLENGES!");
console.log("=".repeat(40));
console.log("Challenge 1:", typeof "Hello");     // string
console.log("Challenge 2:", typeof 100);         // number
console.log("Challenge 3:", typeof {});          // object
console.log("Challenge 4:", typeof [1,2]);       // object
console.log("Challenge 5:", 5 === "5");          // false

// ================= 6. DATA TYPE TABLE =================
console.log("\n 6. DATA TYPES TABLE SUMMARY");
console.log("=".repeat(50));
console.table([
    {Type: "String", Example: '"Samra"', Memory: "Stack", Size: "Variable"},
    {Type: "Number", Example: "23", Memory: "Stack", Size: "8 bytes"},
    {Type: "Boolean", Example: "true", Memory: "Stack", Size: "1 bit"},
    {Type: "Null", Example: "null", Memory: "Stack", Size: "0"},
    {Type: "Undefined", Example: "undefined", Memory: "Stack", Size: "0"},
    {Type: "Symbol", Example: "Symbol()", Memory: "Stack", Size: "Unique"},
    {Type: "BigInt", Example: "123n", Memory: "Stack", Size: "Unlimited"},
    {Type: "Object", Example: "{}", Memory: "Heap", Size: "Variable"},
    {Type: "Array", Example: "[1,2]", Memory: "Heap", Size: "Variable"},
    {Type: "Function", Example: "function()", Memory: "Heap", Size: "Variable"}
]);

console.log("\n === DATA TYPES MASTERED! ===");
console.log(" Save: git add . && git commit -m 'Lec 7 Complete' && git push");
console.log(" Time: 2 minutes to run!");