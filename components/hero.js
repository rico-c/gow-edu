import Image from "next/image";
import { Button, Input,Form ,Carousel} from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import {fetchNewLetter} from '../api/new-letter'

const labelStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "0.5rem 3rem",
  transform: "translate(-50%, -50%)",
};

const Hero = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;


  const handleNewLetter = async(data) => {
    console.log(data);
    const {name, email} = data;
    const res = await fetchNewLetter({
      first_name: name,
      email_address: email
    })
  }

  return (
    <>
      <Carousel autoplay swipeToSlide draggable className="w-full" style={{minHeight: "calc(100vw * 0.36)"}}>
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl"
            style={labelStyle}
          >
            {t("learn")}
          </div>
          <img
            src={"/banner/home_banner1.png"}
            alt="Hero Illustration"
          />
        </div>
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl"
            style={labelStyle}
          >
            {t("grow")}
          </div>
          <img
            src={"/banner/home_banner2.png"}
            alt="Hero Illustration"
          />
        </div>
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl"
            style={labelStyle}
          >
            {t("excel")}
          </div>
          <img
            src={"/banner/home_banner3.png"}
            alt="Hero Illustration"
          />
        </div>
      </Carousel>
      <div>
        <div className="flex justify-center pt-10">{t("more-about-gow")}</div>
        <div className="flex justify-center">
          <div className="lg:w-1/2 py-5 md:flex justify-between">
            <Button type="link" className="flex">
              <Link
                href="/about"
                className="sm:text-sm lg:text-xl flex items-center gap-2"
                style={{ color: "#f05622" }}
              >
                {t("be-presenter")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                href="/partner"
                className="sm:text-sm lg:text-xl flex items-center gap-2"
                style={{ color: "#f05622" }}
              >
                {t("be-partner")}
                <RightOutlined />
              </Link>
            </Button>
            <Button type="link" className="flex">
              <Link
                href="/recommended"
                className="sm:text-sm lg:text-xl flex items-center gap-2"
                style={{ color: "#f05622" }}
              >
                {t("recommend")}
                <RightOutlined />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* 收集邮件订阅 */}
      <div
        className="w-full flex justify-center mt-5 lg:mt-10 h-auto lg:h-72"
        style={{ backgroundColor: "#0d7a98" }}
      >
        <div className="relative p-5 lg:p-0 flex">
          <div className="hidden lg:block lg:w-60" style={{width: '220px'}}>
            <Image
              className="absolute bottom-0 left-0 h-auto"
              src={"/img/robert.png"}
              alt="x"
              width="220"
              height="320"
            />
          </div>
          <div className="text-white right-0 py-5">
            <div className="block lg:hidden">
              <img className="" src={"/img/home-asscimg.png"} alt="x" />
            </div>
            {locale === "en" && (
              <>
                <div className="text-2xl my-3.5">{t("email-subscription")}</div>
                <div className="text-base">{t("email-subscription-desc")}</div>
                <div className="text-base">{t("subscribtion-cancel")}</div>
              </>
            )}
            {locale === "en" && (
              <Form onFinish={handleNewLetter}>
              <div className="py-7 lg:flex gap-6">
                <div>
                  <div className="text-white">{t("name")}</div>
                  <Form.Item name="name">
                  <Input />
                  </Form.Item>
                </div>
                <div>
                  <div className="text-white">{t("email")}</div>
                  <Form.Item name="email">
                  <Input />
                  </Form.Item>
                </div>
                <div>
                  <div>&nbsp;</div>
                  <Button
                    className="bg-white w-full lg:w-auto"
                    htmlType="submit"
                    style={{ background: "#f05622", color: "#fff" }}
                  >
                    {t("subscribe")}
                  </Button>
                </div>
              </div>
              </Form>
            )}
            {locale === "zh" && (
              <div className="py-7 gap-6 lg:pl-10 h-full">
                <div className="font-bold text-2xl">扫码添加Robert教授微信</div>
                <div className="h-full p-5 flex justify-center">
                  <img className="h-1/2 lg:h-full" src={"/qr/wechat.jpeg"} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
