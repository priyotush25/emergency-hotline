//utility function
function getElement(id) {
  return document.getElementById(id);
}

//  Initial heart and coin values
let heartNum = Number(getElement("heart").innerText);
let coin = Number(getElement("coin").innerText);

// Select all cards
let cards = document.getElementsByClassName("card");

// Array to store all copied text
let storedTexts = [];

// all operation here
for (let card of cards) {
  let copy = card.childNodes[7].childNodes[1];
  let call = card.childNodes[7].childNodes[3];
  let heart = card.childNodes[1].childNodes[3];

  let title = card.childNodes[3].childNodes[1];
  let num = card.childNodes[5].childNodes[1];

  // Heart button: increment heart count
  heart.addEventListener("click", function () {
    heartNum++;

    getElement("heart").innerText = heartNum;
  });

  // Call button: deduct coins and show alert
  call.addEventListener("click", function () {
    if (coin === 0) {
      alert("not available coin");
      return;
    }

    alert(`${title.innerText} ${num.innerText}`);

    coin -= 20;

    getElement("coin").innerText = coin;

    // date find
    let date = new Date().toLocaleTimeString();

    // card history
    let div = document.createElement("div");

    div.innerHTML = `<div class="bg-[#FAFAFA] p-4 rounded-xl flex items-center justify-between mt-4">
      <div>
        <h4 class="text-lg font-normal">${title.innerText}</h4>
        <h4 class="text-[#5C5C5C] text-lg font-normal mt-2">${num.innerText}</h4>
      </div>
      <div class="text-lg font-normal">
        <p>${date}</p>
      </div>
    </div>`;

    getElement("card-container").appendChild(div);
  });

  // Copy button: copy individual card number
  copy.addEventListener("click", function () {
    let text = num.innerText;

    navigator.clipboard.writeText(text).then(function () {
      alert("Copied  " + text);

      storedTexts.push(text);
      getElement("copy-count").innerText++;
    });
  });
}

// clear history
getElement("clear").addEventListener("click", function () {
  getElement("card-container").innerHTML = "";
});

// Copy All Stored Text button functionality
getElement("copy-btn").addEventListener("click", function () {
  if (storedTexts.length === 0) {
    alert("Not text Copied");
    return;
  }

  let finalText = storedTexts.join("\n");

  navigator.clipboard.writeText(finalText).then(function () {
    alert("All Copied:\n" + finalText);
  });
});
