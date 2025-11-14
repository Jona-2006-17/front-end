export const init = () => {
  console.log("Módulo de fincas inicializado");
  
  const button_venta = document.getElementById("button_venta");
  
    if (button_venta) {
        button_venta.addEventListener("click", (event) => {
            event.preventDefault();
            console.log("¡Botón de venta clickeado!");
            
            const pageToLoad = button_venta.dataset.page;
            console.log(`Navegando a: ${pageToLoad}`);
            
            // Usar la función de navegación
            loadContent(pageToLoad);
        });
    }
};