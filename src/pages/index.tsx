import Layout from "../components/layout";
import styles from "./../styles/AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Layout>
      <h2 className="pageTitle">ABOUT ME</h2>
      <div className={styles.aboutMe}>
        <h3>Welcome to my personal page.</h3>
        <p>I&apos;m a front-end developer. </p>
        <p>
          I can work on your site using my JS framework skills, collect a
          responsive design with your favorite library, also I can be useful for
          working with database.
        </p>
        <p>
          I&apos;m an enthusiastic self-organized person who loves working in a
          team, solving interesting challenges, learning new things, educating
          people around, and helping team players to get things done. During the
          work, I prefer creating reusable components. Do the work with minimum
          code which is easy to read and change.
        </p>
        <p>I prefer simple and friendly UI.</p>
        <p>
          I like to participate in the weekly challenges organized by Scrimba,
          Clever programmer and Sonny teams to increase my skills.
        </p>
        <p>
          I have spent a long time studying IT and I like it more and more every
          day and I enjoy my job...
        </p>

        <br />
        <br />
        <h2 className="pageTitle">follow me</h2>
        <div className={styles.followMe}>
          <a
            href="https://www.linkedin.com/in/viktorya-hakobyan-8a6128199"
            target="_blank"
          >
            <Image src="/linkedin.png" alt="linkedin" width={30} height={30} />
          </a>
          <a href="https://github.com/hakobyanviktoria8" target="_blank">
            <Image src="/github.png" alt="github" width={30} height={30} />
          </a>
          <a
            href="https://react-project-six-zeta.vercel.app/users"
            target="_blank"
          >
            <Image src="/website.png" alt="website" width={30} height={30} />
          </a>
          <a
            href="https://edabit.com/user/3aZvfgr2H2WF8Yog2"
            className={styles.bgGrayAdd}
            target="_blank"
          >
            <b id="edabit" title="edabit">
              E
            </b>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0126e286a16e2e6703"
            className={styles.bgGrayAdd}
            target="_blank"
          >
            <b id="edabit" title="upwork">
              Up
            </b>
          </a>
          <a
            href="http://localhost:3000/Viktorya__CV.pdf"
            download="Viktorya__CV.pdf"
          >
            <Image
              src="/download.png"
              alt="download"
              width={40}
              height={35}
              title="Download cv"
            />
          </a>
          <a href="mailto:hakobyanviktorya8@gmail.com" target="_blank">
            <Image
              src="/email.png"
              alt="email"
              width={30}
              height={30}
              title="Email me"
            />
          </a>

          <a href="tel:+37494333518">
            <Image
              src="/call.png"
              alt="call"
              width={30}
              height={30}
              title="Call me"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
};
export default AboutMe;
