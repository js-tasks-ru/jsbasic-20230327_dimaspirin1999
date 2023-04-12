function camelize(str) {
  let arr = str.split('-');

let result = arr.map(function(item, index){
  if (index == 0) {
      return item;
  } else { 
      return item[0].toUpperCase() + item.slice(1);
  }
});

return result.join('');
}


