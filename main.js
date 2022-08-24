const som = document.querySelector("#som");
const usd = document.querySelector("#usd");
const euro = document.querySelector("#euro");

const convert = (elem, target, target2) => {
   elem.addEventListener("input", () => {
     const req = new XMLHttpRequest();
     req.open("GET", "data.json"); 
     req.setRequestHeader("Content-type", "application/json");
     req.send();
     req.addEventListener("load", () => {
      const data = JSON.parse(req.response);

            if (elem === som) {
         target.value = (elem.value / data.usd).toFixed(2);
         target2.value = (elem.value / data.euro).toFixed(2);
        } else if (elem === usd) {
          target.value = (elem.value * data.usd).toFixed(2);
          target2.value = (elem.value * data.usd / data.euro).toFixed(2);
        } else if (elem === euro){
          target.value = (elem.value * data.euro).toFixed(2);
          target2.value = (elem.value * data.euro / data.usd).toFixed(2); 
        }
        elem.value === "" && (target.value = "");
        elem.value === "" && (target2.value = "");
      }
        )
      });
};
convert (som, usd, euro);
convert (usd, som, euro);
convert (euro, som, usd);
