// # task-1:
function reverseStr(input) {
  let reverse = '';

  for (let i = input.length - 1; i >= 0; i--) {
    reverse += input[i];
  }

  return reverse;
}

// # task-2:
function sumPositive(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }

  return sum;
}

// # task-3:
function freqElement(arr) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentElement;

  for (const element of arr) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;

    if (frequencyMap[element] > maxFrequency) {
      maxFrequency = frequencyMap[element];
      freqElement = element;
    }
  }

  return freqElement;
}

/* # task-4:
Not solved*/



// # task-5
const calculate = (number1, number2, operator) => {
  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  if (!operations[operator]) {
    throw new Error("Invalid operator");
  }

  return operations[operator](number1, number2);
};


// # task-6:
const generatePassword = (length) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{[]}\|;:'\",./<>?";
  const password = [];
  for (let i = 0; i < length; i++) {
    password.push(characters[Math.floor(Math.random() * characters.length)]);
  }
  return password.join("");
};


// # task-7:
function romanToInt(roman) {
  const romanNumeralMap = {
    'I': 1, 'V': 5, 'X': 10, 'L': 50,
    'C': 100, 'D': 500, 'M': 1000
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentSymbolValue = romanNumeralMap[roman[i]];
    const nextSymbolValue = romanNumeralMap[roman[i + 1]] || 0; // Set nextSymbolValue to 0 if it's undefined

    if (nextSymbolValue > currentSymbolValue) {
      result += nextSymbolValue - currentSymbolValue;
      i++;
    } else {
      result += currentSymbolValue;
    }
  }

  return result;
}

// # task-8:
function secondSmallest(numbers) {
  if (!Array.isArray(arr) || arr.length < 2) {
    return undefined;
  }

  const sortedNumber = arr.sort((a, b) => a - b);
  return sortedNumber[1];
}
