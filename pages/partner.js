import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import PartnerForm from "../components/partner";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Partner = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PartnerForm />
      <Footer />
    </>
  );
};

export default Partner;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
