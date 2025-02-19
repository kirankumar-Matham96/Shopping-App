import { useSelector, useDispatch } from "react-redux";
import { setLanguage, languageSelector } from "../redux/slices/languageSlice";
// import { useTranslation } from "react-i18next";
import { useTranslate } from "../hooks/useTranslate";
import i18n from "../i18next";

const LanguageChanger = () => {
  const { language } = useSelector(languageSelector);
  console.log("🚀 ~ LanguageChanger ~ language:", language);
  const dispatch = useDispatch();
  const { t } = useTranslate();

  const changeLanguage = (e) => {
    dispatch(setLanguage(e.target.value));
    i18n.changeLanguage(e.target.value);
  };

  /**
   * English, Spanish, French, German, Chinese,
Japanese, Arabic, Russian, Portuguese, Hindi, Korean, and Italian
   */

  return (
    <div>
      <select onChange={changeLanguage} value={language}>
        <option value="en">{t("english")}</option>
        <option value="es">{t("spanish")}</option>
        <option value="fr">{t("french")}</option>
        <option value="de">{t("german")}</option>
        <option value="zh">{t("chinese")}</option>
        <option value="ja">{t("japanese")}</option>
        <option value="ar">{t("arabic")}</option>
        <option value="ru">{t("russian")}</option>
        <option value="pt">{t("portuguese")}</option>
        <option value="hi">{t("hindi")}</option>
        <option value="ko">{t("korean")}</option>
        <option value="it">{t("italian")}</option>
      </select>
    </div>
  );
};

export default LanguageChanger;
