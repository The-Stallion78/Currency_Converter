const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api";

  const dropdowns = document.querySelectorAll(".dropdown select");
  const btn = document.querySelector("form buttton");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");


  for (let select of dropdowns) {
    for (Currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;
        select.append(newOption)
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    })
  }

const updateFlag  = (element) => {
    let Currcode = element.value;
    let countryCode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc
}

btn.addEventListener("click", async (evt)=>{
        evtvt.preventDefault();
        let amount = document.querySelector(".amount input");
        let amountValue = amount.value;

        if (amountValue === "" || amountValue <= 1) {
            amountValue = 1;
            amount.value = 1;
        }

    let URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    
    let response =await fetch("");
    let data = response.json()
    let rate = data[toCurr.value.toLowerCase()];
    console.log(rate);

    let finalAmount = amountValue * rate;
    msg.innerHTML = `${amountValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`
})

