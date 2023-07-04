import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
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
        pretitle="Nextly Benefits"
        title="Our Values">
        高远教育有一个明确的目标——帮助你成为最好的自己，并获得成功。我们的目标是帮助你树立自信心，协助你找到你的人生意义和目的，从而去创建你的辉煌未来。许多人仅仅满足于次佳的现状，缺乏发掘潜能的内在动力。触及星空的路总是布满荆棘，但高远教育会为你提供实现人生目标所需的精神配件。我们的大师直播课将引导你踏上这段旅途。我的学习大师课程由来自世界一流大学且经验丰富的大学学术研究者讲授，通过予以大学生指导、提示和工具等方式为其提供多元学习技巧，以助学生提高在校成绩及取得卓越学术成就。我的职业大师课程传授必要的职业技能及就业技能，帮助你决定你未来的职业方向，规划发展道路，将心仪的工作收入囊中。我的生活大师课程通过确认你的个人优势强项引导你设定目标同时克服恐惧和焦虑，培养建设你所需的自信树立和心态调整。如果你是在西方大学学习的一名国际学生且英语不是你的母语，生活在另一个国家有时候会很有挑战性。我们的英语会话大师课程以寓教于乐引人入胜的方法来培养实用的英语语言会话技巧，帮助大家克服这些困难挑战我们旨在让每个学生都可以达到他们的最佳状态——最好的学习、最好的职业、最好的生活！
        Robert博士
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
    },
  }
}