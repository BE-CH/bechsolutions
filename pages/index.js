import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Typed from 'typed.js';
import { useEffect } from 'react';

export default function Home() {
  async function linkedinclick() {
    if (window.plausible) {
      window.plausible('LinkedInClick'); // Send LinkedIn click event
    }
  }

  useEffect(() => {
    var options = {
      strings: ['website', 'app', 'database', 'Docker containers', 'web solution'],
      typeSpeed: 60,
      backSpeed: 60,
      loop: true,
      showCursor: false,
      backDelay: 5000,
    };
    new Typed('.testelement', options);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Bech Solutions - Web development</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Mikkel Bech @ BechSolutions.dk" />
        <meta name="description" content="Bech Solutions offer high quality websites made with love from scratch." />
        <meta
          name="keywords"
          content="Mikkel Bech, Bech, Solutions, Website, HQ Websites, scratch, intergrated, BechSolutions, React, Nextjs, Javascript, Modern"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bech Solutions</h1>

        <p className={styles.description}>
          Currently working on your{' '}
          <code className={styles.code}>
            <span className="testelement"></span>
          </code>
          !
        </p>

        <div className={styles.grid}>
          <div className={styles.aboutMeCard}>
            <img className={styles.profileImage} alt="Mikkel Bech @ Bech Solutions" src="./mikkelbech_color.jpg" />
            <h2>Mikkel Bech</h2>
            <p>
              I am a 23 years old web developer that focuses on delivering modern, scaleable and high quality web
              solutions. ⚡🚀
            </p>
          </div>

          <div className={styles.card}>
            <h2>My skills &rarr;</h2>
            <p>
              My primary focus is <mark>Javascript</mark>, <mark>Typescript</mark>, <mark>HTML</mark> and{' '}
              <mark>CSS</mark>. I have worked with front-end libraries such as <mark>React.js</mark>,{' '}
              <mark>Next.js</mark>, <mark>Svelte</mark>, <mark>Fabric.js</mark> and more. In terms of back-end I have
              been working with <mark>Node.js</mark>, <mark>Nest.js</mark>, <mark>Express.js</mark> and more!
            </p>
            <br />
            <p>
              My go-to database is <mark>MongoDB</mark> but I am also skilled in <mark>SQL</mark> using{' '}
              <mark>PostgreSQL</mark> and <mark>MSSQL</mark>. In terms of organizing and running everything, I like
              doing it inside containerized environments using <mark>Docker</mark>!
            </p>
            <div className={styles.icons}>
              <div className={styles.actualicons}>
                <img src="/icons/javascript.svg" alt="Javascript" />
                <img src="/icons/typescript.svg" alt="Typescript" />
                <img src="/icons/react.svg" alt="React" />
                <img src="/icons/nextjs.svg" alt="NextJS" />
                <img src="/icons/svelte.svg" alt="Svelte" />
                <img src="/icons/nodejs.svg" alt="NodeJS" />
                <img src="/icons/nestjs.svg" alt="NestJS" />
                <img src="/icons/mongodb.svg" alt="MongoDB" />
                <img src="/icons/postgresql.svg" alt="MongoDB" />
              </div>
              <p>Is your web solution built differently? Feel free to contact me. I might still be able to help!</p>
            </div>
          </div>

          <div className={styles.card}>
            <h2>My work &rarr;</h2>
            <div className={styles.myWorkCardContainer}>
              <div className={styles.myWorkCard}>
                <a href="https://automat.læringsbevis.dk/" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/laeringsbevis-automat.png" alt="Læringsbevis" />
                  <p>Læringsbevis Automat</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web app that helps users create resumes and applications when searching for a new job.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with Typescript, Nest.js, Next.js and MongoDB. Containerized with Docker.
                  </p>
                </a>
              </div>
              <div className={styles.myWorkCard}>
                <a href="https://pongit.dk" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/pongit.jpg" alt="PongIT" />
                  <p>PongIT</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web solution to support creation and paritcipation of table tennis tournaments.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with C#, ASP.NET and EF Core as back-end. Typescript and Next.js as front-end. Containerized
                    with Docker.
                  </p>
                </a>
              </div>

              <div className={styles.myWorkCard}>
                <a href="https://firstdrawing.com" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/firstdrawing.png" alt="First Drawing" />
                  <p>First Drawing</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web solution with three seperate panels; a customer-panel, an admin-panel and a
                    designer-panel.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with Node.js, Express.js and MongoDB as back-end. HTML & CSS as front-end.
                  </p>
                </a>
              </div>

              <div className={styles.myWorkCard}>
                <a href="https://tilbudstracker.dk" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/tilbudstracker.jpeg" alt="Tilbudstracker" />
                  <p>Tilbudstracker</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web app, that tracks and highlights the best deals on groceries from Danish
                    supermarkets.
                  </p>
                  <p className={styles.myWorkDescription}>Made with Typescript, Next.js and serverless functions.</p>
                </a>
              </div>

              <div className={styles.findMyWork}>
                <p>
                  You can find more of my work on{' '}
                  <a
                    onClick={() => linkedinclick()}
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/mikkellbech/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <h2>Contact me &rarr;</h2>
            <p>
              I am always looking for new and exciting opportunities. Feel free to contact me using one of the below;
            </p>
            <br></br>
            <p className={styles.cardLink}>
              LinkedIn:{' '}
              <a
                onClick={() => linkedinclick()}
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mikkellbech/"
                target="_blank"
              >
                @mikkellbech
              </a>
            </p>
            <p className={styles.cardLink}>
              Worksome:{' '}
              <a rel="noopener noreferrer" href="https://use.worksome.dk/profile/2090" target="_blank">
                @MikkelBech
              </a>
            </p>
            <p className={styles.cardLink}>
              Github:{' '}
              <a rel="noopener noreferrer" href="https://github.com/BE-CH" target="_blank">
                @BE-CH
              </a>
            </p>
            <p className={styles.cardLink}>
              E-mail:{' '}
              <a rel="noopener noreferrer" href="mailto:mikkel@bechsolutions.dk" target="_blank">
                mikkel@bechsolutions.dk
              </a>
            </p>
            <p className={styles.cardLink}>
              Phone:{' '}
              <a rel="noopener noreferrer" href="tel:+4521775413" target="_blank">
                +45 21 77 54 13
              </a>
            </p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://bechsolutions.dk" target="_blank" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <img src="/logo.png" alt="Bech Solutions logo" className={styles.actualImage} />
          </span>
        </a>
      </footer>
    </div>
  );
}
