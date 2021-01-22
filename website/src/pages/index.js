import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Wat hun ech welles ze maachen?',
    imageUrl: 'img/robot_logo.svg',
    description: (
      <>
        Ee klenge Blog + Eng Sammlung/Dokumentation vu Beispiller zu <code>Python</code> op der 2e a 1re B.
      </>
    ),
  },
  {
    title: '',
    imageUrl: 'img/robot_logo.svg',
    description: (
      <>
        
      </>
    ),
  },
  {
    title: '',
    imageUrl: 'img/robot_upsidedown.svg',
    description: (
      <>
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
          <p className="hero__subtitle">{"Launching soon..."}</p>
          
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
