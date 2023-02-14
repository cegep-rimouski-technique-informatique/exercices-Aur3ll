// 1. Dessinez le modèle par arborescence du DOM (Document Object Model) de index.html
/*.....................................document
.....................................html
.......................head..........................body
..........................................div........ul.............div
...................................................li..li..li.....a.....a
.................................................................img...img */

// Éxecuter le Javascript après la création du DOM
window.onload = () => {
  // 2. Remplacez le texte du titre par "DOMaine des Arbres"

    document.getElementById("titre").innerHTML = "DOMaine des Arbres";
  // 3. Changez l'ordre de présentation des images avec flex

    document.getElementsByClassName("container")[0].style["flex-direction"] = "column-reverse";


  // 4. Ajoutez le point "Terre" à la liste d'

    let ul = document.getElementsByTagName("ul")[0];
    let newE = document.createElement("li");
    newE.innerHTML = "terre";
    ul.appendChild(newE);


  

  // 5. Ajoutez l'attribut href manquant à la balise lien de l'image d'arbre.

   

  // avec la valeur  href="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"
  // Avec le sélecteur suivant, utilisez un "accès par relation" pour faire votre modification.
  const imageSansLien = document.querySelectorAll(
    'img[src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg"]'
  )[0];
  // code ici

    let toto = document.getElementsByTagName("a")[1];
    toto.setAttribute("href", "https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg");


  // 6. Modifiez la police du texte pour toutes les éléments de la liste

    let body = document.getElementsByTagName("body")[0];
    body.style.fontFamily = "Times New Roman, Times, serif";

    
}





