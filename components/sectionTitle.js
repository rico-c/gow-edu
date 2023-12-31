import React from "react";
import Container from "./container";

const SectionTitle = (props) => {
  return (
    <Container
      className={`flex w-full flex-col mt-4 ${
        props.align === "left" ? "" : "items-center justify-center text-center"
      }`}>
      {props.pretitle && (
        <div className="text-sm font-bold tracking-wider text-blue-600 uppercase">
          {props.pretitle}
        </div>
      )}

      {props.title && (
        <h2 style={{color: '#f05622'}} className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          {props.title}
        </h2>
      )}

      {props.children && (
        <p className="text-left max-w-7xl py-4 leading-normal text-gray-900 dark:text-gray-300" dangerouslySetInnerHTML={{__html: props.children}}>
        </p>
      )}
    </Container>
  );
}

export default SectionTitle;