import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Wéi funktionéiert dat?',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Ech erklären Zeil fir Zeil, wéi déi wichtegst Programmer vun 2e a 1re funktionéieren.
        Ausserdeems gess du gewueren, ewéi d'Tools funktionéieren, déi s du fir d'Programméiere brauchs.
      </>
    ),
  },
  {
    title: 'A wat maachen ech lo domat?',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Ech léiere mat Python ze programméieren..mee wat genee kann ech lo domat maachen?
        Ennert <code>Docs</code> gess de méi gewueren.
      </>
    ),
  },
  {
    title: 'Meng eegen Erfaarungen a Projeten',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        A mengem <code>Blog</code> schreiwen ech iwwert aktuell Projeten un deenen ech schaffen.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{"Under Construction"}</h1>
          <p className="hero__subtitle">{"Einfach a präzis erklärt."}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
