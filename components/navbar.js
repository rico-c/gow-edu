import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { useRouter } from "next/router";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import TranslateIcon from "@mui/icons-material/Translate";
import IconButton from "@mui/material/IconButton";

const Navbar = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
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

  const locale = router.locale;
  const changeTo = locale === "en" ? "zh" : "en";

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto xl:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full xl:w-auto">
                <Link href="/">
                  <span
                    style={{ height: "70px" }}
                    className="flex items-center space-x-2 text-2xl font-medium text-cyan-700 dark:text-gray-100"
                  >
                    <Image
                      src={
                        locale === "en"
                          ? "/logo/logo-eng.png"
                          : "/logo/logo-zh.png"
                      }
                      alt="N"
                      width="220"
                      height="70"
                    />
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md xl:hidden hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 xl:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        key={index}
                        href={item.route}
                        className="text-center w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                      >
                        {t(item.label)}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center xl:flex xl:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none xl:pt-0 xl:flex">
            {navigation.map((menu, index) => (
              <li className="nav__item" key={index}>
                <Link
                  href={menu.route}
                  className="font-bold inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-cyan-700 focus:text-cyan-700 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                >
                  {t(menu.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 xl:flex nav__item">
          <Link href={{pathname: router.pathname}} locale={changeTo}>
            <IconButton className="text-gray-500 dark:text-gray-300">
              <TranslateIcon />
            </IconButton>
          </Link>
          {/* <ThemeChanger /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
