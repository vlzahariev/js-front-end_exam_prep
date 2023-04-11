// TODO
function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
    const loadBtn = document.getElementById('load-button');
    const addBtn = document.getElementById('add-button');
    let uList = document.getElementById('todo-list');

    loadBtn.addEventListener('click', loadHandler);
    addBtn.addEventListener('click', addHandler);

    function addHandler(event) {
        event.preventDefault()

        const inputField = document.getElementById('title');
        let httpHeaders = {
            method: "POST",
            body: JSON.stringify({
                "name": inputField.value
            })
        }

        fetch(BASE_URL, httpHeaders)
            .then((res) => {
                loadHandler();
                inputField.value = '';
            })
            .catch((err) => {
                console.error(err);
            })
    }

    function loadHandler(event) {
        if (event) {
            event?.preventDefault()
        }
        fetch(BASE_URL, { method: "GET" })
            .then((loadRes) => loadRes.json())
            .then((loadData) => {

                uList.innerHTML = '';
                for (const obj in loadData) {
                    let li = createElement('li', '', uList);
                    li.id = loadData[obj]._id
                    let span = createElement('span', loadData[obj].name, li);
                    let remBtn = createElement('button', 'Remove', li);
                    remBtn.addEventListener('click', removeHandler);
                    let editBtn = createElement('button', 'Edit', li);
                    editBtn.addEventListener('click', editHandler);
                }

            })
            .catch((error) => {
                console.error(error)
            })

    }

    function removeHandler(event) {
        let liParent = event.currentTarget.parentElement;
        fetch(`${BASE_URL}${liParent.id}`, { method: "DELETE" })
            .then((res) => loadHandler())
            .catch((err) => {
                console.error(err);
            })
    }

    function editHandler(event) {
        let liParent = event.currentTarget.parentElement;
        let span = liParent.children[0];
        let editBtn = liParent.children[2];
        let input = document.createElement('input');
        input.value = span.textContent;
        liParent.prepend(input);
        liParent.removeChild(span);
        liParent.removeChild(editBtn);

        let submitBtn = document.createElement('button');        
        submitBtn.textContent = "Submit";
        liParent.appendChild(submitBtn);
        submitBtn.addEventListener('click', () => {
            fetch(`${BASE_URL}${liParent.id}`, {
                method: "PATCH",
                body: JSON.stringify({
                    name: input.value
                })
            })
                .then((res) => loadHandler())
                .catch((err) => {
                    console.error(err);
                })
        })

    }

    function createElement(type, content, parentElement) {
        let newItem = document.createElement(type);

        if (content) {
            newItem.textContent = content;
        }

        if (parentElement) {
            parentElement.appendChild(newItem);
        }
        return newItem;
    }
}

attachEvents();
