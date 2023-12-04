//esercizio 1
class User{
    constructor(_age){
        this.firstName ="Mattia"
        this.lastName ="Baietta"
        this.age =_age
        this.location = "Rimini"
    }
    confronta(x,y){
        if(x>y)
        {
            console.log("il primo è maggiore")
        }
        else
        {
            console.log("il secondo è maggiore")
        }
    }
}

let x=new User(40)
let y=new User(20)
y.confronta(x.age,y.age)



let arraypets=[]
let counterPets=1
let counterarray=0

class Pet{
    constructor(_petName,_ownerName,_species,_breed){
        this.petName = _petName
        this.ownerName = _ownerName
        this.species= _species
        this.breed = _breed
        this.numeroanimali=1
    }
    checkOwner(counter,animali){
        for(let i=0;i<animali.length;i++)
        {
            if(i!=counter)
            {
                if(animali[counter].ownerName==animali[i].ownerName)
                {
                    animali[counter].numeroanimali++
                    
                } 
            }
        }
    }
}

document.getElementById("bottoneform").addEventListener('click', function (){
    let li=document.createElement("li")
    let pet=document.getElementById("petName").value
    let owner=document.getElementById("ownerName").value
    let spec=document.getElementById("species").value
    let bre=document.getElementById("breed").value
    
    arraypets.push(new Pet(pet,owner,spec,bre))
    arraypets[counterarray].checkOwner(counterarray,arraypets)
    console.log(arraypets[counterarray].ownerName+" possiede: "+arraypets[counterarray].numeroanimali+" animali domestici")
    li.innerText="il Pet di nome: "+arraypets[counterarray].petName+" tipo: "+arraypets[counterarray].species+" razza: "+arraypets[counterarray].breed+" appartiene a: "+ arraypets[counterarray].ownerName+" che possiede: "+arraypets[counterarray].numeroanimali+" in tot animali domestici"
    document.getElementById("body").appendChild(li)
    counterarray++
    document.getElementById("myForm").reset();
    }

)


 