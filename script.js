const botao_topo = document.querySelector("#toTop");
const header = document.querySelector("header")

window.onscroll = () => {
    const scrollValue = document.documentElement.scrollTop
    
    if(scrollValue > header.clientHeight){
        botao_topo.style.display = "block";
    }

    else {
        botao_topo.style.display = "none";
    }
}

const scrollToTop = () => {
    document.documentElement.scrollTop = 0;
}
