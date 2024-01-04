const MyProjects = () => {
  return (
    <section
      id="myProjects"
      className="bg-black px-4 xsm:px-7 py-5 xsm:py-6 md:grid md:grid-cols-[1fr_1fr] md:gap-8 2xl:gap-0"
    >
      <div className="2xl:mx-auto 3xl:pl-[2%]">
        <p className="text-[#8491A0] font-bold mb-1.5">MIS PROYECTOS</p>
        <h1 className="text-white text-3xl 3xl:text-5xl 2xl:max-w-[700px] font-bold mb-7 leading-7">
          Proyectos que he realizado el último año
        </h1>
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-appweather.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">
              App web del clima
            </h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">
              Reto: Usar una API sobre el clima global y mostrar el clima
              resultados según la ubicación del usuario, además de un input
              búsqueda, modo oscuro y cambiar el icono y el fondo de la imagen
              en relación con el tiempo indicado.
            </p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all">
                <a href="https://app-weather-three.vercel.app/" target="_blank">
                  Ver ahora
                </a>
              </button>
            </div>
          </div>
        </article>
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-pokedex.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">
              Pokédex
            </h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">
              Reto: Renderizado de cartas desde una API de Pokémon, con búsqueda
              input por nombre, select para tipos y visualización en color de
              acuerdo con el tipo de pokemon, así como rutas para los detalles
              de cada pokemon.
            </p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all">
                <a
                  href="https://pokedex-app-web-omega.vercel.app/"
                  target="_blank"
                >
                  Ver ahora
                </a>
              </button>
            </div>
          </div>
        </article>
      </div>
      <div className="2xl:mx-auto 3xl:pr-[2%]">
        <article className="bg-[#181823] mb-6 2xl:w-[700px]">
          <img src="/picture-projects/screen-eCommerce.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">
              E - Commerce
            </h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">
              Reto: Realizar las funcionalidades, agregar al carrito, desmarcar
              y comprar. Y persistencia en el almacenamiento local de elementos
              añadidos.
            </p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all">
                <a
                  href="https://e-commerce-jet-two.vercel.app/"
                  target="_blank"
                >
                  Ver ahora
                </a>
              </button>
            </div>
          </div>
        </article>
        <article className="bg-[#181823] mb-8 3xl:mb-14 2xl:w-[700px]">
          <img src="/picture-projects/screen-fortunecookies.png" alt="" />
          <div className="px-3 3xl:px-6 py-5 3xl:py-8">
            <h3 className="text-white font-semibold text-xl 3xl:text-2xl mb-2">
              Galletas de la fortuna
            </h3>
            <p className="text-[#8491A0] 3xl:text-lg mb-3">
              Reto: Renderizar frases y diseños aleatorios, manteniendo la
              relación de pertenencia de las frases a sus respectivas fuentes.
            </p>
            <div className="flex justify-end">
              <button className="text-white 3xl:text-lg border-[#5221E6] border-b mx-3 py-1 hover:bg-[#5221E6] hover:mx-0 hover:px-3 hover:rounded-full transition-all">
                <a
                  href="https://galletas-fortuna-luck.vercel.app/"
                  target="_blank"
                >
                  Ver ahora
                </a>
              </button>
            </div>
          </div>
        </article>
        <div className="flex justify-center">
          <button className="text-white 3xl:font-medium hover:text-[#5221E6] px-5 py-3 border-[#5221E6] hover:bg-white hover:border-0 border transition-all">
            Ver todos los proyectos
          </button>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
