import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const About = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex w-full justify-center p-10">
        <div className="w-full md:w-3/4 flex">
          <div className="pr-0 md:pr-10">
            <div>
              <div style={{color: '#f05622'}} className="font-bold text-3xl pb-5">{t("about-us")}</div>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: t("about-us-content") }}
            ></div>
          </div>
          <div className="hidden md:block" style={{minWidth: '150px'}}>
            <img className="pb-5 rounded-full" width="130px" src="/img/about_v2.png" />
            <img className="pb-5 " width="130px" src="/img/about_logo.png" />
            <img className="pb-5 " width="130px" src="/img/Waratah100.png" />
            <img className="" width="130px" src="/img/View-logo@2x.png" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
