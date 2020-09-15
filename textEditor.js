let input1=document.querySelector(".creating1");
let input2=document.querySelector(".creating2");
let input3=document.querySelector(".creating3");
let updating=document.querySelector(".updating");


input1.addEventListener("input", adding1);

function adding1(ev) {

updating.innerHTML=this.value;

}

let k;
let jsE;

function create() {
	
let css=document.createElement('style');
css.className="ace";
document.body.appendChild(css);

}

create();

let ace1=document.querySelector(".ace");

input2.addEventListener("input", adding2);

function adding2(ev) {

ace1.innerHTML=this.value;

}


input3.addEventListener("change", adding3);

function adding3(ev) {

jsE=document.createElement("script");
jsE.text=this.value;
document.head.appendChild(jsE);
localStorage.setItem("creating3", this.value);
localStorage.getItem("creating3");

if(localStorage.length > 0)   {

jsE.text="";
document.head.removeChild(jsE);

 }

}
