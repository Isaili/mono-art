# Nudity, Smoke, and Passion: The Sublime Aberration

![Barroco](https://img.shields.io/badge/estilo-barroco-6b2d1b?style=flat-square)
![Claroscuro](https://img.shields.io/badge/luz-claroscuro-211a10?style=flat-square)
![Gooey reveal](https://img.shields.io/badge/efecto-gooey%20reveal-80523b?style=flat-square)
![React](https://img.shields.io/badge/React-19-a5906c?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-533f2d?style=flat-square&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-4-4c4436?style=flat-square&logo=tailwindcss&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-3-332012?style=flat-square&logo=greensock&logoColor=white)

![](https://placehold.co/110x24/16140d/16140d.png)![](https://placehold.co/110x24/332012/332012.png)![](https://placehold.co/110x24/6b2d1b/6b2d1b.png)![](https://placehold.co/110x24/80523b/80523b.png)![](https://placehold.co/110x24/745c40/745c40.png)![](https://placehold.co/110x24/a5906c/a5906c.png)![](https://placehold.co/110x24/d9baa0/d9baa0.png)![](https://placehold.co/110x24/f1eee6/f1eee6.png)

Una página editorial de una sola pantalla con scroll, inspirada en la pintura barroca y en la tradición de los viejos maestros. Alterna pinturas a pantalla completa con bloques de texto que aparecen con un efecto **gooey text reveal**: cada línea pasa de borrosa a nítida, como si saliera del humo.

La idea es recorrer la página como si fuera una sala de museo: primero la obra, luego el texto que la interpreta.

## De qué trata

El texto habla del **desnudo barroco** y de la pintura como un instante congelado:

- **Cuerpo y luz.** Músculos tensos en la sombra y piel expuesta "al juicio de la luz". El desnudo deja de ser sereno y se vuelve furia contenida.
- **Humo y caos.** Un humo etéreo envuelve el conflicto y atrapa rostros con gestos de sorpresa y shock.
- **Melancolía.** En el centro, una mirada cargada de melancolía se hunde en una "derrota divina", rodeada de gestos convulsos y telajes encendidos.
- **El tiempo suspendido.** Las pinturas "contienen la respiración": el vino que nunca se derrama, la nota que nunca termina de sonar, la mirada fija en la misma puerta desde 1628. Cada cuadro es un segundo que se niega a terminar.

La tesis de la página es que el caos puede ser bello: una *aberración sublime* donde la carne, la culpa y el misterio arden suspendidos en el lienzo.

## Recorrido de la página

| # | Sección | Contenido | Animación |
|---|---------|-----------|-----------|
| 1 | Portada | Título *Nudity, Smoke, and Passion: The Sublime Aberration* y botón **Scroll to reveal** | Aparece al cargar la página (`immediate`) |
| 2 | Pintura 1 | Escena mitológica con desnudos | — |
| 3 | Texto | Dos párrafos sobre el desnudo barroco y la melancolía, uno alineado a la izquierda y otro a la derecha | Se revela al entrar en vista (`scroll`) |
| 4 | Pintura 2 | Retrato de un torero fumando | — |
| 5 | Lista | *Ground Pigment · Falling Shadow · Warm Flesh · Suspended Gesture · Held Silence* | Ligada al scroll (`scrub`) |
| 6 | Pintura 3 | Escena de grupo en un interior | — |
| 7 | Texto | Párrafo sobre las pinturas que "contienen la respiración" | Ligada al scroll (`scrub`) |
| 8 | Pintura 4 | Anciano fumando una pipa larga | — |
| 9 | Cierre | **Step Closer** | Se revela al entrar en vista (`scroll`) |

Arriba hay una barra fija con el título y la indicación *Scroll inside*, en mono pequeño y con `mix-blend-difference`, para que se lea tanto sobre el fondo claro como sobre las pinturas.

## Estilo de las imágenes

Las cuatro imágenes (`public/gooey-text-reveal/img1.jpg` a `img4.jpg`) son recortes horizontales (2400×1350) de óleos de los viejos maestros. Ocupan toda la pantalla con `object-cover`, así que funcionan como pausas visuales entre los textos.

- **img1: escena mitológica.** Una composición llena de figuras, con desnudos musculosos y piel cálida bajo una luz intensa. Hay telas rojas, doradas y violetas en movimiento, un águila, un pavo real y un querubín. Es la imagen de la "furia" y la "pasión" del texto.
- **img2: torero fumando.** Retrato de perfil con pincelada suelta y empastada. El traje de luces plateado brilla contra un fondo gris pardo, y una línea de humo sale del cigarro.
- **img3: reunión en un interior.** Una sala con paneles de madera, figuras con gorgueras blancas, sedas brillantes, instrumentos (viola, laúd) y una mesa con platería. Paleta de ocres y grises, en el estilo de las "alegres compañías" de la pintura neerlandesa.
- **img4: anciano con pipa.** Claroscuro marcado: una camisa blanca agrietada por el tiempo y una barba gris salen de un fondo casi negro. La brasa roja de la pipa es el único punto de color intenso.

### Paleta de las pinturas

Colores dominantes de cada imagen, de más a menos presente:

| Pintura | Colores |
|---------|---------|
| img1 · mitológica | ![](https://placehold.co/28x28/332012/332012.png) ![](https://placehold.co/28x28/80523b/80523b.png) ![](https://placehold.co/28x28/6b2d1b/6b2d1b.png) ![](https://placehold.co/28x28/b2886b/b2886b.png) ![](https://placehold.co/28x28/d9baa0/d9baa0.png) |
| img2 · torero | ![](https://placehold.co/28x28/4c4436/4c4436.png) ![](https://placehold.co/28x28/231d18/231d18.png) ![](https://placehold.co/28x28/392c22/392c22.png) ![](https://placehold.co/28x28/595040/595040.png) ![](https://placehold.co/28x28/82725f/82725f.png) |
| img3 · interior | ![](https://placehold.co/28x28/533f2d/533f2d.png) ![](https://placehold.co/28x28/5e4c37/5e4c37.png) ![](https://placehold.co/28x28/33281f/33281f.png) ![](https://placehold.co/28x28/745c40/745c40.png) ![](https://placehold.co/28x28/ad9069/ad9069.png) |
| img4 · anciano | ![](https://placehold.co/28x28/211a10/211a10.png) ![](https://placehold.co/28x28/a5906c/a5906c.png) ![](https://placehold.co/28x28/573d24/573d24.png) ![](https://placehold.co/28x28/16140d/16140d.png) ![](https://placehold.co/28x28/2c1d10/2c1d10.png) |

Lo que tienen en común:

- **Claroscuro.** Luz dirigida y sombras profundas.
- **Paleta cálida y terrosa.** Pigmentos de tierra, carnes cálidas y acentos de rojo.
- **Humo y gesto.** Tres de las cuatro obras muestran humo o un gesto detenido a medias, igual que el texto.
- **Textura de lienzo.** Se ven el craquelado y la pincelada, sin retoques que los alisen.

## Estilo de los títulos y la tipografía

- **Fuente display:** *De Fonte Plus* (`public/gooey-text-reveal/de-fonte-plus.ttf`), cargada como `"Gooey Reveal Display"` con peso 800 y Georgia como respaldo. Es una serif pesada y expresiva que recuerda a los carteles y catálogos de arte clásicos.
- **Tamaños fluidos con `clamp()`:**
  - Portada: `clamp(3.25rem, 9vw, 7rem)`
  - Cierre *Step Closer*: `clamp(3.5rem, 10vw, 8rem)`
  - Lista: `clamp(2.8rem, 8vw, 6.5rem)`
  - Párrafos: `clamp(2.2rem, 6vw, 5.5rem)`
- **Composición apretada:** interlineado de 0.88 a 0.94 y tracking negativo (de `-0.035em` a `-0.045em`), así que los títulos se leen como bloques compactos.
- **Texto secundario:** mono en mayúsculas de 9px con tracking amplio (`0.25em`), como una etiqueta de museo.
- **Colores de la interfaz:**

| Muestra | Uso | Hex |
|---------|-----|-----|
| ![](https://placehold.co/28x28/f6f6f3/f6f6f3.png) | Fondo, modo claro | `#f6f6f3` |
| ![](https://placehold.co/28x28/1a1a18/1a1a18.png) | Texto, modo claro | `#1a1a18` |
| ![](https://placehold.co/28x28/10100f/10100f.png) | Fondo, modo oscuro | `#10100f` |
| ![](https://placehold.co/28x28/f1eee6/f1eee6.png) | Texto, modo oscuro | `#f1eee6` |
| ![](https://placehold.co/28x28/181816/181816.png) | Fondo de las pinturas mientras cargan | `#181816` |

## El efecto gooey text reveal

El componente [`GooeyTextReveal`](src/components/ui/gooey-text-reveal.jsx) usa GSAP (`SplitText` + `ScrollTrigger`). Divide el texto en líneas y anima su desenfoque hasta dejarlo nítido, con lo que se consigue un aspecto "gelatinoso", como de tinta o humo que se condensa.

Tiene tres modos:

- `immediate`: se anima al montar el componente (la portada).
- `scroll`: se anima una vez cuando el bloque entra en vista.
- `scrub`: la animación sigue la posición del scroll.

Las props principales son `duration`, `stagger`, `blurAmount`, `start`, `end` y `scroller`.

## Dónde editar

- **Textos:** [src/features/gooey-text-reveal/GooeyTextRevealFeature.jsx](src/features/gooey-text-reveal/GooeyTextRevealFeature.jsx). Cada `<h2>`/`<h3>` dentro de un `<GooeyTextReveal>` se anima como un bloque aparte.
- **Imágenes y textos alternativos:** el arreglo `paintings` al inicio del mismo archivo.
- **Fuente:** [src/features/gooey-text-reveal/gooey-text-reveal.css](src/features/gooey-text-reveal/gooey-text-reveal.css).

## Stack

React 19, Vite, Tailwind CSS 4, GSAP (con `@gsap/react`) y lucide-react.

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # oxlint
```
