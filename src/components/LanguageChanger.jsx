import { useSelector, useDispatch } from "react-redux";
import { setLanguage, languageSelector } from "../redux/slices/languageSlice";
import { useTranslate } from "../hooks/useTranslate";
import i18n from "../i18next";
import { notifySuccess } from "./Notification";
// import languages from "../locales/languages.json";

const LanguageChanger = () => {
  const { language } = useSelector(languageSelector);
  const dispatch = useDispatch();
  const { t } = useTranslate();

  const changeLanguage = (e) => {
    notifySuccess(`Language changed successfully`);
    dispatch(setLanguage(e.target.value));
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <select onChange={changeLanguage} value={language}>
        {/* {Object.keys(languages).map((language) => {
          return (
            <option className="text-gray-900" value={language}>
              {languages["en"][language.toLowerCase()]}
            </option>
          );
        })} */}
        <option className="text-gray-900" value="en">
          {t("en")}
        </option>
        <option className="text-gray-900" value="es">
          {t("es")}
        </option>
        <option className="text-gray-900" value="fr">
          {t("fr")}
        </option>
        <option className="text-gray-900" value="de">
          {t("de")}
        </option>
        <option className="text-gray-900" value="zh">
          {t("zh")}
        </option>
        <option className="text-gray-900" value="ja">
          {t("ja")}
        </option>
        <option className="text-gray-900" value="ar">
          {t("ar")}
        </option>
        <option className="text-gray-900" value="ru">
          {t("ru")}
        </option>
        <option className="text-gray-900" value="pt">
          {t("pt")}
        </option>
        <option className="text-gray-900" value="hi">
          {t("hi")}
        </option>
        <option className="text-gray-900" value="ko">
          {t("ko")}
        </option>
        <option className="text-gray-900" value="it">
          {t("it")}
        </option>
      </select>
    </div>
  );
};

export default LanguageChanger;
