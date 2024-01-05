const PhilosophyAndValues = () => {
  return (
    <div id="aboutMe" className="sm:grid sm:grid-cols-[1fr_1fr]">
      <div className="bg-[#FFF3E4] px-4 xsm:px-7 xl:px-12 3xl:px-20 py-10 lg:py-16 grid gap-5 sm:block">
        <p className="text-3xl 3xl:text-5xl font-bold text-[#181823] sm:mb-6 3xl:mb-10">
          Filosofía y valores
        </p>
        <p className="text-[#5B6876] text-base 3xl:text-2xl">
          En el fondo, creo que todos anhelamos las mismas cosas: una conexión
          con la humanidad, una paz con lo metafísico y una experiencia
          auténtica del universo. Estos anhelos los busco y vivo a través de mis
          valores: la autenticidad, la creatividad y la hospitalidad.
        </p>
        <a className="block mt-8 lg:mt-16 3xl:" href="https://www.linkedin.com/in/rajhu-acosta-developerweb-full-stack">
          <span className="pb-1 border-b-2 border-[#89949f] hover:border-0 hover:text-[#89949f] font-medium 3xl:text-2xl">
            <a
              href="https://www.linkedin.com/in/rajhu-acosta--066976253"
              target="_blank"
            >
              Revisa mi Linkedin
            </a>
          </span>
        </a>
      </div>
      <picture>
        <img
          className="sm:h-full"
          src="/pr.jpeg"
          alt="programadores trabajando juntos"
        />
      </picture>
    </div>
  );
};

export default PhilosophyAndValues;
