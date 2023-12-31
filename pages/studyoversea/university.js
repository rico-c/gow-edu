import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import {useTranslation} from "next-i18next";
import {List, Select, Table} from "antd";
import Link from "next/link";
import {fetchSelectList, fetchRankingList} from "../../api/rank";

import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useEffect, useState} from "react";

const columns = [
  {
    title: "Times Rank",
    dataIndex: "rank",
    key: "rank",
  },
  {
    title: "Institution",
    dataIndex: "school_name",
    key: "school_name",
    render: (text, record, index) => {
      return <div className="flex items-center gap-10"><span className="font-bold">{text}</span></div>
    }
  },
  {
    title: "State/Region",
    dataIndex: "state_name",
    key: "state_name",
  },
  {
    title: "City",
    dataIndex: "city_name",
    key: "city_name",
  },
];

const University = () => {
  const {t} = useTranslation("university");

  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);

  const [currentCountry, setCurrentCountry] = useState();
  const [currentYear, setCurrentYear] = useState();

  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getSelectList = async () => {
      const res = await fetchSelectList();
      console.log(res);
      setCountries(res.country_list);
      setCurrentCountry(res.country_list[0].country_code);
      setYears(res.year_list);
      setCurrentYear(res.year_list[0]);
    };
    getSelectList();
  }, []);

  useEffect(() => {
    const getList = async () => {
      const res = await fetchRankingList({
        country: currentCountry,
        year: currentYear,
      });
      console.log(">>>res", res);
      setData(res.rank_list);
      setInfo(res);
    };
    if (currentCountry && currentYear) {
      getList();
    }
  }, [currentCountry, currentYear]);

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
          <img src="/img/Find_my_university.jpg" alt="university" />
        </div>
        <div className="flex justify-center py-10">
          <div className="px-5 md:px-0 w-full md:w-3/5 ">
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
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-1")}
                </List.Item>
                <List.Item>{t("areas-2")}</List.Item>
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-3")}
                </List.Item>
                <List.Item>{t("areas-4")}</List.Item>
                <List.Item style={{backgroundColor: "#f5f5f5"}}>
                  {t("areas-5")}
                </List.Item>
              </List>
            </div>
            <div className="text-xl font-bold py-5">{t("destination")}</div>
            <div className="flex gap-5">
              <Select
                size="large"
                value={currentCountry}
                style={{width: 240}}
                onChange={(v) => setCurrentCountry(v)}
                options={countries.map((i) => ({
                  value: i.country_code,
                  label: i.country_name,
                }))}
              />
              <Select
                size="large"
                value={currentYear}
                style={{width: 240}}
                onChange={(v) => setCurrentYear(v)}
                options={years.map((i) => ({value: i, label: i}))}
              />
            </div>
            <div>
              <img className="pt-5 w-full" src={info.country_image_url} alt="university" />
            </div>
            <div className="text-xl font-bold py-5">
              {t("partner")} - <span className="main-color">{info.country_name}</span>
            </div>
            <div>
              <Table dataSource={data} columns={columns} rowClassName={(record, index) => {
                let className = 'light-row';
                if (index % 2 === 1) className = 'dark-row';
                return className;
              }} />
            </div>
            <div className="text-xl font-bold py-5">
              {t("top-university")} - {info.country_name}
            </div>
            <div className="flex flex-wrap gap-5">
              {
                data.slice(0, 8).map((i) => <div key={i.school_id} className="w-1/5 shadow flex justify-center items-center p-1 rounded">
                  <Link href={`/studyoversea/detail/${i.school_id}?year=${currentYear}`}>
                    <img src={i.logo_url} />
                  </Link>
                </div>)
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default University;

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["university", "common"])),
    },
  };
}
