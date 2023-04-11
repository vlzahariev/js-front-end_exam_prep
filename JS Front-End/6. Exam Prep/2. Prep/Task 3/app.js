window.addEventListener('load', solve);

function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/grocery/';
    const loadBtn = document.getElementById('load-product');
    const addBtn = document.getElementById('add-product');
    const updBtn = document.getElementById('update-product');
    const tableContent = document.getElementById('tbody');
    const productInput = document.getElementById('product');
    const countInput = document.getElementById('count');
    const priceInput = document.getElementById('price');
    const form = document.querySelector('form.list')
    

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener('click', addHandler);

    async function loadHandler(event) {
        if (event) {
            event.preventDefault();
        }

        tableContent.innerHTML = '';

        try {
            const loadRes = await fetch(BASE_URL);
            let loadData = await loadRes.json();
            for (const product in loadData) {
                let tr = createElement('tr', '', tableContent, loadData[product]._id);
                
                createElement('td', loadData[product].product, tr, '', ['name']);
                createElement('td', loadData[product].count, tr, '', ['count-product']);
                createElement('td', loadData[product].price, tr, '', ['product-price']);
                let btnSection = createElement('td', '', tr, '', ['btn']);
                let updateBtn = createElement('button', 'Update', btnSection, '', ['update']);
                updateBtn.addEventListener('click', updateHandler);
                let delBtn = createElement('button', 'Delete', btnSection, '', ['delete']);
                delBtn.addEventListener('click', delHandler);
            }   
        } catch (error) {
            console.error(error);
        }
    }

    async function addHandler(event) {
        if (event) {
            event.preventDefault();
        };

        let httpHeaders = {
            method: "POST",
            body: JSON.stringify({
                product: productInput.value,
                count: countInput.value,
                price: priceInput.value
            })
        }

        try {
            const addRes = await fetch(BASE_URL, httpHeaders);
            let data = await addRes.json();

            loadHandler();
            form.reset();

        } catch (error) {
            console.error(error);
        }
        



    }

    function delHandler() {
        let id = this.parentNode.parentElement.id
        fetch(`${BASE_URL}${id}`, {method: "DELETE"})
            .then((loadHandler()))
            .catch((err) => {
                console.error(err);
            })
    }

    function updateHandler() {
        let parent = this.parentElement.parentElement.children;
        let id = this.parentElement.parentElement.id
        console.log(id)
        let name = parent[0];
        console.log(name.textContent)
        let count = parent[1];
        let price = parent[2];
        
        productInput.value = name.textContent;
        countInput.value = count.textContent;
        priceInput.value = price.textContent;

        updBtn.disabled = false
        addBtn.disabled = true
        updBtn.addEventListener('click', () => {
            productInput.value = name.textContent;
            countInput.value = count.textContent;
            priceInput.value = price.textContent;
            
            let httpHeaders = {
                method: "PATCH",
                body: JSON.stringify({
                    product: productInput.value,
                    count: countInput.value,
                    price: priceInput.value
                })
            }
            fetch(`${BASE_URL}${id}`, httpHeaders)
                .then((res) => res.json())    
                .then((data) => {
                    console.log(data)
                    loadHandler();
                    updBtn.disabled = true;
                    addBtn.disabled = false;

                    form.reset();
                })
                .catch((err) => {
                    console.error(err);
                })
        });
    }   

    function createElement(type, content, parent, id, classes, attributes) {
        const newItem = document.createElement(type);
    
        if (content && type !== 'input') {
            newItem.textContent = content;
        }
    
        if (content && type === 'input') {
            newItem.value = content;
        }
    
        if (id) {
            newItem.id = id;
        }
    
        if (classes) {
            newItem.classList.add(...classes);
        }
    
        if (attributes) {
            for (const attr of attributes) {
                newItem.setAttribute(attr, attributes[attr]);
            }
        }
    
        if (parent) {
            parent.appendChild(newItem);
        }
    
        return newItem
    }
}