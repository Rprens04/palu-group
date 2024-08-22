// When the DOM is ready, run this function
$(document).ready(function() {
    //Set the carousel options
    $('#quote-carousel').carousel({
      pause: true,
      interval: 4000,
    });
  });



function transformButton() {
    document.querySelector('.boton-1').style.display = 'none';
    document.querySelector('.input-container').style.display = 'flex';
    document.querySelector('#messageInput').focus();
}

function sendMessage() {
    const input = document.querySelector('#messageInput');
    const successMessage = document.querySelector('#successMessage');

    if (input.value.trim() !== '') {
        successMessage.style.display = 'block';
        document.querySelector('.input-container').style.display = 'none';
    } else {
        alert('Please enter a message before sending.');
    }
}

const words = ["drive", "scale", "grow"];
const highlightElement = document.querySelector('.highlight');
let currentIndex = 0;

setInterval(() => {
    // Update the word in the highlighted element
    highlightElement.textContent = words[currentIndex];

    // Move to the next word, cycling back to the start
    currentIndex = (currentIndex + 1) % words.length;
}, 3000);


var swiper = new Swiper('.blog-slider', {
	spaceBetween: 30,
	effect: 'fade',
	loop: true,
	mousewheel: {
		invert: false,
	},
	// autoHeight: true,
	pagination: {
		el: '.blog-slider__pagination',
		clickable: true,
	}
});


const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("transformButton");
    const responseMessage = document.getElementById("responseMessage");

    button.addEventListener("click", function() {
        // Crear el input de texto
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Escribe aquí...";
        input.classList.add("active");

        // Crear el botón de enviar
        const sendButton = document.createElement("button");
        sendButton.textContent = "Enviar";
        sendButton.style.marginLeft = "10px";

        // Reemplazar el botón original con el input y el botón de enviar
        this.replaceWith(input);
        input.after(sendButton);

        // Hacer foco en el input de texto
        input.focus();

        // Evento de clic para enviar los datos
        sendButton.addEventListener("click", function() {
            const userInput = input.value;

            // Verificar si el input no está vacío
            if (userInput.trim() !== "") {
                // Enviar los datos al servidor
                fetch('https://submit-form.com/qJ8piCdWG', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ data: userInput }),
                })
                .then(response => response.json())
                .then(data => {
                    responseMessage.textContent = "¡Datos enviados con éxito!";
                })
                .catch(error => {
                    responseMessage.textContent = "¡Datos enviados con éxito!";
                    responseMessage.style.color = "red";
                });
            } else {
                responseMessage.textContent = "¡Datos enviados con éxito!";
                responseMessage.style.color = "red";
            }
        });
    });
});

function transformButton() {
    document.querySelector('.button-container').style.display = 'none';
    document.querySelector('.input-container').style.display = 'flex';
    document.querySelector('#messageInput').focus();
}

function sendMessage() {
    const input = document.querySelector('#messageInput');
    const successMessage = document.querySelector('#successMessage');

    if (input.value.trim() !== '') {
        successMessage.style.display = 'block';
        document.querySelector('.input-container').style.display = 'none';
    } else {
        alert('Please enter a message before sending.');
    }
}


