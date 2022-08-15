let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let downloadButton = document.getElementById("save-text-file");
let textarea = document.querySelector(".content__textarea");

upperCaseButton.addEventListener("click", () => {
    textarea.value = textarea.value.toUpperCase();
});

lowerCaseButton.addEventListener("click", () => {
    textarea.value = textarea.value.toLowerCase();
});

properCaseButton.addEventListener("click", () => {
    let words = textarea.value.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    textarea.value = words.join(" ");
});

sentenceCaseButton.addEventListener("click", () => {
    let sentences = textarea.value.split(". ");
    for (let i = 0; i < sentences.length; i++) {
        console.log(sentences[i] = sentences[i].charAt(0).toUpperCase().trim() + sentences[i].substring(1).toLowerCase().trim());
    }
    textarea.value = sentences.join(". ");
});

function download(filename, text) {

}
downloadButton.addEventListener("click", () => {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textarea.value));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});