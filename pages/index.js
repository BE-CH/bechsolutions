import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bech Solutions - Web development</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Mikkel Bech @ BechSolutions.dk" />
        <meta name="description" content="Bech Solutions offer high quality websites made with love from scratch." />
        <meta
          name="keywords"
          content="Mikkel Bech, Bech, Solutions, Website, HQ Websites, scratch, intergrated, BechSolutions"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Bech Solutions</h1>

        <p className={styles.description}>
          Currently working on your <code className={styles.code}>website</code>!
        </p>
        <p className={styles.small}>That&apos;s why there isn&apos;t much here 😅</p>

        <div className={styles.grid}>
          <div className={styles.aboutMeCard}>
            <img className={styles.profileImage} alt="Mikkel Bech @ Bech Solutions" src="./MikkelBech.jpg" />
            <h2>Mikkel Bech</h2>
            <p>
              I am a 22 years old web developer that focuses on delivering modern, scaleable and high quality web
              solutions. ⚡🚀
            </p>
          </div>

          <div className={styles.card}>
            <h2>My skills &rarr;</h2>
            <p>
              My primary focus is on Javascript, HTML and CSS. I have worked with front-end libraries such as Next.js
              (React), Fabric.js and more. In terms of back-end I have been working with Node.js, Express.js, MongoDB
              and more.{' '}
            </p>
            <br />
            <p>Is your web solution built differently? Feel free to contact me. I might still be able to help!</p>
          </div>

          <div className={styles.card}>
            <h2>My work &rarr;</h2>
            <div className={styles.myWorkCardContainer}>
              <div className={styles.myWorkCard}>
                <a href="https://nemanimation.dk" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/nemanimation.jfif" alt="Nem Animation" />
                  <p>Nem Animation</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web solution with two seperate panels; a customer-panel and an admin-panel.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with Node.js, Express.js and MongoDB as back-end. HTML & CSS as front-end.
                  </p>
                </a>
              </div>

              <div className={styles.myWorkCard}>
                <a href="https://firstdrawing.com" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/firstdrawing.png" alt="Nem Animation" />
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
                <a href="https://romomotorfestival.dk" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/romomotorfestival.png" alt="Nem Animation" />
                  <p>Rømø Motor Festival</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web solution with two seperate panels; a customer-panel and an admin-panel.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with Node.js, Express.js and MongoDB as back-end. HTML & CSS as front-end.
                  </p>
                </a>
              </div>

              <div className={styles.myWorkCard}>
                <a href="https://læringsbevis.dk" target="_blank" rel="noopener noreferrer">
                  <img className={styles.myWorkImage} src="/laeringsbevis.jpeg" alt="Nem Animation" />
                  <p>Læringsbevis</p>
                  <p className={styles.myWorkDescription}>
                    A full-stack web solution with three seperate panels; a customer-panel, an admin-panel and a
                    student-panel.
                  </p>
                  <p className={styles.myWorkDescription}>
                    Made with Node.js, Express.js and MongoDB as back-end. HTML & CSS as front-end.
                  </p>
                </a>
              </div>

              <div className={styles.findMyWork}>
                <p>
                  You can find more of my work on{' '}
                  <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mikkellbech/" target="_blank">
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
              <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mikkellbech/" target="_blank">
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
