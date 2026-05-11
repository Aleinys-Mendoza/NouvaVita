const products = [
    { id: 1, name: "Crema de Maní Clásica", category: "Línea Clásica", description: "100% natural, sin sal ni azúcar añadida. Perfecta para toda la familia.", image: "./assets/images/1000335744.jpg", badges: ["vegana", "Sin Gluten"] },
    { id: 2, name: "Crema de Almendras", category: "Línea Clásica", description: "Suavidad perfecta, un solo ingrediente para el mejor sabor y salud.", image: "./assets/images/1000335745.jpg", badges: ["Vegana", "Sin Gluten"] },
    { id: 3, name: "Crema de Marañón Tostado", category: "Línea Clásica", description: "Intensidad natural y cremosa, elaborada para resaltar su sabor real.", image: "./assets/images/1000335746.jpg", badges: ["Vegan", "Gluten Free"] },
    { id: 4, name: "Crema de Maní Crunchy", category: "Línea Clásica", description: "Con trozos reales de maní para una experiencia de más textura.", image: "./assets/images/1000335747.jpg", badges: ["Vegan", "Gluten Free"] },
    { id: 5, name: "Marañón con Arequipe", category: "Línea Arequipe", description: "Capas de cremosidad y dulzura natural sin azúcar añadida.", image: "./assets/images/1000335748.jpg", badges: ["Sugar Free", "Sin Gluten"] },
    { id: 6, name: "Almendra con Arequipe", category: "Línea Arequipe", description: "Mezcla equilibrada con arequipe sin azúcar, un postre saludable.", image: "./assets/images/1000335749.jpg", badges: ["Sugar Free", "Sin Gluten"] },
    { id: 7, name: "Marañón con Coco", category: "Línea Coco", description: "Fusión de cremosidad y la textura crocante del coco deshidratado.", image: "./assets/images/1000335750.jpg", badges: ["Vegan", "Sugar Free"] },
    { id: 8, name: "Almendra con Coco y Arequipe", category: "Línea Coco", description: "Un festín de sabores tropicales, totalmente libre de azúcar.", image: "./assets/images/1000335751.jpg", badges: ["sin azucar", "Sin Gluten"] },
    { id: 9, name: "Marañón, Avellana y Choco Blanco", category: "Línea Chocolate", description: "Dulzura suave y cremosa, totalmente vegana y deliciosa.", image: "./assets/images/1000335752.jpg", badges: ["Vegana", "Sin Azúcar"] },
    { id: 10, name: "Marañón, Avellana y Cacao", category: "Línea Chocolate", description: "Con chocolate oscuro endulzado con stevia. Perfecto contraste.", image: "./assets/images/1000335753.jpg", badges: ["Vegana", "Sin Azúcar"] },
    { id: 11, name: "Marañón con Café", category: "Línea Café", description: "Cremosidad perfecta fusionada con un intenso sabor a café.", image: "./assets/images/1000335754.jpg", badges: ["Vegan", "Sin Gluten"] },
    { id: 12, name: "Marañón, Café y Vainilla", category: "Línea Café", description: "La intensidad del café con la delicadeza sutil de la vainilla.", image: "./assets/images/1000335755.jpg", badges: ["Vegan", "Sin Gluten"] },
    { id: 13, name: "Marañón Sabor Mochaccino", category: "Línea Café", description: "Aroma profundo y toque tentador de chocolate sin azúcar.", image: "./assets/images/1000335756.jpg", badges: ["Vegan", "Sin Azúcar"] },
    { id: 14, name: "Crema de Pistacho", category: "Línea Premium", description: "Auténtico y profundo sabor a pistacho, 100% natural.", image: "./assets/images/1000335757.jpg", badges: ["Vegan", "Sin Gluten"] },
    { id: 15, name: "Crema de Macadamia", category: "Línea Premium", description: "Suavidad cautivadora y textura elegante para el paladar.", image: "./assets/images/1000335758.jpg", badges: ["Vegan", "Sin Gluten"] },
    { id: 16, name: "Marañón con Canela", category: "Línea Premium", description: "Se funde en el paladar con un toque cálido y altamente aromático.", image: "./assets/images/1000335759.jpg", badges: ["Vegan", "Sin Gluten"] }
];

// Export para usarse globalmente
window.productsDb = products;
