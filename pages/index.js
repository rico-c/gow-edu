import { useEffect } from "react";
import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Image from "next/image";
import Feedback from "../components/feedback";
import Video from "../components/video";
import Footer from "../components/footer";
import PopupWidget from "../components/popupWidget";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    (window).$crisp=[];
    (window).CRISP_WEBSITE_ID="09c5c023-ef8b-4d40-b073-460bfe43be9f";
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
      <div className="flex justify-center">
        <img className="" src={'/img/welcome.png'} fill="true" alt={'welcome'} />
      </div>
      <Feedback />
      {/* <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} /> */}
      {/* <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      <Footer />
      {/* <PopupWidget /> */}
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