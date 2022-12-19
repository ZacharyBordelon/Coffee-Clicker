
let state = {
    coffeeCount: 0,
    coffeePerSecond: 0,
    }

let producers = [
    {pot:{
        price: 10,
        increase: 5,
    }},
    {bucket:{
        price: 20,
        increase: 10,
    }},
    {tank:{
        price: 100,
        increase: 50,

    }},
]

const purchasePot = () =>{
   state.coffeeCount= state.coffeeCount-producers[0].pot.price 
}

const purchaseBucket = () => {
    state.coffeeCount = state.coffeeCount-producers[1].bucket.price
    buttonVisibility()
}


const purchaseTank = () => {
    state.coffeeCount = state.coffeeCount-producers[2].tank.price
    buttonVisibility()
}



//things i need to access
document.getElementById('point-tracker').innerHTML = state.coffeeCount;
document.getElementById('reward-1').style.visibility="hidden";
document.getElementById('reward-2').style.visibility="hidden";
document.getElementById('reward-3').style.visibility="hidden";

//functions go here

const acrue = () => {
    state.coffeeCount += 1;
    console.log(state.coffeeCount,'coffeecount from acrue');
    document.getElementById("point-tracker").innerHTML = state.coffeeCount;
    buttonVisibility();

};

const buttonVisibility = () =>{
    if(state.coffeeCount>=producers[0].pot.price){
        document.getElementById('reward-1').style.visibility="visible"
    }
    if(state.coffeeCount>=producers[1].bucket.price){
        document.getElementById('reward-2').style.visibility="visible"   
    }   
    if(state.coffeeCount>=producers[2].tank.price){
        document.getElementById('reward-3').style.visibility="visible"   
    }   
}


      
const tick = () => {
state.coffeeCount += state.coffeePerSecond
document.getElementById('point-tracker').innerHTML = state.coffeeCount;
buttonVisibility();
};
    
setInterval(()=>tick(),1000)

const buttonOne = () =>{
    state.coffeePerSecond += 2
    purchasePot() 
  //  buttonVisibility()
}

const buttonTwo = () =>{
    state.coffeePerSecond += 5
    purchaseBucket()
  //  buttonVisibility()
}

const buttonThree = () =>{
    state.coffeePerSecond += 10
    purchaseTank()
}

//invoke functions here

document.getElementById('acrue-points').addEventListener("click", acrue);
document.getElementById('reward-1').addEventListener("click",buttonOne,);
document.getElementById('reward-2').addEventListener("click",buttonTwo);
document.getElementById('reward-3').addEventListener("click",buttonThree);

console.log (state.coffeeCount) 

