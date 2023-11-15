import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import lecto from "../../assets/images/iconLecto.png";
import { AuthContext } from "../../context/AuthContext";
import MenuIcon from "../commons/icons/Menu";
import LanguageSelector from "../navbar/LanguageSelector";

export const Navbar = () => {
  const { user, updateUserInfo } = useContext(AuthContext);
  const [showMenu, setShowMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header>
        {user.isLogged && (
          <nav className="bg-white shadow">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between py-4">
                <div>
                  <img src={lecto} />
                </div>

                <div className="hidden sm:flex sm:items-center">
                  <Link
                    to="/dashboard"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                  >
                    {t("navbar.pdf")}
                  </Link>
                  <Link
                    to="/dashboard2"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                  >
                    {t("navbar.text")}
                  </Link>
                  <Link
                    to="/tickets"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mr-4"
                  >
                    {t("navbar.ticket")}
                  </Link>
                </div>

                <div className="hidden sm:flex sm:items-center">
                  <button
                    className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                    onClick={() => updateUserInfo()}
                  >
                    {t("navbar.logout")}
                  </button>
                  <LanguageSelector />
                </div>
                <div
                  className="sm:hidden cursor-pointer"
                  onClick={() => setShowMenu(!showMenu)}
                >
                  <MenuIcon />
                </div>
              </div>
              <div
                className={`${
                  showMenu ? "block" : "hidden"
                } sm:hidden bg-white border-t-2 py-2`}
              >
                <div className="flex flex-col">
                  <Link
                    to="/dashboard"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                  >
                    {t("navbar.pdf")}
                  </Link>
                  <Link
                    to="/dashboard2"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                  >
                    {t("navbar.text")}
                  </Link>
                  <Link
                    to="/tickets"
                    className="text-gray-800 text-sm font-semibold hover:text-purple-600 mb-1"
                  >
                    {t("navbar.ticket")}
                  </Link>
                  <div className="flex justify-between items-center border-t-2 pt-2">
                    <button
                      className="text-gray-800 text-sm font-semibold border px-4 py-2 rounded-lg hover:text-purple-600 hover:border-purple-600"
                      onClick={() => updateUserInfo()}
                    >
                      {t("navbar.logout")}
                    </button>
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
};
