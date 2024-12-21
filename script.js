// Завдання 1
const user = {
    name: "John",
    age: 30,
    hobby: "reading",
    premium: true,
  };
  
  user.mood = "happy";
  user.hobby = "skydiving";
  user.premium = false;
  
  for (const key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
  }
  
  // Завдання 2
  function countProps(obj) {
    return Object.keys(obj).length;
  }
  console.log(countProps({ name: "John", age: 30 })); // 2
  
  // Завдання 3
  function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = "";
  
    for (const [name, tasks] of Object.entries(employees)) {
      if (tasks > maxTasks) {
        maxTasks = tasks;
        bestEmployee = name;
      }
    }
  
    return bestEmployee;
  }
  
  console.log(
    findBestEmployee({
      Ann: 29,
      David: 35,
      Helen: 1,
      Lorence: 99,
    })
  ); 
  
  // Завдання 4
  function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (const salary of Object.values(employees)) {
      totalSalary += salary;
    }
  
    return totalSalary;
  }
  
  console.log(
    countTotalSalary({
      Ann: 1000,
      David: 1500,
      Helen: 800,
    })
  ); 
  
  // Завдання 5
  function getAllPropValues(arr, prop) {
    const values = [];
  
    for (const obj of arr) {
      if (prop in obj) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  
  console.log(
    getAllPropValues(
      [
        { name: "Apple", price: 50 },
        { name: "Banana", price: 30 },
        { name: "Orange", price: 25 },
      ],
      "name"
    )
  );
  
// Завдання 6

  function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (const product of allProducts) {
      if (product.name === productName) {
        totalPrice = product.price * product.quantity;
        break;
      }
    }
  
    return totalPrice;
  }
  
  console.log(
    calculateTotalPrice(
      [
        { name: "Laptop", price: 1000, quantity: 3 },
        { name: "Phone", price: 500, quantity: 10 },
        { name: "Tablet", price: 800, quantity: 5 },
      ],
      "Phone"
    )
  ); 
  