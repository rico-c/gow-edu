import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Detail = ({name}) => {
  console.log(name);
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {name}
      <Footer />
    </>
  );
};

export default Detail;

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      ...params
    },
  };
}

export async function getStaticPaths() {
  const paths = [
    "meilbourne",
    "queensland",
    "national",
    "monash",
    "sydney",
    "nsw",
    "adelade",
    "western",
  ];
  return {
    paths: paths.map(p => ({
      params: {
        name: p
      }
    })),
    fallback: true, // false or "blocking"
  };
}
