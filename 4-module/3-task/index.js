function highlight(table) {
  let tableRows = table.tBodies[0].rows;
  
  for (let i = 0; i < tableRows.length; i++) {
    let row = tableRows[i];
    let tdCells = row.cells;
    let empty = true;
    let availableClass = 'available';
    let unavailableClass = 'unavailable';
    let gender1 = 'male';
    let gender2 = 'female';

    for (let a = 0; a < tdCells.length; a++) {
      let dataAvailable = tdCells[a].getAttribute('data-available');
      let textGender = tdCells[a];

      if (dataAvailable) {
        empty = false;
      };

      if (dataAvailable && dataAvailable == 'true') {
        row.classList.add(availableClass);
      }

      if (dataAvailable && dataAvailable == 'false') {
        row.classList.add(unavailableClass);
      }

      if (tdCells[a].textContent == 'm') {
        row.classList.add(gender1);
      }

      if (tdCells[a].textContent == 'f') {
        row.classList.add(gender2);
      }

      let age = Number(tdCells[a].textContent);
      
      if (age < 18) {
        row.style.textDecoration = 'line-through';
      };
      
    };
    row.hidden = empty;
  }; 
}
  