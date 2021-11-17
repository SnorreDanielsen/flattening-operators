export function example1() {

  Promise.resolve('A')
    .then(() => {
      const x = Promise.resolve('B');
      console.log(x);
      return x;
    })
    .then(y => {
      console.log(y);
    });

}

// Starter som
// Promise.resolve('A')
//   .then(() => {
//     const x = 'B';
//     console.log(x);
//     return x;
//   })
//   .then(y => {
//     console.log(y);
//   });