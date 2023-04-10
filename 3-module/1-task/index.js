function namify(users) {

  let arr = [];

  for (let key in users) {
    arr.push(users[key].name);
  }
  return arr;
};