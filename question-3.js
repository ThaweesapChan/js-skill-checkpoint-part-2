// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await response.json();
    //console.log(users)

    let Names17 = users
      .map((user) => user.name)
      .filter((name) => name.length > 17);

    console.log(Names17);
  } catch (error) {
    console.error("error", error);
  }
}

getUsers();
