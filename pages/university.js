import Footer from "../components/footer";
import Head from "next/head";
import Navbar from "../components/navbar";
import { useTranslation } from "next-i18next";
import { List, Select, Table } from "antd";
import Link from "next/link";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
];

const University = () => {
  const { t } = useTranslation("university");
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
          <img src="/img/findmyuniversity.jpg" alt="university" />
        </div>
        <div className="flex justify-center py-10">
          <div className="w-3/5 ">
            <div className="main-color text-3xl font-bold pb-5">
              {t("title")}
            </div>
            <div className="flex items-center gap-5 pb-5 text-lg">
              <img src="/img/icon_icon_Get connected.png" width="130px" />
              {t("desc")}
            </div>
            <div className="flex justify-center pb-5">
              <img src="/img/theWord.png" width="250px" />
            </div>
            <div className="text-xl font-bold">{t("sub-title")}</div>
            <div className="text-lg pb-5">{t("sub-title-1")}</div>
            <div className="max-w-md">
              <List bordered>
                <List.Item style={{ backgroundColor: "#f5f5f5" }}>
                  {t("areas-1")}
                </List.Item>
                <List.Item>{t("areas-2")}</List.Item>
                <List.Item style={{ backgroundColor: "#f5f5f5" }}>
                  {t("areas-3")}
                </List.Item>
                <List.Item>{t("areas-4")}</List.Item>
                <List.Item style={{ backgroundColor: "#f5f5f5" }}>
                  {t("areas-5")}
                </List.Item>
              </List>
            </div>
            <div className="text-xl font-bold py-5">{t("destination")}</div>
            <div className="flex gap-5">
              <Select
                defaultValue="Australia"
                size="large"
                style={{ width: 240 }}
                options={[
                  { value: "Australia", label: "Australia" },
                ]}
              />
              <Select
                defaultValue="2022"
                size="large"
                style={{ width: 240 }}
                options={[
                  { value: "2021", label: "2021" },
                  { value: "2022", label: "2022" },
                ]}
              />
            </div>
            <div className="text-xl font-bold py-5">{t('partner')} - Australia</div> 
            <div>
            <Table dataSource={dataSource} columns={columns} />
            </div>
            <div className="text-xl font-bold py-5">{t('top-university')} - Australia</div> 
            <div className="flex flex-wrap gap-5">
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/meilbourne"><img src="/universities/Melbourne.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/queensland"><img src="/universities/Queensland.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/national"><img src="/universities/National.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/monash"><img src="/universities/Monash.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/sydney"><img src="/universities/The_University_of_Sydney.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/nsw"><img src="/universities/NSW.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/adelade"><img src="/universities/Adelaide.png" /></Link></div>
              <div className="w-1/5 shadow flex justify-center items-center p-1 rounded"><Link href="/detail/western"><img src="/universities/Western.png" /></Link></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default University;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["university", "common"])),
    },
  };
}
