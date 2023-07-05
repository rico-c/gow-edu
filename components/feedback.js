import Image from "next/image";
import React from "react";
import Container from "./container";
import { useTranslation } from "next-i18next";

const Feedback = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div
        className="w-full h-20 mt-10 flex justify-center items-center"
        style={{ backgroundColor: "#0d7a98" }}
      >
        <span className="text-white font-bold">{t("feedback")}</span>
      </div>
      <Container className="w-2/3 flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className="flex gap-10 py-5">
          <Image
            src={"/img/home-note1.png"}
            width="560"
            height="340"
            alt="note"
          />
          <div className="shadow p-10" dangerouslySetInnerHTML={{__html: t("feedback-1")}}></div>
        </div>
        <div className="flex gap-10 py-5">
          <Image
            src={"/img/home-note2.png"}
            width="560"
            height="340"
            alt="note"
          />
          <div className="shadow p-10" dangerouslySetInnerHTML={{__html: t("feedback-2")}}></div>
        </div>
        <div className="flex gap-10 py-5">
          <Image
            src={"/img/home-note3.png"}
            width="560"
            height="340"
            alt="note"
          />
          <div className="shadow p-10" dangerouslySetInnerHTML={{__html: t("feedback-3")}}></div>
        </div>
        <div className="flex gap-10 py-5">
          <Image
            src={"/img/home-note4.png"}
            width="560"
            height="340"
            alt="note"
          />
          <div className="shadow p-10" dangerouslySetInnerHTML={{__html: t("feedback-4")}}></div>
        </div>
      </Container>
    </>
  );
};

export default Feedback;
