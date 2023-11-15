import { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { AppRouter } from "./router/AppRouter";
import { AuthContext } from "./context/AuthContext";
import PublicRouter from "./router/PublicRouter";

function App() {
  const { user } = useContext(AuthContext);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(user.lang);
  }, [user.lang]);

  return (
    <BrowserRouter>
      {user.isLogged ? <AppRouter /> : <PublicRouter />}
    </BrowserRouter>
  );
}

export default App;
