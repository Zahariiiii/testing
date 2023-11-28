window.addEventListener('DOMContentLoaded', () => {
  const homeworkItems = window.localStorage.getItem('homework');
  const homeworkItemsParsed = JSON.parse(homeworkItems);
  const listContainer = document.querySelector('.homework-list');
  for (const homeworkItem of homeworkItemsParsed) {
    const item = document.createElement('div');
    item.style.display = 'flex';
    item.style.columnGap = '20px';
    item.style.backgroundColor = '#f3f3f3';
    item.style.border = '1px solid black';
    item.style.padding = '10px';
    item.insertAdjacentHTML(
      'beforeend',
      `
      <p>${homeworkItem.selectedDay}</p>
      <p>${homeworkItem.selectedLesson}</p>
      <p>${homeworkItem.selectedShift}</p>
      <p>${homeworkItem.selectDateValue}</p>
      <p>Завдання: ${homeworkItem.homeworkValue}</p>
    `,
    );

    listContainer.appendChild(item);
  }
});
