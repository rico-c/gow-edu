import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import {useTranslation} from "next-i18next";
import {Form, Input, Button, Checkbox, message} from 'antd'
import {fetchNewLetter} from '../api/new-letter'

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Link from "next/link";

const Subscribe = () => {
  const {t} = useTranslation("common");

  const [messageApi, contextHolder] = message.useMessage();

  const handleNewLetter = async (data) => {
    console.log(data);
    const {name, email} = data;
    const res = await fetchNewLetter({
      first_name: name,
      email_address: email
    })
    console.log(111, res);
    if (res.data === 'success') {
      messageApi.open({
        type: 'success',
        content: t('subscribe-callback'),
      });

    }
  }

  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {contextHolder}
      <div className="flex justify-center py-5 lg:py-20">
        <div className="w-1/2 flex">
          <div className="w-1/2">
            <div dangerouslySetInnerHTML={{__html: t('subscribe-slogan')}}></div>
            <Form onFinish={handleNewLetter}>
              <div className="py-7 gap-6">
                <div>
                  <div>{t("name")}</div>
                  <Form.Item name="name">
                    <Input />
                  </Form.Item>
                </div>
                <div>
                  <div>{t("email")}</div>
                  <Form.Item name="email">
                    <Input />
                  </Form.Item>
                </div>
                <div className="pb-5">
                  <Checkbox className="pr-2" />I agree to the <Link href="/terms" className="underline">terms and conditions.</Link>
                </div>
                <Button
                  className="bg-white w-full lg:w-auto"
                  htmlType="submit"
                  style={{background: "#f05622", color: "#fff"}}
                >
                  {t("subscribe")}
                </Button>
              </div>
            </Form>
          </div>
          <div className="border-l ml-5 pl-5">
            <div>Facebook</div>
            <div>Google</div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
