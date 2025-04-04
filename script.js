function mostrarDetalle(idProducto) {
    let productos = {
        "producto-1": {
            nombre: "Gimnasio para bebés",
            imagen: "JB2.jpeg",
            descripcion: "La alfombra de gimnasio proporciona un centro de actividad interactivo para bebés, con 5 sonajeros colgantes coloridos desmontables y elegante música de piano puede estimular las habilidades de coordinación sensorial y física del bebé dando patadas a los teclados o atrapando los juguetes. El puente del arco y el teclado se quitan fácilmente, la superficie lisa no tiene bordes, La alfombrilla se puede plegar fácilmente. El bebé puede jugar alrededor como tumbarse, sentarse y extenderse",
            precio: "$250.00"
        },
        "producto-2": {
            nombre: "Nenuco ¿Estás bien tapadito?",
            imagen: "JNA1.jpg",
            descripcion: "Controla la temperatura de Nenuco… Si Nenuco tiembla es porque tiene frío ¡Tenemos que hacer que entre en calor! por lo que deberás envolver a Nenuco con su mantita ponerle sus calcetines de bebé y la bolsita de agua caliente para que Nenuco esté aún más calentito. ¡Pero cuidado! porque si Nenuco está envuelto mucho tiempo ahora tendrá mucho calor y la frente se le pondrá rojita. ¡Tiene mucho calor! Ahora necesitas regular de nuevo su temperatura quitándole la ropita. ¡Juega una y otra vez a abrigarle hasta que se le ponga rojita la frente y a quitársela hasta que empiece a temblar! ¡Como si fuera un bebé de verdad!",
            precio: "$240.00"
        },
        "producto-3": {
            nombre: "Colección de hot wheels Cars",
            imagen: "JNO2.jpeg",
            descripcion: "Es una collección de carros de hot wheels diseñado en base a las peliculas de Cars, contiene 6 carritos.",
            precio: "$100.00"
        },
        "producto-4": {
        nombre: "Xilófono",
        imagen: "JB1.jpg",
        descripcion: "Las 8 coloridas teclas del Xilófono Clásico estimulan la creatividad musical temprana, ayudando a los pequeños a desarrollar un sentido de los logros. Y mientras sus habilidades musicales se desarrollan, los pequeños pueden seguir los colores ¡para crear una canción real! La baqueta no se desprende por lo que no se puede perder. ¡Y tiene ruedas para que los niños lo jalen y lleven la música adondequiera que vayan!",
        precio: "$100.00"
        },
        "producto-5": {
        nombre: "Caja registradora",
        imagen: "JMT.jpg",
        descripcion: "Incluye una caja registradora con teclado numérico, pantalla, micrófono y escáner de mano, junto con varios accesorios como un carrito de compras rosado lleno de alimentos de juguete (maíz, pimientos, zanahoria), botellas de kétchup y leche, una barra de mantequilla, monedas y billetes de juguete. Este set está diseñado para que los niños jueguen a ser cajeros en una tienda, fomentando el juego imaginativo y el aprendizaje de habilidades matemáticas.",
        precio: "$320.00"
        },
        "producto-6": {
            nombre: "Perrito ríe y aprende",
            imagen: "JB3.jpeg",
            descripcion: "Un peluche de perrito suave, colorido y con sonido, además esinteractivo y una forma de aprender para los bebés.",
            precio: "$200.00"
        },
        "producto-7": {
            nombre: "Fabater cubo intermitente",
            imagen: "JMT2.jpg",
            descripcion: "El cubo iluminado de la ruta de juego ofrece juegos divertidos y emocionantes de luz, memoria y cerebro. Este cubo intermitente evita un modo de juego, nuestro cubo de velocidad musical admite 7 modos de juego diferentes: atrápame, espectáculo de luces, sígueme, recuérdame, persígueme, modo multijugador, reproducir música. Cuando termines de jugar, presiona el botón LIGHT SHOW para disfrutar de una divertida exhibición de luces intermitentes.",
            precio: "$400.00"
        },
        "producto-8": {
            nombre: "Kit de maquillaje labable",
            imagen: "JNA2.jpg",
            descripcion: "Una maleta con diferentes cosmeticos labables y no son tóxicos, además está compuesto por dos compartimentos uno para las sombras y otro para las brochas, brillos y también contiene esmaltes.",
            precio: "$300.00"
        },
        "producto-9": {
            nombre: "Kit de cocina",
            imagen: "JNA3.jpg",
            descripcion: "Un kit de cocina armable con colores brillante, también trae 34 piezas de juguetes (juego de ollas, sartenes, utensilios y comida para jugar), además tiene sonidos reales y luces. ",
            precio: "$400.00"
        },
        "producto-10": {
            nombre: "Camión de dinosaurios",
            imagen: "JNO1.jpg",
            descripcion: "El camión de dinosaurios funciona como una unidad de almacenamiento, capaz de albergar cómodamente los seis mini coches de dinosaurios en dos cubiertas. Los mini coches de dinosaurio están diseñados con material de goma resistente al agua de alta calidad. Está equipado con piezas electrónicas y botones que simulan el arranque del motor, sirena, música y sonidos con temática de dinosaurios, junto con dos luces LED para estimulación visual.",
        
            precio: "$150.00"
        },
        "producto-11": {
            nombre: "Pista de hot wheels",
            imagen: "JNO3.jpg",
            descripcion: "El set de juego Racing Loops Tower de Little People Con más de 50 sonidos y melodías, un lanzador triple de vehículos, dos pistas de bucle de 360 grados de Hot Wheels, una pista en espiral y una rampa de acrobacias genial que envía los vehículos Wheelies a través de un anillo de “fuego”. Además, incluye paradas de “lavado” de vehículos, estación de servicio y mecánico para jugar más a la simulación",
            precio: "$355.00"
        },
        "producto-12": {
            nombre: "Juego de mesa Orbito",
            imagen: "JMT3.jpg",
            descripcion: "Orbito es un juego de mesa de estrategia para 2 jugadores divertido, rápido y fluido para toda la familia que es fácil de configurar y tiene reglas cortas y fáciles. Alinea 4 canicas de tu color para ganar, pero ten cuidado: en cada turno, todas las posiciones de mármol cambiarán en el tablero de juego cambiante.",
            precio: "$280.00"
        },
        "producto-13": {
            nombre: "Computador didáctica",
            imagen: "JNA4.jpg",
            descripcion: "La caja registradora de juguete cuenta con funciones de lógica y ofrece actividades disponibles en español e inglés. Incluye un mouse para facilitar la interacción y está recomendada para su uso desde los 3 hasta los 60 años, proporcionando entretenimiento y aprendizaje para diversas edades. El set cuenta con un total de 130 actividades que fomentan el desarrollo de habilidades matemáticas y el juego imaginativo.",
            precio: "$450.00"
        },
        "producto-14": {
            nombre: "Nenuco-¿Doctora comó está mi bebé",
            imagen: "JNA5.1.jpg",
            descripcion: "Nenuco-¿Doctora como esta mi bebé? Doctora, ¿cómo está mi bebé? Incluye un Nenuco recién nacido con nuevos accesorios y una incubadora con un Monitor New Born electrónico para cuidarlo. La incubadora es electrónica e incluye 3 tarjetas diferentes que son análisis diferentes con luces y sonidos de verdad. Accesorios: una pulsera de recién nacido, 3 análisis, una tijera de mezcla para bebés, una vacuna, un termómetro, una venda, un estetoscopio, un otoscopio y biberón. Nenuco es un muñeco de 35cm de cuerpo duro con ropa de recién nacido: gorro, guantes de bebé y pañal. Puede beber agua.",
            precio: "$490.00"
        },
        "producto-15": {
            nombre: "Casa de muñecas Barbie",
            imagen: "JNA6.1.jpg",
            descripcion: "Fiestas en la piscina, fiestas de pijamas con amigos, unión de hermanas, barbacoas en el patio trasero, cumpleaños, vacaciones y todos los días hay un sinfín de historias que contar y formas ilimitadas de explorar la vida en Barbie Dreamhouse porque con Barbie, todo es posible. Incluye Barbie Dreamhouse y 70 accesorios que incluyen muebles, artículos para el hogar y un cachorro; muñecas, modas y coche no incluidos. Los colores y las decoraciones pueden variar.",
            precio: "$480.00"
        },
        "producto-16": {
            nombre: "Set de sonajeros",
            imagen: "JB4.png",
            descripcion: "Es un encantador conjunto diseñado especialmente para bebés, ofreciendo diversión y estimulación sensorial. Cada sonajero presenta la forma de un adorable animal, como un osito, un elefante o un león, con colores vibrantes y texturas suaves que capturan la atención del bebé. Los sonidos suaves y relajantes ayudan a desarrollar habilidades auditivas, mientras que el diseño ergonómico facilita el agarre con manos pequeñitas. Fabricados con materiales seguros y duraderos, estos sonajeros son ideales para acompañar el juego y la exploración temprana de los más pequeños.",
            precio: "$240.00"
        },
        "producto-17": {
            nombre: "Andador interactivo",
            imagen: "JB5.jpg",
            descripcion: "Andador interactivo para bebés con forma de perrito, diseñado para acompañar los primeros pasos y el aprendizaje temprano. Su estructura cuenta con un asa ergonómica y ruedas grandes y coloridas que proporcionan estabilidad al caminar. El centro de actividades, ubicado en la parte frontal del perrito, incluye botones luminosos, formas geométricas, números y un libro interactivo, lo que estimula el desarrollo cognitivo y sensorial del bebé. Además, el juguete tiene sonidos, música y actividades manuales como una pelota giratoria y llaves colgantes, fomentando la coordinación motora y la curiosidad. Es un juguete educativo y divertido, perfecto para la etapa de los primeros pasos.",
            precio: "$340.00"
        },
        "producto-18": {
            nombre: "Elefante pianista",
            imagen: "JB6.png",
            descripcion: "Es un piano musical interactivo para bebés con diseño de elefante. Su estructura cuenta con teclas grandes y coloridas que emiten sonidos musicales al presionarlas, fomentando el desarrollo auditivo y la coordinación motora. El elefante tiene mejillas brillantes que se iluminan al ritmo de la música, lo que atrae la atención del bebé. Además, incorpora elementos interactivos adicionales, como una rueda giratoria con cuentas de colores y un pequeño libro en forma de hoja que se puede voltear, estimulando el juego sensorial y la curiosidad. Es un juguete perfecto para introducir a los pequeños en el mundo de la música de forma divertida y educativa.",
            precio: "$340.00"
        },
        "producto-19": {
            nombre: "Kit de construcción de coches deportivos",
            imagen: "JNO4.jpg",
            descripcion: "El kit de construcción BAKA Technic Cars con 1064 piezas es el regalo perfecto para niños y niñas que aman construir y crear. A los aspirantes a ingenieros y entusiastas del automóvil les encantará construir este modelo de automóvil súper genial. El modelo Cars cuenta con un fuerte chasis con un montón de pegatinas incluidas, por lo que es un excelente valor por el precio. Mide 14.7 pulgadas de largo x 5.5 pulgadas de ancho x 2.5 pulgadas de alto, este kit de construcción de súper coche es elegante y los mantiene ocupados durante horas.",
            precio: "$600.00"
        },
        "producto-20": {
            nombre: "Kit de construcción de coches deportivos",
            imagen: "JNO5.jpg",
            descripcion: "este kit de construcción Panda puede formar una de las tres formas de panda, adecuado para la experiencia arquitectónica de principiantes. Este es un juego de construcción Micro Mini Panda educativo y respetuoso con el medio ambiente, Animals Panda, que ejercita la capacidad práctica y la creatividad de los niños y cultiva su atención. Material de alta calidad: los Micro Building Blocks Panda están hechos de plástico ABS de alta calidad, con bordes de partículas lisos y sin rebabas, que se pueden ensamblar de manera segura y confiable. Mini Panda Animal Bricks Model es una colección y exhibición ideal para los amantes de los pandas. Micro Mini Panda Building está equipado con un manual de usuario detallado que explica los pasos para usar todo tipo de bloques de construcción. Juegos de construcción Micro Mini Panda Animales.",
            precio: "$655.00"
        },
        "producto-21": {
            nombre: "Moto eléctrica",
            imagen: "JNO6.jpg",
            descripcion: "Este divertido vehículo infantil alcanza una velocidad máxima de 5 km/h, ofreciendo una experiencia segura y emocionante para los más pequeños. Equipado con luces y sonidos, garantiza momentos de entretenimiento interactivo. Está diseñado para niños a partir de 3 años y viene con baterías incluidas, así como un práctico cargador para mantener la diversión en marcha. La duración de la batería puede variar según el uso que se le dé al producto, asegurando horas de juego dependiendo de la intensidad de la actividad.",
            precio: "$800.00"
        }
    };

    localStorage.setItem("productoSeleccionado", JSON.stringify(productos[idProducto]));

    window.location.href = "detalles.html";
}
