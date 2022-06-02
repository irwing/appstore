# appstore

Este esun proyecto de práctica que consta de una micro tienda con carrito de compra que cuenta de dos interfaces la primera para listar los productos y la segunda el carrito de pago que simula el pago.

Se utilizó Next.js para el BackEnd y el FrontEnd, Formik para la validación de los datos, TypeORM como el ORM de conexión con la base de datos, MySQL para la persistencia de datos, Docker para preparar en el entorno de desarrollo de MySQL y Vercel para el despligue a producción.

### Funcionalidades requeridas
- API de productos con ordenamiento por nombre/precio
- API de productos en el carrito
- Interfaz para listado de productos con funcionalidad para agregar al carro
- Interfaz para ver el carrito de compras con formulario de pago validado
- Se propone un diseño básico

### Bonus
- React Context para mantener el estado global del carrito
- Diseño realizado con CSS puro
- Diseño un poco mas acabado y responsive
- Configuración eslint
- Configuración editorconfig
- Utilización de TypeScript
- Utilización de Docker
- Despliegue en producción con CI/CD autoconfigurado
- Despliegue de BD en RDS de AWS (si quiere trabajar con local puede usar el Docker descrito abajo)
- Función extra - banners en el home
- Función extra - botón cargar mas en el home
- Función extra - eliminar del carrito
- Validación cuando no hay datos en el listado o en el carrito

### Issues / Mejoras
- Agregar test unitarios a los componentes y al API
- Agregar SSR (Server Side Render) para mejorar el SEO
- Refactorizar el componente CartDetail porque quedó muy complejo

### Tiempo aproximado de trabajo

Tomando en cuenta que es una práctica y no se le aplico tiempo completo estoy muy conforme con el resultado obtenido con 12 horas de desarrollo y teniendo en cuenta que no tenía experiencia en el desarrollo con Next.js, ni TypeScript, ni TypeORM, ni Formik. Pero con lectura de la documentación y las bases de ya obtenidas en otras tecnologías se logró completar las tareas.

### Instalación de MySQL con Docker

***Build and run image***
```sh
sh ./MySQL/run.sh
```

### Despligue a producción

Se realizó una configuración de despligue continuo en la siguiente url https://appstore-irwing.vercel.app en servicios de Vercel y la base de datos se instanció en un servicio gratuito de Amazon Web Serices. Para que la aplicación quedará funcional en internet.

Dev with ❤️ by Irwing Naranjo
