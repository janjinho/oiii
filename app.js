const adicionar = document.getElementById('adicionar');
const input = document.getElementById('input');
const lista = document.getElementById('lista');

function addItem() {
    const itemText = input.value.trim();

    if (itemText !== '') {
        const li = document.createElement('li');
        li.textContent = itemText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = function() {
            lista.removeChild(li);
        };

        li.appendChild(removeBtn);
        lista.appendChild(li);

        input.value = '';
    } else {
        
        alert('Você não escreveu nada cão');
    }
}

adicionar.addEventListener('click', addItem);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});
