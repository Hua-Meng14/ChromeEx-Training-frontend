let user_signed_in = true;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "is_user_signed_in") {
    sendResponse({
      message: "success",
      payload: user_signed_in,
    });
  } else if (request.message === "sign_out") {
    user_signed_in = false;
    sendResponse({ message: "success" });
  } else if (request.message === "sign_in") {
    user_signed_in = true;
    sendResponse({ message: "success" });
  }
  return true;
});


const name = document.getElementById("username");
const balance = document.getElementById("balance");
const incomeTotal = document.getElementById("income-value");
const expenseTotal = document.getElementById("expense-value");
const recordText = document.getElementById("record-text");
const recordAmount = document.getElementById("record-amount");
const form = document.getElementById("form");

const dummyTransactions = [
  { id: 1, text: "Flower", amount: -20, date: "25 Dec 2021" },
  { id: 2, text: "Salary", amount: 300, date: "8 Jan 2021" },
  { id: 3, text: "Book", amount: -10, date: "19 Mar 2021" },
  { id: 4, text: "Camera", amount: 150, date: "30 Dec 2021" },
  { id: 3, text: "Book", amount: -10, date: "19 Mar 2021" },
  { id: 4, text: "Camera", amount: 150, date: "30 Dec 2021" },
];

// addTransaction
function addTransaction() {}

// updateValue
function updateValue() {
  var username = "Huameng";
  var totalBalance = 9999;
  var totalIncome = 5555;
  var totalExpense = 1111;
  name.innerHTML = `${username}`;
  balance.innerHTML = `$${totalBalance}`;
  incomeTotal.innerHTML = `$${totalIncome}`;
  expenseTotal.innerHTML = `$${totalExpense}`;
}

// remove Transaction by ID
// function deleteRecord() {}

// Initial app

updateValue();
form.addEventListener("submit", addTransaction);
