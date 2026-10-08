# Especificación de Diseño y Arquitectura: Landing Page Carlos Alberto de Basilio

## 1. Resumen de Entendimiento
* **Cliente:** Carlos Alberto de Basilio (Carlos Basilio), Arquitecto graduado en 2022 por la Universidad José Antonio Páez (San Diego, Valencia, Venezuela), residente actual en Madeira, Portugal.
* **Propósito:** Posicionarlo como un socio técnico de máxima precisión y ejecutor tangible tanto para estudios de arquitectura y constructoras como para clientes particulares exigentes.
* **Público Objetivo:**
  1. Estudios de arquitectura y constructoras que requieren externalizar dibujo técnico CAD/BIM, modelado arquitectónico y maquetas físicas.
  2. Clientes particulares que buscan desarrollo de proyectos espaciales, remodelaciones y piezas artesanales/arquitectónicas personalizadas.
* **Propuesta de Valor Central:** "Precisión digital y materialización tangible: de la idea conceptual al modelo exacto, planos ejecutivos y prototipado físico en madera y metal".

---

## 2. Registro de Decisiones (Decision Log)

| Decisión | Alternativas Evaluadas | Motivo de Elección |
| :--- | :--- | :--- |
| **Arquitectura de Software** | Vite/React, Astro, Vanilla Modern | **Vanilla Modern (HTML5 + CSS Tokens + JS)**: Cero dependencias frágiles, carga instantánea (<0.5s), 60fps, fácil despliegue y máxima fidelidad estética sin sobrecarga técnica. |
| **Enfoque de Medios** | WebGL / 3D Canvas interactivo | **Solo imágenes y vídeos de alta fidelidad**: Eliminación estricta de librerías 3D pesadas en el navegador, optimizando rendimiento y cumpliendo la restricción del cliente. |
| **Internacionalización (i18n)** | Dependencia de Google Translate, páginas separadas | **Módulo i18n nativo en cliente (PT por defecto, ES, EN)**: Traducciones perfectas y humanas sin que el traductor automático arruine la redacción técnica. Detección automática de idioma del navegador. |
| **Interacción de Contacto** | Formulario con múltiples campos de texto | **Acceso directo simplificado**: Eliminación de fricción. Botón de envío directo (`mailto:`), botón de un clic para copiar correo con notificación visual instantánea, enlaces directos a Instagram y Facebook, y espacio reservado para su fotografía. |
| **Llamada a la Acción (CTA)** | Textos largos ("Agendar Consulta", "Empezar Proyecto") | **"Contactar"**: Claridad y simplicidad absoluta en todos los idiomas (PT: *Contactar*, ES: *Contactar*, EN: *Contact*). |

---

## 3. Paleta Cromática y Sistema Visual

* **Base Travertino / Lino Cálido:** `#FAF7F2` (fondo principal), `#F3ECE2` (secciones alternas).
* **Superficies de Tarjeta:** `#FFFFFF` con micro-bordes en `#E8E1D7` y sombras tenues difusas.
* **Marrón Nogal / Espresso Profundo:** `#28201A` (texto de alto contraste, titulares y botones primarios).
* **Bronce / Ocre Tierra:** `#8C6339` y `#A47746` (acentos arquitectónicos, badges y líneas técnicas).
* **Tipografía:**
  * Editorial: *Italiana* / *Cinzel* (elegancia clásica arquitectónica y contemporánea).
  * Lectura & Técnica: *Plus Jakarta Sans* (precisión, geometría limpia y legibilidad total en pantallas).

---

## 4. Estructura de Secciones (Flujo Narrativo Optimizado)

1. **Header / Navbar:** Logo `CARLOS ALBERTO DE BASILIO · ARQ`, navegación con enlaces suaves (`O Problema`, `Serviços`, `Trabalhos`, `Metodologia`, `Trajetória`, `Dúvidas`), selector `PT | ES | EN`, y botón `Contactar`.
2. **Hero Section:** 
   - Columna izquierda: Título de transformación, subtítulo específico, botón `Contactar`.
   - Columna derecha: Reproductor / Frame de vídeo cinemático con botón interactivo que desaparece al reproducir.
3. **Sección del Problema:** 
   - Titular empático centrado y de amplio ancho.
   - 3 tarjetas con puntos de dolor concretos y encuadre visual técnico.
4. **Sección de la Solución y Servicios:** 
   - 3 ejes de servicio claros (Supervisão de Obras, Modelação 3D & Figuras, Prototipado Físico & Oficina).
   - Botón unificado y armónico de contacto.
   - Vitrina Bento de maquetas y carpintería con altura simétrica y concentricidad.
5. **Sección de Trabajos & Planimetría Técnica (NUEVA):**
   - Slider interactivo con 12 pranchas ejecutivas originales de su proyecto de grado ("Centro Cultural Artístico de Valencia").
   - Categorías filtrables: Arquitectura (A-1 a A-4, A-8), Fachadas & Cortes (A-5 a A-7), Detalles Constructivos & Tridilosa (A-9, A-10), Estructuras & Fundaciones (E-1, E-2).
   - Lightbox modal interactivo a pantalla completa con navegación por teclado y táctil.
   - Cuadro resumen de especificaciones técnicas (2.265 m², 3 niveles, software y rigor).
6. **Metodología & Rigor Técnico:**
   - 4 pilares: Puntualidad estricta, atención a instrucciones, búsqueda de la solución óptima, dominio de software y herramientas de taller.
7. **Trayectoria & Credenciales (Timeline):**
   - 2022: Grado en Arquitectura (Universidad José Antonio Páez, Venezuela).
   - Hoy: Supervisión de obras y modelado técnico en Madeira, Portugal.
   - Oficio: Taller de materialización física, madera, pirograbado y metal.
8. **Preguntas Frecuentes (FAQ Accordion):**
   - Resolución de dudas sobre servicios técnicos autorizados, flujo remoto, formatos y reuniones.
9. **Contacto Directo & Redes:**
   - Tarjeta personal con la fotografía profesional de Carlos Alberto de Basilio.
   - Botón directo de correo y botón de copiar correo al portapapeles con toast Sonner.
   - Enlaces directos a Instagram y Facebook.
10. **Pie de Página & Modal de Privacidad:**
    - Identidad, contactos y copyright `© 2026 Carlos Alberto de Basilio`.
    - Modal accesible de política de privacidad sin sección invasiva.
