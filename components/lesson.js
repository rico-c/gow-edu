import React from "react";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { Button } from "antd";

export const LessonItem = ({ icon, title, desc, link }) => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="flex shadow rounded-lg w-5/6 md:w-1/2">
        <div
          style={{ width: "350px" }}
          className="hidden md:flex justify-center items-center p-10 border-r"
        >
          <img width="130" src={icon} />
        </div>
        <div className="p-10">
          <div className="text-xl font-bold">{title}</div>
          <div>{desc}</div>
          <div className="pt-5">
            <Link href={link}>
              <Button style={{ background: "#f05622", color: "#fff" }}>
                {t("read-more")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const Lesson = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <LessonItem
        icon={"/img/Icon-Turnitin Feedback.png"}
        title={t("lesson-title1")}
        desc={t("lesson-desc1")}
        link="/"
      />
      <LessonItem
        icon={"/img/Icon-Turnitin Feedback.png"}
        title={t("lesson-title2")}
        desc={t("lesson-desc2")}
        link="/studyoversea"
      />
    </>
  );
};

export default Lesson;
