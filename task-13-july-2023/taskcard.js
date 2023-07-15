

 var cardData = [
    { name: "Lama", age: 25, image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" },
    { name: "sara", age: 30, image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" },
    { name: "shatha",age: 22, image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" },
    { name: "Ail", age: 28, image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" }
  ];

 
  var cardContainer = document.getElementById("cardContainer");
  cardContainer.style.cssText="display:flex ; flex-direction:row ; justify-content:center";

  cardData.forEach(function(card) {
   
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.cssText = "width: 33%; border: 1px solid #ccc; padding: 10px; margin-bottom: 10px";
   
    var nameElement = document.createElement("h3");
    nameElement.textContent = card.name;

    
    var ageElement = document.createElement("p");
    ageElement.textContent = "Age: " + card.age;

    
    var imageElement = document.createElement("img");
    imageElement.src = card.image;
    imageElement.style.cssText ="width: 100%";

    
    cardElement.appendChild(nameElement);
    cardElement.appendChild(ageElement);
    cardElement.appendChild(imageElement);

    cardContainer.appendChild(cardElement);
  });






