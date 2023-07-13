import Footer from "../../components/footer";
import Head from "next/head";
import Navbar from "../../components/navbar";
import { useTranslation } from "next-i18next";
import { useSearchParams } from "next/navigation";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetchSchool } from "../../api/rank";
import { useEffect, useState } from "react";

const Detail = ({ name }) => {
  const searchParams = useSearchParams();

  const [data, setData] = useState(null);

  const year = searchParams.get("year");
  const { t } = useTranslation("common");
  console.log(name, year);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetchSchool({
        id: name,
        year,
      });
      console.log(res);
      setData(res);
    };
    if (year && name) {
      getInfo();
    }
  }, [year, name]);

  return (
    <>
      <Head>
        <title>Gow Education</title>
        <meta name="description" content="To be your best yourself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {data && (
        <div>
          <div>
            <img src="/img/b3.png" />
          </div>
          <div className="flex justify-center pt-10">
            <div className="w-1/2">
              <div className="text-2xl font-bold main-color">
                {data.school_name}
              </div>
              <div className="flex gap-5">
                <div>
                  <img src={data.logo_url} width="180" />
                </div>
                <div>
                  <div className="flex items-center">
                    <img src={data.flag_url} width="50" height="20" />
                    <span className="text-lg font-bold">
                      {data.country_name}
                    </span>
                  </div>
                  <div>
                    <div>
                      <span className="inline-block w-15">
                        {t("world-rank")}&nbsp;{year}
                      </span>
                      <span>{data.rank}</span>
                    </div>
                    <div>
                      <span className="inline-block w-15">{t("city")}</span>
                      <span>{data.city}</span>
                    </div>
                    <div>
                      <span className="inline-block w-15">{t("state")}</span>
                      <span>{data.state}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Detail;

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "university"])),
      ...params,
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
    paths: paths.map((p) => ({
      params: {
        name: p,
      },
    })),
    fallback: true, // false or "blocking"
  };
}
