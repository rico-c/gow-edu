import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Feedback from "../components/feedback";
import Lesson from "../components/lesson";
import Footer from "../components/footer";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    (window).$crisp=[];
    (window).CRISP_WEBSITE_ID="e60fe710-4049-471d-8dab-b61e41152145";
    let d=document;
    let s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    (s).async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
  }, [])

  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta
          name="description"
          content="To be your best yourself"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle=""
        title={t('slogan3')}>
        {t('value-desc')}
      </SectionTitle>
      <div className="flex justify-center relative">
        <img className="" src={'/img/welcome.png'} fill="true" alt={'welcome'} />
        <div className="absolute text-white top-1/2 text-2xl md:text-5xl lg:text-8xl" style={{transform: "translateY(-50%)"}}>{t('logo')}</div>
      </div>
      <Lesson />
      <Feedback />
      <Footer />
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home'
      ])),
    },
  }
}