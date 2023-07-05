import Image from "next/image";
import React from "react";
import Container from "./container";

const Feedback = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="w-full h-20 mt-10" style={{backgroundColor: '#0d7a98'}}>
        <span>{t('feedback')}</span>
      </div>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
      
      </Container>
    </>
  );
};

export default Feedback;
