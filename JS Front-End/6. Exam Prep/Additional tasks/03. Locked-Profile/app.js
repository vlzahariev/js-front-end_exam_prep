function lockedProfile() {
    const main = document.getElementById('main');
    let profiles = main.children;
    let user1 = profiles[0];
    let user2 = profiles[1];
    let user3 = profiles[2];

    let buttons = {
        showMore1: user1.querySelector('button'),
        showMore2: user2.querySelector('button'),
        showMore3: user3.querySelector('button')
    }

    buttons.showMore1.addEventListener('click', expandHandler);
    buttons.showMore2.addEventListener('click', expandHandler);
    buttons.showMore3.addEventListener('click', expandHandler);

    function expandHandler() {
        const parent = this.parentElement
        const children = parent.children
        let input = children[4]
        let div = children[9]
        if (input.checked) {
            if (this.textContent === "Show more") {
                div.style.display = 'block'
                this.textContent = "Hide it"
            } else {
                div.style.display = 'none'
                this.textContent = "Show more"
            }
        }
    }
    
}