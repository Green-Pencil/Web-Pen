function changeImage(clickedImg, mainId) {
  const mainImage = document.getElementById(mainId);
  mainImage.src = clickedImg.src;

  const allImgs = clickedImg.parentElement.querySelectorAll('img');

  allImgs.forEach(img => img.classList.remove('angewählt'));

  clickedImg.classList.add('angewählt');
}



function Info(trigger) {
  const content = document.getElementById("moreText");

  if (content.style.display === "block") {
    content.style.display = "none";
    trigger.textContent = "Mehr anzeigen ▼";
  } else {
    content.style.display = "block";
    trigger.textContent = "Weniger anzeigen ▲";
  }
}