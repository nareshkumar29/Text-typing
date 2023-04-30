const text = document.getElementById("text");

const textLoad = ()=>{

    setTimeout(()=>{
        text.textContent = "Searching";
    },0);

    setTimeout(()=>{
        text.textContent = "Coding";
    },3000);

    setTimeout(()=>{
        text.textContent = "Developing";
    },6000);

    setTimeout(()=>{
        text.textContent = "Hacking";
    },9000);
}

    textLoad();
    setInterval(textLoad, 12000);