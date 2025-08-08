import assets from "@/assets/assets";
import GradientText from "@/components/GradientText.tsx";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center gap-9"
    >
      {/* My Pic */}
      <div
        className="w-[270px] h-[270px] bg-muted rounded-full overflow-hidden bg-cover bg-left"
        style={{ backgroundImage: "url('/me.jpeg')" }}
      >
        {/* <img src="/me.jpeg" alt="me" /> */}
      </div>

      {/* Hero text */}
      <h1 className="text-5xl font-extrabold text-center max-sm:text-4xl tracking-wide ">
        Hi 👋, I'm{" "}
        <GradientText
          text={"Bryan"}
          from={"from-yellow-300"}
          to={"to-orange-500"}
        />
        <br />A full-stack developer from Cameroon 🇨🇲️.
      </h1>

      <p className="text-muted-foreground text-center">
        Full-stack web developer with hands-on experience building modern,
        scalable applications using the MERN stack, React, Next.js, and Express.
        Skilled in building both frontend interfaces and backend APIs, with a
        strong focus on clean architecture, performance, scalability, and
        security.
      </p>

      <div>
        <a
          href="/AgweBryan_CV.pdf"
          download="AgweBryan_CV.pdf"
          className="border border-primary font-bold py-3 px-5 rounded-full hover:bg-primary hover:text-muted transition-all cursor-pointer"
        >
          Download CV
        </a>
      </div>

      {/*  skills  */}
      <div className="mt-20">
        <h3 className="text-center text-[20px] uppercase font-bold tracking-wide">
          <GradientText
            text={"Experienced With"}
            from={"from-gray-300"}
            to={"to-gray-500"}
          />
        </h3>
        <ul className="flex invert gap-6 mt-10 flex-wrap justify-center">
          <li>
            <img
              className="hover:opacity-90"
              src={assets.javascript}
              width={60}
              height={60}
              alt="Javascript icon"
              title="Javascript"
            />
          </li>
          <li>
            <img
              className="hover:opacity-90"
              src={assets.reactIcon}
              width={60}
              height={60}
              alt="react.js icon"
              title="React.js"
            />
          </li>
          <li>
            <img
              className="hover:opacity-90"
              src={assets.next}
              width={60}
              height={60}
              alt="next.js icon"
              title="Next.js"
            />
          </li>
          <li>
            <img
              className="hover:opacity-90"
              src={assets.typescript}
              width={60}
              height={60}
              alt="typescript icon"
              title="Typescript ❤️"
            />
          </li>
          <li>
            <img
              className="hover:opacity-90"
              src={assets.node}
              width={60}
              height={60}
              alt="node.js icon"
              title="Node.js"
            />
          </li>
          <li>
            <img
              className="hover:opacity-90"
              src={assets.express}
              width={60}
              height={60}
              alt="express.js icon"
              title="Express.js ❤️"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Home;
