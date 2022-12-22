// Question 1:-

const calculate = (A, B) => {
  try {
    let root = Math.sqrt((3 * A + 1) / B);
    console.log(root);
  } catch (e) {
    console.log(e);
  }
};
calculate(4, 9);
