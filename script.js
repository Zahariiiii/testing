window.addEventListener('DOMContentLoaded', () => {
  const loadHomeworkButton = document.querySelector('.load-homework-btn');
  loadHomeworkButton.addEventListener('click', (event) => {
    event.preventDefault();
    const selectDay = document.getElementById('day');
    const selectDayValue = selectDay.value;
    const currentDayOption = selectDay.querySelector(`option[value="${selectDayValue}"]`);
    const selectedDay = currentDayOption.innerText;

    const selectLesson = document.getElementById('lesson');
    const selectLessonValue = selectLesson.value;
    const currentLessonOption = selectLesson.querySelector(`option[value="${selectLessonValue}"]`);
    const selectedLesson = currentLessonOption.innerText;

    const selectShift = document.getElementById('shift');
    const selectShiftValue = selectShift.value;
    const currentShiftOption = selectShift.querySelector(`option[value="${selectShiftValue}"]`);
    const selectedShift = currentShiftOption.innerText;

    const selectDate = document.getElementById('date');
    const selectDateValue = selectDate.value;

    const homeworkTextarea = document.getElementById('homeworkInput');
    const homeworkValue = homeworkTextarea.value;

    const task = {
      selectedDay,
      selectedLesson,
      selectedShift,
      selectDateValue,
      homeworkValue,
    };

    const homeworkStorage = window.localStorage.getItem('homework');
    const homeworkStorageParse = JSON.parse(homeworkStorage);
    if (!homeworkStorageParse) {
      window.localStorage.setItem('homework', JSON.stringify([task]));
    } else {
      homeworkStorageParse.push(task);
      window.localStorage.setItem('homework', JSON.stringify(homeworkStorageParse));
    }

    window.open(window.location.protocol + '//' + window.location.host + `/homework.html`);
  });
});
