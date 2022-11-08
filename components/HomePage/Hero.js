import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/leo.png"
          alt="Image showing Leo"
          width={292}
          height={292}
        />
      </div>

      <h1>Hi, I'm Leo!</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
