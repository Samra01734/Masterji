/*********** LEC 8: STACK vs HEAP MEMORY - 500 WORDS CODE ***********/
// Run: node index.js

console.log("=".repeat(60));
console.log("🧠 JAVASCRIPT STACK vs HEAP MEMORY - COMPLETE GUIDE");
console.log("=".repeat(60));

// ================= 1. STACK MEMORY (PRIMITIVE - COPY SAFE) =================
console.log("\n📦 1. STACK MEMORY - SIMPLE TYPES (COPY BEHAVIOR)");
console.log("-".repeat(50));

let age = 23;                    // STACK: Writes "23"
let ageCopy = age;               // NEW STACK PAGE: "23" (COPY)
ageCopy = 25;                    // Change copy only

console.log("Original age:", age);      // 23 ✅ SAFE
console.log("ageCopy:", ageCopy);       // 25
console.log("Stack Rule: COPY = SAFE!");

let name = "Samra";              // String (Stack)
let nameCopy = name;
nameCopy = "Ali";
console.log("\nString - Original:", name);     // Samra ✅
console.log("String Copy:", nameCopy);         // Ali

let isActive = true;             // Boolean (Stack)
let activeCopy = isActive;
activeCopy = false;
console.log("\nBoolean - Original:", isActive); // true ✅

// ================= 2. HEAP MEMORY (OBJECT - SHARED DANGER) =================
console.log("\n🌐 2. HEAP MEMORY - COMPLEX TYPES (REFERENCE)");
console.log("-".repeat(55));

let student = {name: "Samra", age: 23};  // HEAP Object + STACK Reference
let studentCopy = student;               // SAME REFERENCE!
studentCopy.name = "Ali";                // CHANGES ORIGINAL!

console.log("Original student:", student.name);  // Ali 😱 SHARED
console.log("studentCopy:", studentCopy.name);   // Ali

let marks = [95, 87, 92];        // HEAP Array
let marksCopy = marks;
marksCopy.push(88);              // CHANGES ORIGINAL!
console.log("\nArray - Original:", marks);       // [95,87,92,88] 😱
console.log("marksCopy:", marksCopy);

let greet = function(){ return "Hello!"; };  // HEAP Function
let greetCopy = greet;
console.log("\nFunction - Same:", greet() === greetCopy()); // true

// ================= 3. VISUAL COMPARISON TABLE =================
console.log("\n📊 3. STACK vs HEAP - COMPARISON TABLE");
console.log("-".repeat(50));
console.table([
    {Memory: "STACK", Type: "Number", Example: "age=23", Copy: "SAFE", Result: "Original=23"},
    {Memory: "STACK", Type: "String", Example: "name=Samra", Copy: "SAFE", Result: "Original=Samra"},
    {Memory: "HEAP", Type: "Object", Example: "student={}", Copy: "SHARED", Result: "Original=CHANGED"},
    {Memory: "HEAP", Type: "Array", Example: "marks=[95]", Copy: "SHARED", Result: "Original=CHANGED"},
    {Memory: "HEAP", Type: "Function", Example: "greet()", Copy: "SHARED", Result: "Same Function"}
]);

// ================= 4. 10 CHALLENGES - TEST YOURSELF =================
console.log("\n🔥 4. 10 CHALLENGES - RUN & CHECK!");
console.log("-".repeat(45));

// CHALLENGE 1-5: STACK (SAFE)
console.log("\nSTACK CHALLENGES:");
let a = 10; let b = a; b = 20; console.log("1:", a); // 10
let x = "Hi"; let y = x; y = "Bye"; console.log("2:", x); // Hi
let c = true; let d = c; d = false; console.log("3:", c); // true
let score = 95; let backup = score; backup = 100; console.log("4:", score); // 95
let id = null; let idCopy = id; idCopy = 123; console.log("5:", id); // null

// CHALLENGE 6-10: HEAP (DANGER)
console.log("\nHEAP CHALLENGES:");
let obj1 = {n: 5}; let obj2 = obj1; obj2.n = 10; console.log("6:", obj1.n); // 10
let arr1 = [1]; let arr2 = arr1; arr2.push(2); console.log("7:", arr1); // [1,2]
let fn1 = () => "A"; let fn2 = fn1; console.log("8:", fn1() === fn2()); // true
let person = {name: "Sam"}; let clone = person; clone.name = "Alex"; console.log("9:", person.name); // Alex
let list = [10]; let listCopy = list; listCopy[1] = 20; console.log("10:", list); // [10,20]

// ================= 5. MEMORY DIAGRAM =================
console.log("\n🎨 5. MEMORY DIAGRAM (Visual)");
console.log("-".repeat(50));
console.log("STACK MEMORY:");
console.log("age → [23]     ageCopy → [25]    ← INDEPENDENT!");
console.log("\nHEAP MEMORY:");
console.log("student ─────→ [Object: name='Ali'] ←── studentCopy    ← SAME!");

// ================= 6. RULES SUMMARY =================
console.log("\n 6. GOLDEN RULES (Memorize!)");
console.log("-".repeat(35));
console.log("1. STACK (7 Types) = COPY = SAFE");
console.log("   → String, Number, Boolean, Null, Undefined, Symbol, BigInt");
console.log("2. HEAP (3 Types) = SHARED = DANGER");
console.log("   → Object, Array, Function");
console.log("3. ALWAYS use === for comparisons!");

console.log("\n === STACK vs HEAP MASTERED! ===");
console.log(" Save: git add . && git commit -m 'Lec 8: Stack Heap Complete' && git push");
console.log(" Time: 2 minutes to run + UNDERSTAND!");
console.log("=".repeat(60));