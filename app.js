const textInput = document.getElementById("text-input");
const delimiterInput = document.getElementById("delimiter-input");
const outputBox = document.getElementById("output-box");

function updateOutput() {
  if (delimiterInput.value === "") {
    outputBox.textContent = textInput.value;
  } else {
    const words = textInput.value.trim().split(/\s+/);
    const result = words.join(delimiterInput.value);
    outputBox.textContent = result;
  }
}

textInput.addEventListener("input", updateOutput);
delimiterInput.addEventListener("input", updateOutput);
