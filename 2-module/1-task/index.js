function sumSalary(salaries) {
  let sum = 0;

  for (let sal of Object.values(salaries)) {
    
    if (typeof sal === "number" && !Number.isNaN(sal) && sal !== Infinity && sal !== -Infinity) {
        sum += sal;
    } else {
      sal = 0;
    }
  }
    return sum;
}
