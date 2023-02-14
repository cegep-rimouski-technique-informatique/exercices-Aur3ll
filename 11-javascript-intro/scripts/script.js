console.log("Hello world")

function isPalindrome(a) {
    
    let text =""
    for( let i = (a.length -1); i >= 0 ; i-- )
    {
        text += a[i];
    }
    if(a === text)
    {
        return true;
    }
    return false;

    
}

if(isPalindrome("alla"))
{
    console.log("true");
}
else
{
    console.log("false");
}

for(let i = 1; i <= 100; i++)
{
    if((i % 5 == 0) &&  (i % 3 == 0) )
    {
        console.log("fizzbuzz");
    }
    else if(i % 5 == 0) 
    {
        console.log("buzz");
    }
    else if(i%3 == 0)
    {
        console.log("fizz");
    }
    else
    {
        console.log(i);
    }

}


function fibonacci(a)
{
    if(a == 0 )
    {
        return 0;
    }
    let precedant = 0;
    let courant = 1;
    for(let i = 1; i < a; i++)
    {
        let temp = courant;
        courant = precedant + courant;
        precedant = temp;


    }

    return courant;
}

console.log(fibonacci(3));


function triBulleReverse(list)
{
    let size= list.length -1;
    let swap = true;
    for(let i = 0; i < size && swap; i++)
    {
        swap = false;
        for(let j = 0; j < size - i; j++)
        {
            if(list[j] < list[j+1])
            {
                let temp = list[j];
                list[j] = list[j+1];
                list[j+1] = temp;
                swap = true;
            }
        }
        

    }
}

let list = [1,2,3];

triBulleReverse(list);
console.log(list[0]);

class Ferme
{
    constructor(adresse, animals){
        this._adresse = adresse;
        this._animals = animals;
    }
}

class Animal
{
    constructor(nom, nbPattes)
    {
        this._nom = nom;
        this.#_nbPattes = nbPattes;

    }

    Manger()
    {
        console.log(this._nom + " mange")

    }

    Cris()
    {

    }



}

class Poulet extends Animal
{
    constructor(nom, nbPattes)
    {
        super( nom, nbPattes);
    }

    Cris()
    {
        console.log("kek kek");
    }


}

class Vache extends Animal
{
    constructor(nom, nbPattes)
    {
        super( nom, nbPattes);
    }

    Cris()
    {
        console.log("MeuuuH");
    }


}



