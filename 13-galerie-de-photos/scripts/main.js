const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
var dark = 0.5;
/* Déclarer une liste avec les chemins des images*/

let listImg;
let thumb = document.getElementsByClassName("thumb-bar")[0]
for( let i = 0 ; i<5; i++)
{
    let img = document.createElement("img");
    img.src = "/images/pic" + (i + 1) + ".jpg"
    img.addEventListener("click", echange)
    thumb.appendChild(img);

}
btn.addEventListener("click", darken);
function echange()
{
    displayedImage.src = this.src;
    overlay.style.backgroundColor = `rgba(0,0,0,0)`
    dark = 0;

}

function darken()
{
    if(dark >= 0.9)
    {
        dark = 0.0;
    }
    dark += 0.1;
   overlay.style.backgroundColor = `rgba(0,0,0,${dark})`
}




/* Déclarer le texte alternative pour chaque image*/

/* traverser les images */

const newImage = document.createElement('img');

/* sombre/clair bouton */
