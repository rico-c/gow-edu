import React from "react";
import Link from "next/link";
import {useTranslation} from "next-i18next";
import {RightOutlined} from "@ant-design/icons";
import {Button} from "antd";

export const LessonItem = ({icon, title, desc, link}) => {
  const {t} = useTranslation("common");
  return (
    <div className="flex justify-center mt-10 w-ful">
      <div className="flex shadow rounded-lg w-5/6 md:w-1/2 bg-white">
        <div
          style={{width: "410px"}}
          className="hidden md:flex justify-center items-center p-10 border-r"
        >
          <img width="130" src={icon} />
        </div>
        <div className="p-10">
          <div className="text-xl font-bold">{title}</div>
          <div>{desc}</div>
          <div className="pt-5">
            <Link href={link}>
              <Button style={{background: "#f05622", color: "#fff"}} className="flex items-center">
                {t("read-more")}
                <RightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lesson = () => {
  const {t} = useTranslation("common");
  return (
    <div style={{backgroundColor: '#f6f6f6'}} className="py-8">
      <LessonItem
        icon={"/img/Icon-Performance Coaching@2x.png"}
        title={t("lesson-title1")}
        desc={t("lesson-desc1")}
        link="/"
      />
      <LessonItem
        icon={"/img/Icon--Leader Prep.png"}
        title={t("lesson-title2")}
        desc={t("lesson-desc2")}
        link="/studyoversea"
      />
      <LessonItem
        icon={"/icon/icon_phD preparation@3x.png"}
        title={t("lesson-title3")}
        desc={t("lesson-desc3")}
        link="/phdready"
      />
    </div>
  );
};

export default Lesson;
