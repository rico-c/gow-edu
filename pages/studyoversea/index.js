import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { LessonItem } from "../../components/lesson";
import { useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import University from './university';

const StudyOversea = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="py-5">
        <div>
          <img src={'/banner/home_banner2.png'} />
        </div>
        <div>
          <LessonItem
            icon={"/img/Icon--Leader Prep.png"}
            title={t("oversea")}
            desc={t("lesson-desc1")}
            link="/studyoversea/university"
          />
          <LessonItem
            icon={"/img/Icon-Turnitin Feedback.png"}
            title={t("lesson-title1")}
            desc={t("lesson-desc1")}
            link="/"
          />
          <LessonItem
            icon={"/img/Icon-Uni Prep.png"}
            title={t("lesson-title1")}
            desc={t("lesson-desc1")}
            link="/"
          />
          <LessonItem
            icon={"/img/icon_Live Masterclass.png"}
            title={t("lesson-title1")}
            desc={t("lesson-desc1")}
            link="/"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudyOversea;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
