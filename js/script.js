const d = document,
    $container = d.querySelector(".container"),
    $frase = d.querySelector(".frase");

const frases = [
    "No basta con saber. La acción es lo que produce los resultados.",
    "Primero tienes que cuidarte a ti mismo. Sin salud perderás todo por lo que has trabajado.",
    "La práctica y la repetición logran el dominio.",
    "El trabajo duro y la consistencia siempre ganan al talento",
    "Evitar discusiones no es señal de debilidad. Es una señal de fortaleza e inteligencia.",
    "La felicidad es un viaje, no un destino. Vive hoy, pues ya no habrá otro día igual que éste.",
    "El que controla sus pensamientos, controla su mente. El que controla su mente, controla su vida.",
    "El único modo de mejorar mañana, es saber qué has hecho mal hoy.",
    "Céntrate en tu propósito, el universo se encargará de todo lo demás.",
    "No importa cuántas veces falles, lo que importa es cuánto estás dispuesto a aprender.",
    "Los humanos somos la mejor máquina de adaptación.",
    "Nunca sueltes tus sueños por problemas temporales, sigue luchando hasta lograrlo.",
    "Es imposible dar a un blanco que no puedes ver.",
    "La fatiga domina las vidas de quienes viven sin rumbo y sin sueños.",
    "La calidad de tus pensamientos, determina la calidad de tu vida.",
    "No importa lo que te ocurra en la vida, siempre tienes la capacidad de elegir tu reacción.",
    "Trabaja en silencio y deja que tu éxito haga ruido.",
    "Toma riesgos, si ganas serás más feliz y si pierdes serás más sabio.",
    "Para destacar debes hacer lo que los demás no están dispuestos a hacer.",
    "No permitas que el temor a lo desconocido apague tus aspiraciones y tu bienestar financiero.",
    "Si quieres ser rico, resuelve problemas. Los problemas son oportunidades para idear una solución.",
    "Tengo talento, soy inteligente y creativo.",
    "Doy gracias a Dios por el fortalecimiento de mi mente, cuerpo, economía y mis relaciones.",
    "Dispongo de suficiente tiempo, energía, sabiduría y dinero para conseguir todos mis deseos.",
    "Cada vez que le debes dinero a alguien, te conviertes en empleado de su dinero.",
    "Todo cambio duradero requiere tiempo y esfuerzo. La perseverancia es la madre del cambio personal.",
    "El secreto del éxito es la constancia en los propósitos.",
    "Los únicos límites son aquellos que tú mismo te pones.",
    "Si tú haces lo que realmente amas, estás destinado a sentir la máxima satisfacción.",
    "La vida no siempre te da lo que pides, pero sí te da lo que necesitas.",
    "La realidad solo es una interpretación de lo que nosotros creemos saber. La realidad es relativa.",
    "El ganador siempre está preparado para correr riesgos; el perdedor solo piensa en su seguridad y estabilidad.",
    "Los semáforos de la vida nunca van a estar todos en verde, toma acción con lo que sabes.",
    "La fe, es la certeza profunda de creer en algo, aunque no lo ves.",
    "No es ver para creer, es creer para ver",
    "El éxito exige tiempo, dedicación y sacrificio.",
    "Cualquier acto de bondad vuelve multiplicado por diez.",
    "Ponte grandes metas, pero no ates tu felicidad a tus metas. Sé feliz ahora.",
    "No debemos hacer cosas para poder ser felices. Debemos ser felices para poder hacer cosas.",
    "La felicidad estimula el rendimiento.",
    "Para ser feliz, haz felices a los demás. Dar es el camino para conseguirlo.",
    "Siempre tendré las más hermosas e increíbles experiencias humanas.",
    "Siempre estaré aprendiendo y creciendo.",
    "El dinero es una herramienta que trae paz, tranquilidad y comodidad en la vida.",
    "Lo que no se mide, no se puede mejorar.",
    "Cuando un ser humano tiene un porqué vivir, encuentra un cómo hacerlo.",
    "No son tus condiciones, sino tus decisiones lo que determinan tus resultados.",
    "Si quieres triunfar en la vida, jamás busques la aprobación de la gente.",
    "Para que tengas lo que nunca has tenido, tendrás que hacer lo que nunca has hecho.",
    "Sé sumamente humilde en el aprendizaje, aprende a escuchar.",
    "El dinero y el tiempo son atajos para lograr resultados más rápidos.",
    "El dinero te da acceso a mejores experiencias en cualquier ámbito; en educación, salud, ocio, etc.",
    "El dinero simplemente es un potenciador de lo que ya eres.",
    "Si no puedes explicar algo de forma sencilla, es que ni tú mismo no lo entiendes bien.",
    "Sólo actuando podrás empezar a desarrollar la confianza. cuanto más te expongas a tus temores más seguro de ti mismo te sentirás.",
    "Tus activos más valiosos son el tiempo y la mente; no lo desperdicies, sácale provecho.",
    "Nunca lamentes el dinero que gastas en tu propia educación.",
    "Si tienes miedo a equivocarte, tienes miedo a crecer.",
    "Si estás dispuesto a equivocarte, tendrás éxito, riqueza y libertad.",
    "Cuando recibes dinero: gracias por llegar a mi vida, te honro. cuando pagas dinero: así como vas, te espero de vuelta, pero multiplicado.",
    "Nunca vas a estar listo, pero si comienzas puedes mejorar.",
    "Todo aquello que vale la pena, demanda tiempo y esfuerzo.",
    "El sacrificio de hoy se convierte en el éxito de mañana.",
    "El éxito no es algo que persigues, es algo que tú atraes.",
    "Si realmente quieres salir adelante, necesitas conservar tu empleo durante el día y comenzar un negocio de medio tiempo.",
    "El error más grande que comete la gente, es que trabaja muy duro por su dinero.",
    "Cuando tengo tiempo me capacito, o me capacito para tener más tiempo. tú decides.",
    "Si estás dispuesto a invertir tiempo en formarte, aprender y practicar; entonces obtendrás los resultados que quieres.",
    "¿Estás dispuesto a pagar el precio, para obtener los resultados que quieres?",
    "Si piensas que puedes o no puedes. en cualquier caso, estás en lo correcto.",
    "Si de verdad estás comprometido, motivado y quieres resultados, sacas el tiempo de donde sea.",
    "Los errores son la manera en que dios te habla. despierta, presta atención. hay algo que necesito que aprendas.",
    "Trabaje en desarrollar habilidades de alto valor, si quiere amasar fortuna.",
    "Si quieres lograr todo lo que te propongas lo primero que debes hacer es empezar a creer en ti, solo así cualquier cosa será posible.",
    "La educación financiera te da la maravillosa oportunidad de ser autónomo.",
    "Primero construye activos, para que luego estos paguen tu estilo de vida.",
    "Nunca saques crédito para comprar un pasivo.",
    "A cuantas más personas impactes, más dinero ganarás.",
    "Si quieres duplicar tus ingresos, triplica tu aprendizaje.",
    "Aprender, mejorar y crecer.",
    "Si tienes constancia y consistencia vas a poder lograr muchas más cosas que si tienes talento.",
    "Si realmente quieres hacer algo, encontraras un modo. si no encontraras una excusa.",
    "El éxito consiste en hacer cosas ordinarias de manera extraordinaria.",
    "El tiempo es más valioso que el dinero, puedes obtener más dinero, pero no más tiempo.",
    "Insiste, persiste, ajusta y vuelve a intentar.",
    "Planificación sin acción, no sirve de nada.",
    "Tus pensamientos pueden cambiar tu vida, pero solo si logras concretar con acciones.",
    "Cuando uno entiende la mecánica de los que está haciendo, los tiempos se van acortando, vamos mejorando y siendo más productivo.",
    "El registro de gastos es la columna vertebral de una finanza saludable.",
    "Los problemas del dinero se solucionan con estrategia y educación financiera.",
    "Tú eres la causa, la acción y el resultado.",
    "Todo lo que comienza en ti, termina en ti.",
    "No se trata de cuanto lees, sino de cuanto aplicas.",
    "Ser experto requiere: leer, practicar y constancia.",
    "Nunca dejes de trabajar en ti, eres tu proyecto más grande.",
    "Enfócate en fortalecer tus virtudes, luego busca personas que cubran tus vacíos.",
    "Tu capacidad para resolver problemas, es tu capacidad para generar dinero.",
    "Lo único que define tu éxito, son tus resultados.",
    "A un empresario no le importa donde pone el negocio.",
    "Tienes que invertir tiempo y dinero para adquirir conocimiento.",
    "Es imposible sentir miedo, cuando tu estás haciendo lo que realmente quieres.",
    "Nadie nace sabiendo, desarrollamos el conocimiento y la habilidad.",
    "No te compares con nadie, solo asegúrate ser mejor cada día.",
    "No pidas circunstancias diferentes, nada es fácil.",
    "Mas importante que el monto, es el hábito.",
    "Eres lo que haces, no lo que dices que harás.",
    "Saber y no hacer, es peor que no saber.",
    "Querer no es poder, saber es poder.",
    "No hay fracaso, solo aprendizaje, perder es parte de ganar.",
    "Todo lo que eres capaz de creer, la mente lo puede realizar.",
    "Empieza actuando y terminarás creyendo.",
    "Trata a los demás como te gustaría ser tratado.",
    "Si tu no cambias, la vida te cambia.",
    "Soy un agradecido constante, pero un inconforme permanente.",
    "Nunca hay un buen momento para iniciar, es ¡ahora!",
    "La gente exitosa, siempre está dispuesto a mejorar.",
    "La mejor manera de aprender es enseñando.",
    "Riqueza, tiempo bien aprovechado; pobreza, tiempo malgastado.",
    "Donde fijas tu atención se multiplica.",
    "Dios no te da lo que quieres, te da lo que necesitas aprender.",
    "El éxito es simplemente la aplicación diaria de la disciplina.",
    "Tus sacrificios en privado, serán tus recompensas en público.",
    "Siempre puedes empezar de nuevo eres suficiente.",
    "Crea en usted, invierta en usted y nunca dude de usted.",
    "El éxito comienza cuando sales de tu zona de confort.",
    "Jamás te rindas de algo que quieres de verdad, es difícil esperar, pero peor es arrepentirse.",
    "Cuando el conocimiento crece, la oportunidad aparece.",
    "No es que tengamos poco tiempo. Es que perdemos mucho.",
    "La paciencia es amarga, pero sus frutos son dulces.",
    "No hablar mal de nadie, es la mejor forma de hablar bien de ti.",
    "El éxito consiste en ir de fracaso en fracaso sin perder el entusiasmo.",
    "Para duplicar tus ingresos, triplica tu ritmo de aprendizaje.",
    "Si no cambias, todo se repite.",
    "Si no sabes dónde vas, poco importa el camino que tomes.",
    "Siempre seamos esencia, nunca apariencia, eso hace la diferencia.",
    "Si solo haces lo que ya sabes hacer, no vas a llegar a ser más de lo que eres hoy.",
    "No es la velocidad, es la constancia y la determinación hacia el propósito.",
    "No importa lo lento que vayas, mientras no te detengas, todo estará a tu favor.",
    "Tu no vales por tu título, tu vales por lo que eres capaz de hacer con lo que sabes.",
    "Lo malo no es el miedo, lo malo es quedarte asustado.",
    "Nunca te rindas, porque no sabes si la próxima vez que lo intentes funcionará.",
    "Si quieres algo, ve por ello; lo único que cae del cielo es la lluvia.",
    "Si dejas que tus miedos se apoderen de ti, estás destinado a fracasar.",
    "La gratitud es la puerta de enlace hacia la abundancia.",
    "Hasta que no cambies tu forma de pensar, sentir y actuar; seguirás repitiendo las mismas experiencias.",
    "Bájale el volumen al miedo y escucharás lo que Dios te quiere decir.",
    "Nunca seas prisionero de tu pasado, sino arquitecto de tu futuro.",
    "No importa que tantos recursos tengas, si no sabes utilizarlo, no vas a lograr nada.",
    "La emoción de ganar debe ser mayor al miedo de perder.",
    "Las personas exitosas no están dotados, simplemente trabajan duro y tienen éxito a propósito.",
    "Esforzarse duelo, pero quedarse sentado viendo como otros triunfan y tu no, duele más.",
    "Manténgalo privado, hasta que sea permanente.",
    "Acostúmbrate a ganar en silencio y que el mundo piense que vas perdiendo.",
    "Depende de ti vivir como oveja o luchar como un león.",
    "Tu naciste para un propósito mucho más grande que ir a trabajar, pagar cuentas y morir.",
    "Practica como si nunca hubieras ganado y actúa como si nunca hubieras perdido.",
    "El fracaso es una gran oportunidad para empezar otra vez con más inteligencia.",
    "Ningún mar en calma hizo experto a un marinero.",
    "Se acabó la sequía, desde hoy comienzo a cosechar victorias.",
    "Un salario es una droga que te dan para que te olvides de tus sueños.",
    "Tu tiempo es cada vez más valioso porque te queda menos.",
    "De nada te sirve aprender mucho y aplicar poco.",
    "Dentro de poco todo tu trabajo rendirá frutos, simplemente no te rindas.",
    "El deseo de enriquecerse rápidamente es bastante peligroso.",
    "Vete a la cama más inteligente que cuando despertaste.",
    "Somos lo que hacemos, no lo que pensamos ni lo que sentimos.",
    "Si quieres rodearte de gente potente, tienes que ser también esa persona.",
    "Ganar, mantener y multiplicar para lograr libertad financiera.",
    "Para ganar más, hay que valer más. Y para valer más, hay que aprender más.",
    "Come bien, lee libros, estudia por ti mismo, expande tu mente, haz las cosas mejor y sé mejor.",
    "Si no encuentras una forma de ganar dinero mientras duermes, trabajarás hasta la muerte.",
    "Trabaja, ahorra, invierte y repite",
    "Aquellos que no se arriesgan, no sufrirán derrotas, pero tampoco tendrán victorias.",
    "No busques excusas, buscar alternativas.",
    "Tus ingresos solo pueden crecer en la medida que los haces tú.",
    "Nunca dependas de una sola fuente de ingreso, invierte para crear una segunda.",
    "La meta es mejor que ayer, no mejor que nadie.",
    "El que trabaja todo el día, no tiene tiempo para ganar dinero.",
    "Gana siempre el doble o más de lo que gastas.",
    "La humildad es la clave del crecimiento.",
    "Puede que no todos los días sean buenos, pero siempre hay algo bueno cada día.",
    "Las personas exitosas creen en sí mismas, especialmente cuando otros no lo hacen.",
    "La inteligencia no solo es conocimiento, sino también la destreza de aplicar los conocimientos a la práctica.",
    "La búsqueda de la mejora continua es algo a lo que no podemos renunciar.",
    "Si naces pobre no es tu culpa, pero, si mueres pobre si es tu culpa.",
    "Las oportunidades se crean a través del conocimiento.",
    "Los errores tienen el propósito de hacernos mejores, no personas más amargadas ni frustradas.",
    "La mejor manera de atraer tu éxito es disfrutando de todo lo que ya alcanzaste.",
    "Cuando estés perdiendo tiempo, recuerda que alguien está esperando que ayudes con más dinero en tu casa.",
    "Nacimos para vivir en abundancia, porque todo lo bueno es infinito.",
    "Lo que sucede viene a darte la oportunidad de evolucionar."
];

const getColor = () => {
    let rgb, r, g, b;
    r = Math.floor(Math.random() * 255);
    g = Math.floor(Math.random() * 255);
    b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

const changeColor = setInterval(() => {
    $container.style.background = getColor();
}, 5000);

const getFrase = () => {
    let index = Math.floor(Math.random() * (frases.length - 1)),
        frase = frases[index];
    $frase.textContent = frase;
}

const changeFrase = setInterval(() => {
    getFrase();
}, 10000);







