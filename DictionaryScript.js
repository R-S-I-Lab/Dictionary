function addWord() {
    const container = document.getElementById("addHere");
    const word = document.getElementById("insertWord").value;
    const text = document.createElement("dt");
    text.innerHTML = word;
    container.appendChild(text);
    document.getElementById("insertWord").value = "";
}

function searchWord() {
    const dictionary = document.getElementsByTagName("dt");
    const searchWord = document.getElementById("searchWord").value;
    document.getElementById("searchWord").value = "";
    for (let i = 0; i < dictionary.length; ++i) {
        if (searchWord === dictionary[i].innerHTML) {
            return alert("This word exists in dictionary");
        }
    }
    alert("This word doesn't exist in dictionary");
}