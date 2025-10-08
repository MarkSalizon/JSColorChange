/* 
   Name: Salizon, Mark Louie R.
   Section: 2563B
   Date: October 8, 2025
   JS Color Changer Lab
*/
const button = document.getElementById('changeColorBtn');
const colorCode = document.getElementById('colorCode');


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

button.addEventListener('click', function() {
  const newColor = getRandomColor();
  document.body.style.backgroundColor = newColor; 
  colorCode.textContent = `Color Code: ${newColor}`; 
  button.textContent = "Color Changed";
});
s