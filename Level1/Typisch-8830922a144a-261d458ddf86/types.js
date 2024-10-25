let data = ["Hello", 3, 3.2, "3", true, false, 3.0 + 3, 3 + "3"];

data.forEach(element => {
    let Value;

    if (typeof element === 'number') {
        if (Number.isInteger(element)) {
            Value = 'number int';
        } else {
            Value = 'number float';
        }
    } else {
        Value = typeof element;
    }

    console.log(`Waarde ${element} heeft als type ${Value}.`);
});

