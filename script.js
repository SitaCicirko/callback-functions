function notifyUser() {
  console.log("notifyUser function was called!");
}
function myAwesomeFunction(notifyUserCallback) {
  console.log("Running myAwesomeFunction... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");
  notifyUserCallback();
}

myAwesomeFunction(notifyUser);

myAwesomeFunction(function () {
  console.log("notifyUser function was called!");
});

function myAwesomeFunction2(onSuccessCallback, onFailureCallback) {
  console.log("Running myAwesomeFunction2... doing complex tasks...");
  console.log("Complex task complete. I will notify the user");

  const success = Math.random() > 0.5;
  if (success) {
    onSuccessCallback({
      message: "This is the message of success",
    });
  } else {
    onFailureCallback();
  }
}

function onAwesomeSuccess(data) {
  if (data && data.message) {
    console.log("It was successful: ", data.message);
  } else {
    console.error("Success callback was called without proper data!");
  }
}

function onAwesomeFailure() {
  console.log("It failed :(");
}

myAwesomeFunction2(onAwesomeSuccess, onAwesomeFailure);

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result);

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2);

const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult);

const result3 = myCalculatorFunction(10, 5, subtract);
console.log(result3);

const result4 = myCalculatorFunction(20, 4, divide);
console.log(result4);
