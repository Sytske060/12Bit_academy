document.addEventListener('DOMContentLoaded', () => {
    const elements = {
        invoer: document.getElementById('invoer'),
        startEenheid: document.getElementById('startEenheid'),
        convertEenheid: document.getElementById('convertEenheid'),
        output: document.getElementById('output'),
    };

    const eenheden = {
        ml: 1,
        cl: 10,
        dl: 100,
        l: 1000,
    };

    const updateOutput = () => {
        const {
            invoer,
            startEenheid,
            convertEenheid,
            output,
        } = elements;

        const geconverteerdeWaarde =
        (invoer.value * eenheden[startEenheid.value]) / eenheden[convertEenheid.value] || invoer.value;
        output.innerText = `${geconverteerdeWaarde} ${convertEenheid.value}`;
    };

    elements.invoer.addEventListener('input', updateOutput);
    elements.startEenheid.addEventListener('input', updateOutput);
    elements.convertEenheid.addEventListener('input', updateOutput);
});



