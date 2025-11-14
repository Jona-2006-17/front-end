export const init = () => {
    console.log("Módulo de venta_detalle inicializado");
    
    const select_producto = document.getElementById('tipo_producto');
    let valor_select = select_producto.value;

    select_producto.addEventListener("change", function(){
        valor_select = this.value;
        console.log(valor_select)
    })
    
};