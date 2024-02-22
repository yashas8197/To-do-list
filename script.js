const todoListForm = document.querySelector('#todoListForm');
const todaysList = document.querySelector('#todaysList');
const tomorrowsList = document.querySelector('#tomorrowsList');


const tommorowTaskCount = document.querySelector('#tommorowTaskCount');
const todayTaskCount = document.querySelector('#todayTaskCount');
const taskSummaryMessage = document.querySelector('#taskSummaryMessage');
const taskSummary = document.querySelector('#taskSummary')

todoListForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const taskInput = document.querySelector('#taskInput');
  const selectDay = document.querySelector('#selectDay');

  const listElement = document.createElement('li');

  listElement.className = 'list-group-item'

  listElement.innerHTML = `<div class="d-flex justify-content-between"><p>${taskInput.value}<p><button onClick=deleteBtn(this) class="btn btn-danger">DELETE</button></div>`

  if (selectDay.value === "Today") {
    todaysList.appendChild(listElement)
  } else {
    tomorrowsList.appendChild(listElement)
  }


  updateCount()

})

function deleteBtn(del) {
  let delBtn = del.parentElement.parentElement.parentElement;
  delBtn.remove()
  updateCount()
}

function updateCount() {
  const todaysListCount = todaysList.getElementsByTagName('li').length;
  const tomorrowsListCount = tomorrowsList.getElementsByTagName('li').length;

  todayTaskCount.textContent = todaysListCount;
  tommorowTaskCount.textContent = tomorrowsListCount;

  if (todaysListCount > tomorrowsListCount) {
    taskSummary.style.color = 'red'
    taskSummaryMessage.textContent = 'More Task Today!'
  } else if (tomorrowsListCount > todaysListCount) {
    taskSummary.style.color = 'green'
    taskSummaryMessage.textContent = 'More Task Tommorow!'
  } else {
    taskSummary.style.color = 'black'
    taskSummaryMessage.textContent = ' '
  }
}