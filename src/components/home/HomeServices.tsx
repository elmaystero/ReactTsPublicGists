import * as React from "react";
import GistsList from "../gists/List";
import { useTranslation } from "react-i18next";

export default () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="services">
      <div className="services__container">
        <div className="services__title">
          <h2 className="services__title-text">
            All Gists Search Screen
          </h2>
        </div>
        <div className="container-fluid container--medium">
          <GistsList/>
        </div>
      </div>
    </div>
  );
};
