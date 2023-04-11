window.addEventListener('load', solve);

function solve() {
    let totalLikes = 0;
    const genreInput = document.getElementById('genre');
    const songInput = document.getElementById('name');
    const authorInput = document.getElementById('author');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const likes = document.querySelector('#total-likes > div.likes > p');

    addBtn.addEventListener('click', addHandler);

    function addHandler(event) {
        event.preventDefault()

        if (genreInput.value == ''
            || songInput.value == ""
            || authorInput.value == ""
            || dateInput.value == ""
        ) {
            return;
        }
        
        const hitsContainer = document.querySelector('.all-hits-container');
        const form = document.querySelector('.container-text > form');
        
        let divHitsInfo = createElement('div', '', hitsContainer, ['hits-info']);
        let img = createElement('img', '', divHitsInfo);
        img.setAttribute('src', './static/img/img.png')
        createElement('h2', `Genre: ${genreInput.value}`, divHitsInfo);
        createElement('h2', `Name: ${songInput.value}`, divHitsInfo);
        createElement('h2', `Author: ${authorInput.value}`, divHitsInfo);
        createElement('h3', `Date: ${dateInput.value}`, divHitsInfo);
        let saveBtn = createElement('button', "Save song", divHitsInfo, ['save-btn']);
        saveBtn.addEventListener('click', saveHandler);
        let likeBtn = createElement('button', "Like song", divHitsInfo, ['like-btn']);
        likeBtn.addEventListener('click', likeHandler);
        let deleteBtn = createElement('button', "Delete", divHitsInfo, ['delete-btn']);
        deleteBtn.addEventListener('click', deleteHandler);

        form.reset();
    }

    function likeHandler() {
        totalLikes += 1;
        likes.textContent = `Total Likes: ${totalLikes}`;
        this.setAttribute('disabled', true);

    }

    function saveHandler() {
        let parentDiv = this.parentNode
        let savedContainer = document.querySelector('.saved-container');
        savedContainer.appendChild(parentDiv)
        let saveBtn = parentDiv.querySelector('.save-btn');
        let likeBtn = parentDiv.querySelector('.like-btn');
        saveBtn.remove()
        likeBtn.remove()
    }

    function deleteHandler() {
        let parentDiv = this.parentNode
       parentDiv.remove();
    }

    function createElement(type, content, parent, classes) {
        const newItem = document.createElement(type);
    
        if (content && type !== 'input') {
            newItem.textContent = content;
        }
    
        if (content && type === 'input') {
            newItem.value = content;
        }
    
        if (classes) {
            newItem.classList.add(...classes);
        }
    
        if (parent) {
            parent.appendChild(newItem);
        }
    
        return newItem
    }
}