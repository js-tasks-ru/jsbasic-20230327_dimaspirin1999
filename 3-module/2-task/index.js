function filterRange(arr, a, b) {
  let filtered = arr.filter(function (item) {
    if (item >= a && item <= b) {
      return item;
    };
  });
  return filtered;
};
