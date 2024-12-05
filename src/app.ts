//Задание 1
// function calculateTotal(
//   price: number,
//   quantity: number,
//   discount: number = 0 // значение по умолчанию
// ): number {
//   const total = price * quantity;
//   const discountedTotal = total - total * discount;
//   return discountedTotal;
// }
// console.log(calculateTotal(100, 2)); // Вывод: 200 (без скидки)
// console.log(calculateTotal(100, 2, 0.1)); // Вывод: 180 (скидка 10%)

//                                                 //Задание 2

const id: number | string = 228;

function displayId(id: number | string): void {
  if (typeof id === "string") {
    console.log(`Value of id: ${id.toUpperCase()}`);
  } else {
    console.log(`Value of id: ${id * 10}`);
  }
}

displayId(id);

//                                                 //Задание 3

// interface Order {
//   orderId: string;
//   amount: number;
//   status: "pending" | "shipped" | "delivered";
// }

// const orders: Order[] = [
//   { orderId: "2sa24g", amount: 3, status: "pending" },
//   { orderId: "74g", amount: 10, status: "delivered" },
//   { orderId: "3waa24g", amount: 1, status: "shipped" },
// ];

// function filterOrdersByStatus(
//   orders: Order[],
//   status: "pending" | "shipped" | "delivered"
// ): Order[] {
//   return orders.filter((order) => {
//     return order.status === status;
//   });
// }

//                                                 //Задание 4

const productInfo: [string, number, number] = ["Product Name", 99.99, 10];

function updateStock(
  inventory: Record<string, number>,
  productInfo: [string, number, number]
): Record<string, number> {
  const [productName, , stock] = productInfo;
  inventory[productName] = (inventory[productName] || 0) + stock;
  return inventory;
}

// Example usage
const inventory = {
  "Product Name": 50,
  "Another Product": 20,
};

const updatedInventory = updateStock(inventory, productInfo);
console.log(updatedInventory);
