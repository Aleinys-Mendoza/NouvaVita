/* 
==============================================
   NUOVA VITA E-COMMERCE - ADMIN LOGIC
==============================================
*/

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. NAVEGACIÓN TABS ---
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.admin-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetId = e.currentTarget.getAttribute('data-target');
            if(!targetId) return; // if it's the "Volver" link
            
            e.preventDefault();

            // Quitar active a todos
            navItems.forEach(nav => nav.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            // Agregar active al seleccionado
            e.currentTarget.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });


    // --- 2. RENDERIZADO DE PRODUCTOS DESDE BASE DE DATOS MOCK ---
    const products = window.productsDb || [];
    const productsTbody = document.querySelector('#admin-products-table tbody');

    if(productsTbody && products.length > 0) {
        productsTbody.innerHTML = '';
        products.forEach(product => {
            // Simulamos un stock aleatorio para visualización
            const stock = Math.floor(Math.random() * 100) + 10;
            const statusClass = stock > 20 ? 'active' : 'pending';
            const statusText = stock > 20 ? 'Disponible' : 'Bajo Stock';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>
                    <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; border-radius: 4px; object-fit: cover;">
                </td>
                <td style="font-weight: 500; color: var(--color-dark);">${product.name}</td>
                <td>${product.category}</td>
                <td>${stock} unds</td>
                <td><span class="status ${statusClass}">${statusText}</span></td>
                <td>
                    <button class="btn btn-outline" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;">Editar</button>
                </td>
            `;
            productsTbody.appendChild(tr);
        });
    }

});
