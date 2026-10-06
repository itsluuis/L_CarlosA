# Especificación de Diseño y Arquitectura: Landing Page Carlos Alberto

## 1. Resumen de Entendimiento
* **Cliente:** Carlos Alberto (Carlos Basilio), Arquitecto graduado en 2022 por la Universidad José Antonio Páez (San Diego, Valencia, Venezuela), residente actual en Madeira, Portugal.
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

## 4. Estructura de Secciones (Fiel al Wireframe de Referencia)

1. **Header / Navbar:** Logo `CARLOS ALBERTO · ARQ`, navegación con enlaces suaves, selector `PT | ES | EN`, y botón `Contactar`.
2. **Hero Section:** 
   - Columna izquierda: Badge de disciplina, Título de transformación, Subtítulo específico de cómo lo logra sin frases vacías, botón `Contactar`.
   - Columna derecha: Reproductor / Frame de vídeo cinemático arquitectónico con botón interactivo.
3. **Sección del Problema:** 
   - Titular empático con la sobrecarga de estudios y dudas constructivas.
   - 3 tarjetas con puntos de dolor concretos (cuellos de botella en planos ejecutivos, errores en obra por falta de rigor, desconexión entre diseño digital y piezas físicas).
   - Imagen arquitectónica técnica referente.
4. **Sección de la Solución y Servicios:** 
   - 3 bloques de servicio claros: Planimetría y Documentación Técnica, Modelado y Visualización Arquitectónica, y Prototipado Físico (Maquetas, Madera y Metal).
5. **Características & Rigor Personal (Bento Grid):**
   - Puntualidad estricta, atención a instrucciones, búsqueda de la solución óptima, dominio de software y herramientas de taller/hardware, vocación de servicio.
6. **Trayectoria & Credenciales (Timeline):**
   - 2022: Grado en Arquitectura (Universidad José Antonio Páez, Venezuela).
   - Madeira, Portugal: Centro de operaciones para clientes locales e internacionales.
   - Taller de Materialización: Trabajo con madera, pirograbado y corte de láminas de metal.
7. **Preguntas Frecuentes (FAQ Accordion):**
   - Resolución de dudas sobre trabajo a distancia, formatos de entrega, tipos de colaboración y presupuestos.
8. **Contacto Directo & Redes (Footer):**
   - Tarjeta personal con espacio reservado para la foto de Carlos.
   - Botón directo de correo y botón de copiar correo al portapapeles con toast de confirmación.
   - Enlaces directos a Instagram (`@carlosdbasilio`) y Facebook.
