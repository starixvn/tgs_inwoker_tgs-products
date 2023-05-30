import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import i18n from "i18next";

const PathWrapper = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    // Retrieve the stored language from local storage
    const storedLanguage = localStorage.getItem("i18nextLng");

    if (storedLanguage) {
      // Restore the stored language
      i18n.changeLanguage(storedLanguage);
    } else {
      // Extract the language from the initial path
      const language = extractLanguageFromPath(history.location.pathname);

      // Store the language in local storage and i18nextLng
      localStorage.setItem("i18nextLng", language);
      i18n.changeLanguage(language);
    }
  }, [history]);

  const handlePathUpdate = (location) => {
    // Extract the language from the updated path
    const language = extractLanguageFromPath(location.pathname);

    // Update the stored language in local storage and i18nextLng
    localStorage.setItem("i18nextLng", language);
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    // Listen for path updates and handle them
    const unlisten = history.listen(handlePathUpdate);

    return () => {
      // Clean up the listener when the component unmounts
      unlisten();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  const extractLanguageFromPath = (path) => {
    return path;
  };

  return children;
};

export default PathWrapper;
