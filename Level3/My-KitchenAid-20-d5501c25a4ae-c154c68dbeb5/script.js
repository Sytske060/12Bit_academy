document.addEventListener('DOMContentLoaded', function () {
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

    const updateOutput = function () {
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

    const keyActions = {
        ArrowUp: function () { elements.invoer.value++; },
        ArrowDown: function () { elements.invoer.value--; },
        q: function () { elements.startEenheid.value = 'ml'; },
        w: function () { elements.startEenheid.value = 'cl'; },
        e: function () { elements.startEenheid.value = 'dl'; },
        r: function () { elements.startEenheid.value = 'l'; },
        a: function () { elements.convertEenheid.value = 'ml'; },
        s: function () { elements.convertEenheid.value = 'cl'; },
        d: function () { elements.convertEenheid.value = 'dl'; },
        f: function () { elements.convertEenheid.value = 'l'; },
    };

    const handleKeyPress = function (event) {
        const action = keyActions[event.key];
        if (action) {
            action();
            updateOutput();
        }
    };

    elements.invoer.addEventListener('input', updateOutput);
    elements.startEenheid.addEventListener('input', updateOutput);
    elements.convertEenheid.addEventListener('input', updateOutput);

    document.addEventListener('keydown', handleKeyPress);
});
