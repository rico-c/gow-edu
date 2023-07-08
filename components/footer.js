import Link from "next/link";
import Image from "next/image";
import React from "react";
import Container from "./container";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

const navigation = [
  {
    label: "home",
    route: "/",
  },
  {
    label: "recommend",
    route: "/testimonials",
  },
  {
    label: "oversea",
    route: "/studyoversea",
  },
  {
    label: "master",
    route: "/masterclass",
  },
  {
    label: "phd",
    route: "/phdready",
  },
  {
    label: "about",
    route: "/about",
  },
  {
    label: "partner",
    route: "/partner",
  },
  {
    label: "contact",
    route: "/contact",
  },
];

export default function Footer() {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <div
      className="relative"
      style={{ backgroundColor: "#383838", color: "#8e8e8e" }}
    >
      <div className="md:flex items-center justify-center gap-20 py-10">
        <div className="flex justify-center">
          <Link
            href="/"
            className="flex items-center space-x-2 text-2xl font-medium"
          >
            <Image src="/logo/View-logo.png" alt="N" width="100" height="100" />
          </Link>
        </div>
        <div className="">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.route}
              className="text-center w-full md:px-4 py-1 md:py-2 md:-ml-4 rounded-md block md:inline"
            >
              {t(item.label)}
            </Link>
          ))}
        </div>
      </div>

      <div className="py-5 text-sm md:flex justify-center border-t">
        <div className="flex justify-center">© GowEducation.com 2021 版权所有 </div><div className="flex justify-center"> <a className="px-2 cursor-pointer">使用条款 </a> | <a className="px-2 cursor-pointer">隐私政策</a> | <a className="px-2 cursor-pointer">联系我们</a></div>
      </div>
    </div>
  );
}
