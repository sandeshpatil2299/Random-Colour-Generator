const colorContainerEl= document.querySelector(".colorContainer");

//creating divs
for(let i=0; i<30; i++)
{
   const colorEl= document.createElement("div");
   colorEl.classList.add("color");
   colorContainerEl.appendChild(colorEl);
}

const colorElNew= document.querySelectorAll(".color");

//adding color code to each div
const addColors= () =>
{
   colorElNew.forEach((element) =>
   {
      const newColorCode= genColor();
      element.style.backgroundColor= "#" + newColorCode;
      element.innerHTML= `#${newColorCode}`;
   })
}

//generating color codes
const genColor= () =>
{
   //color code property
   const chars= "0123456789abcdef";
   let colorCode= "";
   
   //generating color code with 6 characters
   for(let i=0; i<6; i++)
   {
      const randomNbr= Math.floor(Math.random() * chars.length);
      colorCode= colorCode + chars.substring(randomNbr, randomNbr + 1);
   }
   return colorCode;
}

addColors();
genColor();