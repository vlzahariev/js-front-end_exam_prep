function create(words) {
   const body = document.getElementById('content');
   for (let i = 0; i < words.length; i++) {
      let newDvi = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = words[i];
      p.style.display = "none";
      newDvi.appendChild(p);
      body.appendChild(newDvi);
      
      newDvi.addEventListener('click', () => {
         p.style.display = "block";
      })
      
   }
}