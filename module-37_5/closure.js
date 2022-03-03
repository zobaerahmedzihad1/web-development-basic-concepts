// const bank = (owner) => {
//   balance = 0;
//   return (amount) => {
//     // balance = balance + amount;
//     balance += amount;
//     return balance;
//     console.log(balance);
//   };
// };

const bank = (owner) => {
  balance = 0;
  return {
    deposit: (amount) => {
      // balance = balance + amount;
      balance += amount;
      return balance;
    },
    withdraw: (amount) => {
      // balance = balance - amount;
      balance -= amount;
      return balance;
    },
  };
};

// deposit
const zihadBank = bank("zihad");
zihadBank.deposit(700);
console.log(zihadBank.deposit(1000));

// withdraw
zihadBank.withdraw(1200);
console.log(zihadBank.withdraw(400));
