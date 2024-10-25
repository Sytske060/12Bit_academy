let voorbeeldArray = [1, 2, 3];
pushElement(voorbeeldArray, 4);

function pushElement(mijnArray, nieuwElement) {
    console.log("Voor push: ", mijnArray);
    mijnArray.push(nieuwElement);
    console.log("Na push: ", mijnArray);
}

console.log("Voor de toewijzing: ", voorbeeldArray);

function nieuweArray(mijnArray, nieuwElement) {
    console.log("Voor nieuwe array: ", mijnArray);
    mijnArray = [nieuwElement];
    console.log("Na nieuwe array: ", mijnArray);
}

console.log("Na de toewijzing: ", voorbeeldArray);
