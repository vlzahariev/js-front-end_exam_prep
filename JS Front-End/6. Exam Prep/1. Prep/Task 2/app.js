window.addEventListener("load", solve);

function solve() {

  const publishButton = document.getElementById('form-btn');
  const previewList = document.getElementById('preview-list');
  let fNameInput = document.getElementById('first-name');
  let lNameInput = document.getElementById('last-name');
  let ageInput = document.getElementById('age');
  let storyTitleInput = document.getElementById('story-title');
  let optionList = document.getElementById('genre');
  let storyTextArea = document.getElementById('story');
  const formA = document.querySelector('#main > div.form-wrapper > form');

  publishButton.addEventListener('click', publishHandler);

  function publishHandler() {

    if (fNameInput.value == ''
      || lNameInput.value == ''
      || ageInput.value == ''
      || storyTitleInput.value == ''
      || storyTextArea.value == '') {
      return;
    }

    let li = document.createElement('li');
    li.classList.add('story-info')

    let article = document.createElement('article');

    let h4 = document.createElement('h4');
    h4.textContent = `Name: ${fNameInput.value} ${lNameInput.value}`;

    let pAge = document.createElement('p');
    pAge.textContent = `Age: ${ageInput.value}`;

    let pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitleInput.value}`;

    let pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${optionList.value}`;

    let pStory = document.createElement('p');
    pStory.textContent = storyTextArea.value;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);
    li.appendChild(article);

    let saveBtn = document.createElement('button');
    saveBtn.textContent = "Save Story";
    saveBtn.classList.add('save-btn');
    saveBtn.disabled = false
    saveBtn.addEventListener('click', saveHandler);

    let editBtn = document.createElement('button');
    editBtn.textContent = "Edit Story";
    editBtn.classList.add('edit-btn');
    editBtn.disabled = false
    editBtn.addEventListener('click', editHandler);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete Story";
    deleteBtn.classList.add('delete-btn');
    deleteBtn.disabled = false
    deleteBtn.addEventListener('click', deleteHandler);

    li.appendChild(saveBtn);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    previewList.appendChild(li);

    formA.reset()

    publishButton.disabled = true
  }

  function editHandler() {
    let fNameInput = document.getElementById('first-name');
    let lNameInput = document.getElementById('last-name');
    let ageInput = document.getElementById('age');
    let storyTitleInput = document.getElementById('story-title');
    let optionList = document.getElementById('genre').children;
    let storyTextArea = document.getElementById('story');

    let liElement = document.getElementsByClassName('story-info')[0];
    let info = liElement.children[0].children;
    let h4 = info[0].textContent;
    let [_item, fName, lname] = h4.split(' ');
    let age = info[1].textContent.split(' ')[1];
    let title = info[2].textContent.split(' ')[1];
    let genre = info[3].textContent.split(' ')[1];
    let story = info[4].textContent;

    fNameInput.value = fName
    lNameInput.value = lname
    ageInput.value = age
    storyTitleInput.value = title
    storyTextArea.value = story
    optionList.value = genre

    deleteHandler()

  }

  function saveHandler() {
    const mainDiv = document.getElementById('main');
    mainDiv.innerHTML = '';

    let h1 = document.createElement('h1')
    h1.textContent = 'Your scary story is saved!';
    mainDiv.appendChild(h1);
  }

  function deleteHandler() {
    let liEl = document.getElementsByClassName('story-info')[0];
    liEl.parentElement.removeChild(liEl)
    publishButton.disabled = false


  }

}
