function deleteProduct() {
    const productId = prompt("Ingresa el ID del producto a eliminar:");
    if (productId) {
        alert(`Producto con ID ${productId} eliminado.`);
    }
}

function deleteUser() {
    const username = prompt("Ingresa el usuario a eliminar:");
    if (username) {
        alert(`Usuario ${username} eliminado.`);
    }
}