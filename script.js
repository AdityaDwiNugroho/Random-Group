function generateGroups() {
    const namesInput = document.getElementById("nama");
    const numOfGroupsInput = document.getElementById("numOfGroups");
    const groupResult = document.getElementById("groupResult");

    const names = namesInput.value.split(",").map(name => name.trim());
    const numOfGroups = parseInt(numOfGroupsInput.value);

    if (names.length === 0 || numOfGroups <= 0) {
        groupResult.innerHTML = "<p>Please enter valid names and number of groups.</p>";
        return;
    }

    const shuffledNames = shuffleArray(names);
    const groupedNames = new Array(numOfGroups).fill().map(() => []);

    for (let i = 0; i < shuffledNames.length; i++) {
        const groupNameIndex = i % numOfGroups;
        groupedNames[groupNameIndex].push(shuffledNames[i]);
    }

    let resultHTML = "";

    for (let i = 0; i < groupedNames.length; i++) {
        resultHTML += `<p><strong>Group ${i + 1}:</strong><br>${groupedNames[i].join(", ")}</p>`;
    }

    groupResult.innerHTML = resultHTML;
}

function shuffleArray(array) {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
