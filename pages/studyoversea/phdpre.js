import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useTranslation} from "next-i18next";
import Link from "next/link";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const PhdPre = () => {
  const {t} = useTranslation("university");


  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>
        <div>
          <img src="/img/phd_preparation.jpg" alt="university" />
        </div>
        <div className="flex justify-center py-10">
          wip
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PhdPre;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["university", "common"])),
    },
  };
}
