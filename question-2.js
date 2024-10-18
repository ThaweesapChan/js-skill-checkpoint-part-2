const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
//1. ให้กรองข้อมูลนักเรียนที่มีคะแนนมากกว่า 50
//2. ให้เพิ่มคะแนนนักเรียนแต่ละคน 10%
//3. ให้รวมคะแนนทั้งหมดของนักเรียนที่เหลืออยู่ และที่ถูกเพิ่มคะแนนคนละ 10% ไปก่อนหน้านี้ 
//   (โดยใช้ Built-in Array Function)

let highScore = students
  .filter((student) => student.score > 50)
  .map((newScore) => newScore.score + (newScore.score * 10) / 100)
  .reduce((acc, cur) => acc + cur, 0);
//console.log(highScore);

//4. ให้นำคะแนนที่รวมแล้ว มาแสดงบนหน้าจอ Console ในรูปแบบ

console.log(`Total score is ${sum}`);