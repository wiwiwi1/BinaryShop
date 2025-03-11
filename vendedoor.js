function addProduct() {
    const name = document.getElementById("nombreproductos").value;
    const price = parseFloat(document.getElementById("precio").value);
    const stock = parseFloat(document.getElementById("unidades").value);
    const image = document.getElementById("imagen").files[0];

    if (name && price && stock && image) {
        alert("Producto Añadido correctamente.");
    } else {
        alert("Por favor, completa todos los campos.");
    }
}