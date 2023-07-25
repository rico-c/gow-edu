import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import {LessonItem} from "../../components/lesson";
import {useTranslation} from "next-i18next";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {HeadingSection} from "../../components/headingSection";

const StudyOversea = () => {
  const {t} = useTranslation("common");
  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="pb-5">
        <div>
          <img src={'/img/Study_overseas.jpg'} />
        </div>
        <div className="flex justify-center">
          <HeadingSection img={'/img/Icon--Leader Prep.png'} header={t('oversea')} desc={t('oversea-desc')} />
        </div>
        <div>
          <LessonItem
            icon={"/icon/Icon-Turnitin Feedback@2x.png"}
            title={t("course-advise")}
            desc={t("lesson-desc1")}
            link="/studyoversea/advise"
          />
          <LessonItem
            icon={"/icon/Icon-Uni Prep@2x.png"}
            title={t("find-my-university")}
            desc={t("lesson-desc1")}
            link="/studyoversea/university"
          />
          <LessonItem
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
        </div>
        <div className="md:flex gap-5 justify-center">
          <LessonItem
            isCol
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
          <LessonItem
            isCol
            icon={"/icon/icon_phD preparation@3x.png"}
            title={t("phd-pre")}
            desc={t("lesson-desc1")}
            link="/studyoversea/phdpre"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudyOversea;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
