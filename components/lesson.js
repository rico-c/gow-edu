import React from "react";
import { useTranslation } from "next-i18next";
import {Button} from 'antd'

const Lesson = () => {
  const { t } = useTranslation("common");
  return (
    <div className="flex justify-center mt-10 w-full">
      <div className="flex shadow rounded-lg w-5/6 md:w-1/2">
        <div style={{width: '350px'}} className="hidden md:flex justify-center items-center p-10 border-r">
          <img width="130" src={'/img/Icon-Turnitin Feedback.png'} />
        </div>
        <div className="p-10">
          <div className="text-xl font-bold">{t('lesson-title1')}</div>
          <div>{t('lesson-desc1')}</div>
          <div className="pt-5">
            <Button style={{background: '#f05622', color: '#fff'}}>{t('read-more')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
