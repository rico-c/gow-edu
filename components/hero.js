import Image from "next/image";
import { Carousel } from "antd";
import { Button, Input } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const labelStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  padding: "0.5rem 3rem",
  transform: "translate(-50%, -50%)",
};

const Hero = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;

  console.log(locale);

  return (
    <>
      {/* <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {t("slogan1")}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                &nbsp;&nbsp;{t("slogan2")}
              </span>
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {t("subtitle")}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                {t("discover")}
              </a>
              <a
                href="https://github.com/web3templates/nextly-template/"
                target="_blank"
                rel="noopener"
                className="flex items-center space-x-2 text-gray-500 dark:text-gray-400"
              >
                <svg
                  role="img"
                  width="24"
                  height="24"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                <span> View on Github</span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="600"
              height="600"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            {t("trusted-by")} <span className="text-blue-600">20000+</span>{" "}
            {t("trusted-by2")}
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 items-center md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image
                src={USYDLogo}
                width="200"
                height="300"
                className={"object-cover"}
                alt="Hero Illustration"
                loading="eager"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={MelbouleLogo}
                width="100"
                height="300"
                className={"object-cover"}
                alt="logo"
                loading="eager"
              />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <Image
                src={UNSWLogo}
                width="180"
                height="300"
                className={"object-cover"}
                alt="logo"
                loading="eager"
              />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <Image
                src={MonashLogo}
                width="200"
                height="300"
                className={"object-cover"}
                alt="logo"
                loading="eager"
              />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <Image
                src={AdeledeLogo}
                width="150"
                height="300"
                className={"object-cover"}
                alt="logo"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </Container> */}
      <Carousel autoplay className="w-full">
        <div className="relative">
          <div
            className="absolute top-1/2 left-1/2 text-xl text-white md:text-4xl lg:text-8xl"
            style={labelStyle}
          >
            {t("learn")}
          </div>
          <img
            src={"/banner/home_banner1.png"}
            fill="true"
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
            fill="true"
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
            fill="true"
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
        <div className="relative p-5 lg:p-0 lg:w-1/2 flex">
          <div className="hidden lg:block lg:w-60">
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
              <div className="py-7 lg:flex gap-6">
                <div>
                  <div>{t("name")}</div>
                  <Input />
                </div>
                <div>
                  <div>{t("email")}</div>
                  <Input />
                </div>
                <div>
                  <div>&nbsp;</div>
                  <Button
                    className="bg-white w-full lg:w-auto"
                    style={{ background: "#f05622", color: "#fff" }}
                  >
                    {t("subscribe")}
                  </Button>
                </div>
              </div>
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
