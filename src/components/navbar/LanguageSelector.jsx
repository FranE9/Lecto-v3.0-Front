import React, { useContext, useState } from "react";
import DownArrow from "../commons/icons/DownArrow";
import { AuthContext } from "../../context/AuthContext";

const LanguageSelector = () => {
    const { user, changeLanguage } = useContext(AuthContext);
    const [showOptions, setShowOptions] = useState(false);

    const toggleOptions = () => setShowOptions(!showOptions);

    const onSelectLanguage = (lang = "es") => {
        changeLanguage(lang);
        toggleOptions();
    }

  return (
    <div className="relative inline-block text-left ml-3">
      <div>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={toggleOptions}
        >
          {user.lang.toUpperCase()}
          <DownArrow />
        </button>
      </div>
      <div
        className={`${showOptions ? "absolute" : "hidden"} right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="py-1" role="none">
          <span
            className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
            onClick={() => onSelectLanguage('en')}
          >
            EN
          </span>
          <span
            className="hover:bg-gray-100 hover:text-gray-900 text-gray-700 block px-4 py-2 text-sm cursor-pointer"
            onClick={() => onSelectLanguage('es')}
          >
            ES
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
