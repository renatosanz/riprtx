---
layout: ../../layouts/BlogLayout.astro
title: "Interstellar Origami"
author: "Renato Sanchez"
tags: ["Origami","Space","Art","In Progress"]
date: 2024-06-13
---

## ¿Que relacion hay entre el espacio y el origami?

Este y otros temas seran discutidos y analizados en este blog. 

El **origami**[^1] por un lado nos presta la posibilidad de convertir un objeto de 2 dimensiones en uno de 3 dimensiones por medio de plegados y moldeaciones. De un punto matematico se veria como una funcion del tipo $R^2 \Rightarrow R^3$.

EL **espacio interestelar**[^2] es intrigante por lo que fue, es y sera en un futuro. Todas las formas que podemos observar en firmamento nocturno son el primer atractivo de los investigadores. Y ahi es donde inicia este blog, en el tratamiento de imagenes estelares para la extraccion de patrones de origami.  

## Busqueda de imagenes

Al buscar las imagenes cabe cuestinarse lo siguiente:

<details>
    <summary>¿Donde buscar?</summary>

>*[esahubble.org](https://esahubble.org/images/archive/category/stars/), [nasa-flickr](https://www.flickr.com/photos/nasawebbtelescope/albums/72177720305127361/with/53404881117), [webbtelescope.org](https://webbtelescope.org/images)*
</details>

<details>
    <summary>¿Que carateristicas deben tener las imagenes? </summary>
    
>*Deben ser imagenes con una alta nitidez sobre los cuerpos estelares, ya que generaremos con sus cordenadas el mapa de plegado que posteriormente trabajaremos con un editor 3d.*
</details>

Acontinuacion algunas de las imagenes con las que trabajaremos:


## Procesamiento de imagenes

Para la extraccion de los patrones de las imagenes usaremos `Python` con ayuda de la libreria `OpenCV` para el procesamiento y deteccion de los nodos dentro del grafo que representara a nuestro patron de plegado. 


>(Mantente en sintonia)

#### References 

- 10 things: Going interstellar - NASA Science. (s. f.). https://science.nasa.gov/solar-system/10-things-going-interstellar/ 
- colaboradores de Wikipedia. (2024, 23 mayo). Origami. Wikipedia, la Enciclopedia Libre. https://es.wikipedia.org/wiki/Origami
- information@eso.org. (s. f.). Image Archive: Stars. ESA/Hubble. https://esahubble.org/images/archive/category/stars/
- Telescope, N. J. W. S. (s. f.). Webb Images/Science 2023. Flickr. https://www.flickr.com/photos/nasawebbtelescope/albums/72177720305127361/with/53404881117
- Images. (s. f.). Webb. https://webbtelescope.org/images

#### Definitions

[^1]:El origami (折り紙?) o papiroflexia (del latín papȳrus, 'papel' y flexus, 'doblar') es un arte que consiste en el plegado de papel para obtener figuras de formas variadas, muchas de las cuales podrían considerarse como esculturas de papel.
[^2]:Interstellar space is often called the space between the stars, but more specifically, it’s the region between our Sun’s heliosphere and the astrospheres of other stars. (10 Things: Going Interstellar - NASA Science, s. f.)

