let budgetValue = 0;
let totalExpensesValue = 0;

let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (let expense of expenseEntries) {
  totalExpensesValue += expense[1];
}

function calculateAverageExpense() {
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  if (calculateBalance() < 0) {
    balanceColor = "red";
  } else if (calculateBalance() < (budgetValue * 25) / 100) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (const expense of expenseEntries) {
    if (expense[0] === category) {
      categoryTotal += expense[1];
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  let categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesData = [];

  for (const category of categories) {
    let total = calculateCategoryExpenses(category);
    categoriesData.push([category, total]);
  }

  let maxTotal = categoriesData[0][1];
  let maxCategory = categoriesData[0][0];

  for (let i = 0; i < categories.length; i++) {
    if (categoriesData[i][1] > maxTotal) {
      maxTotal = categoriesData[i][1];
      maxCategory = categoriesData[i][0];
    }
  }
  return maxCategory;
}

function addExpenseEntry(expenses) {
  expenseEntries.push(expenses);
  totalExpensesValue = totalExpensesValue + expenses[1];
}
