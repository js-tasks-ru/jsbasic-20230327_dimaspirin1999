function showSalary(users, age) {
  
  let all = users.filter( to => to.age <= age );
    
  let person = all.map(item => `${item.name}, ${item.balance}`);
  
  let str = person.join('\n');
    
  return str;
};