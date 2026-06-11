import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ForgotPasswordPage from "./ForgotPasswordPage";
import TermsAndConditionsPage from "./TermsAndConditionsPage";
import { locales } from "./locales";
import type { LanguageCode } from "./types";

export default function App() {
  const [language, setLanguage] = useState<LanguageCode>("UA");
  const t = locales[language];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={() => (
              <LoginPage
                t={t}
                language={language}
                onLanguageChange={setLanguage}
              />
            )}
          />
          <Route
            path="/register"
            render={() => (
              <RegisterPage
                t={t}
                language={language}
                onLanguageChange={setLanguage}
              />
            )}
          />
          <Route
            path="/terms-and-conditions"
            render={() => (
              <TermsAndConditionsPage
                t={t}
                language={language}
                onLanguageChange={setLanguage}
              />
            )}
          />
          <Route
            path="/forgot-password"
            render={() => (
              <ForgotPasswordPage
                t={t}
                language={language}
                onLanguageChange={setLanguage}
              />
            )}
          />
          <Redirect to="/login" />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
