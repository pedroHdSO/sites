document.addEventListener("DOMContentLoaded", () => {
    const grassContainer = document.querySelector(".grass-container");
    const numGrass = 500; // Defina o número de gramas que deseja preencher a tela
  
    // Função para criar uma grama
    function createGrass() {
      const grass = document.createElement("img");
      grass.src = "grass.gif";
      grass.classList.add("grama");
      grass.style.left = `${Math.random() * 98.5}%`;
      grassContainer.appendChild(grass);
    }
  
    // Criar múltiplas gramas
    for (let i = 0; i < numGrass; i++) {
      createGrass();
    }
  });
var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar(){
    showSidebar = !showSidebar;
    if(showSidebar){
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }else{
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}
function closeSidebar(){
    if(showSidebar){
        toggleSidebar();
    }
}
window.addEventListener('resize', function(event){
    if(this.window.innerHeight>768 && showSidebar){
        toggleSidebar();
    }
    });


  