import { useSelector } from "react-redux";
import { languageSelector } from "../redux/slices/languageSlice";

export const useTranslate = () => {
  const { language, translations } = useSelector(languageSelector);

  const t = (key) =>
    translations[language]?.[key] || translations["en"]?.key || key;

  return { t };
};
