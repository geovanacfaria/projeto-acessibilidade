document.addEventListener("DOMContentLoaded", function () {
    const fontSizeInput = document.getElementById("font-size");
    const fontSizeValue = document.getElementById("font-size-value");
    const colorModeSelect = document.getElementById("color-mode");
    const readAloudButton = document.getElementById("read-aloud");
    const textElement = document.getElementById("text");

    // Controle de tamanho da fonte
    fontSizeInput.addEventListener("input", function () {
        const fontSize = fontSizeInput.value;
        fontSizeValue.textContent = fontSize + "px";

        // Ajusta o tamanho da fonte em todos os elementos de texto
        document.querySelectorAll('header, main, footer, p').forEach(el => {
            el.style.fontSize = fontSize + "px";
        });
    });

    // Modo de cores (normal / autismo)
    colorModeSelect.addEventListener("change", function () {
        if (colorModeSelect.value === "autismo") {
            document.body.classList.add("autismo");
        } else {
            document.body.classList.remove("autismo");
        }
    });

    // Leitor de voz (Leitura em voz alta)
    readAloudButton.addEventListener("click", function () {
        const speech = new SpeechSynthesisUtterance(textElement.textContent);
        speech.lang = "pt-BR";
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;
        window.speechSynthesis.speak(speech);
    });
});