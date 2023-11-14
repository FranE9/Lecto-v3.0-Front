import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import RightArrow from "../components/commons/icons/RightArrow";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="bg-indigo-500">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {t('home.welcome')}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-white">
              Deleniti, earum consectetur illo sit repudiandae eos ab quas
              distinctio, optio dolorum mollitia unde culpa laboriosam est
              impedit error perspiciatis excepturi praesentium?
            </p>
            <Link
              to={"/login"}
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
               {t('home.login')}
              <RightArrow />
            </Link>
            <Link
              to={"/register"}
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
               {t('home.register')}
            </Link>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img
              src="https://assets.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298b303b93d91_3d-tb-education.png"
              alt="mockup"
            />
          </div>
        </div>
      </section>

      <div className="sm:flex items-center bg-orange-200">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              {t('home.about')}
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
            {t('home.who')} <span className="text-indigo-600">{t('home.are_we')}</span>
            </h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              commodi doloremque, fugiat illum magni minus nisi nulla numquam
              obcaecati placeat quia, repellat tempore voluptatum.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {t('home.tools')}
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{" "}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="grid gap-8 row-gap-10 lg:grid-cols-2">
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">The deep ocean</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear. I didn't even know we were calling him Big
              Bear. We never had the chance to.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              When has justice
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Rough pomfret lemon shark plownose chimaera southern sandfish
              kokanee northern sea robin Antarctic cod. Yellow-and-black
              triplefin gulper South American Lungfish mahi-mahi, butterflyfish
              glass catfish soapfish ling gray mullet!
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              Organically grow
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              A slice of heaven. O for awesome, this chocka full cuzzie is as
              rip-off as a cracker. Meanwhile, in behind the bicycle shed,
              Hercules Morse, as big as a horse and Mrs Falani were up to no
              good with a bunch of crook pikelets.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
          <div className="max-w-md sm:mx-auto sm:text-center">
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="mb-3 text-xl font-bold leading-5">
              A slice of heaven
            </h6>
            <p className="mb-3 text-sm text-gray-900">
              Disrupt inspire and think tank, social entrepreneur but
              preliminary thinking think tank compelling. Inspiring, invest
              synergy capacity building, white paper; silo, unprecedented
              challenge B-corp problem-solvers.
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
