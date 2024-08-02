document.addEventListener("DOMContentLoaded", function() {  // esto sirve para esperar a que el DOM esté cargado antes de ejecutar el código de la clase
    
    const nums = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'J', 'Q', 'K']; //esto son los valores de las cartas
    const suits = ['heart', 'diamond', 'club', 'spade'];  // estos son los valores de la clase de las cartas 
        
    const cardBody = document.getElementById('card-body');
    const widthInput = document.getElementById('width-input');
    const heightInput = document.getElementById('height-input');
    const randomizerCardButton = document.getElementById('randomizer-card');

    function getRandomElement(arr) {  // esta función genera un elemento aleatorio de un array 
        return arr[Math.floor(Math.random() * arr.length)];  // esta función genera un elemento aleatorio entre 0 y el último índice del array 
    }

    function generateRandomCard() {  // esta función genera una carta aleatoria
        const suit = getRandomElement(suits);  // genera una clase de carta aleatoria
        const value = getRandomElement(nums);  // genera un valor de carta aleatorio

        cardBody.innerHTML = '';  // limpia el cuerpo de la carta para evitar
        cardBody.style.width = `${widthInput.value}px`;  // establece el anchod
        cardBody.style.height = `${heightInput.value}px`;  // establece la altura

        const topLeftValue = document.createElement('div');  // crea un elemento div para el valor superior izquier
        topLeftValue.classList.add('card-value', 'top-left');  // agrega la clase card-
        topLeftValue.textContent = value;  // establece el texto del valor superior izquierdo

        const bottomRightValue = document.createElement('div');  // crea un elemento div para el valor inferior dere
        bottomRightValue.classList.add('card-value', 'bottom-right');  // agrega la clase card-
        bottomRightValue.textContent = value;  // establece el texto del valor inferior derecho

        const suitImage = document.createElement('img');  // crea un elemento img para la clase de carta
        suitImage.classList.add('suit');  // agrega la clase suit 
        suitImage.src = `./assets/${suit}.png`;  // establece la imagen de la clase de carta
        suitImage.style.maxWidth = '50%';  // establece el ancho máximo
        suitImage.style.maxHeight = '50%';  // establece el alto má

        cardBody.appendChild(topLeftValue);  // agrega el valor superior izquierdo al cuerpo de la carta
        cardBody.appendChild(bottomRightValue);  // agrega el valor inferior derecho al cuerpo de la carta
        cardBody.appendChild(suitImage);  // agrega la clase de carta al cuerpo de la carta
    }

    randomizerCardButton.addEventListener('click', generateRandomCard);  // genera una carta aleatoria  
    widthInput.addEventListener('input', () => {  // actualiza el ancho de la carta cuando se modifica el input
        cardBody.style.width = `${widthInput.value}px`;
    });

    setInterval(generateRandomCard, 10000);  // genera una carta aleatoria cada 10 segundos


});
