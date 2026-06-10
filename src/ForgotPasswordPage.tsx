import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBack";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LanguageMenu from "./LanguageMenu";
import type { LanguageCode, Locale } from "./locales";

interface PageProps {
  t: Locale;
  language: LanguageCode;
  onLanguageChange: (language: LanguageCode) => void;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
  paper: {
    width: "100%",
    maxWidth: 520,
    padding: theme.spacing(3),
    borderRadius: 32,
    border: "1px solid rgba(17,24,39,0.08)",
    boxShadow: "0 24px 70px rgba(17,24,39,0.10)",
    backgroundColor: "rgba(255,255,255,0.96)",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4.5),
    },
  },
  iconBox: {
    width: 64,
    height: 64,
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,138,0,0.12)",
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "#111827",
    letterSpacing: "-0.04em",
    marginBottom: theme.spacing(1.5),
    [theme.breakpoints.up("md")]: {
      fontSize: 36,
    },
  },
  description: {
    color: theme.palette.text.secondary,
    fontSize: 16,
    lineHeight: 1.7,
    marginBottom: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginBottom: theme.spacing(3),
    "& .MuiOutlinedInput-root": {
      minHeight: 58,
      borderRadius: 18,
      backgroundColor: "#ffffff",
    },
  },
  submitButton: {
    height: 54,
    borderRadius: 18,
    fontWeight: 800,
    textTransform: "uppercase",
    boxShadow: "0 14px 30px rgba(255,138,0,0.32)",
  },
  backLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(3),
  },
  backIcon: {
    fontSize: 18,
    color: theme.palette.text.secondary,
  },
  backLinkText: {
    color: theme.palette.text.secondary,
    fontWeight: 600,
    fontSize: 14,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

const navLinkStyle: React.CSSProperties = {
  color: "#111827",
  fontWeight: 500,
  textTransform: "uppercase",
  marginLeft: 24,
  textDecoration: "none",
  fontSize: 15,
};

const Header: React.FC<PageProps> = ({ t, language, onLanguageChange }) => (
  <AppBar position="static" elevation={0} style={{ backgroundColor: "transparent", boxShadow: "none", borderBottom: "1px solid rgba(17,24,39,0.08)" }}>
    <Container maxWidth="lg" style={{ display: "flex", alignItems: "center", minHeight: 72 }}>
      <RouterLink to="/login" style={{ fontWeight: 900, fontSize: 28, color: "#ff8a00", letterSpacing: "-0.06em", textDecoration: "none" }}>
        voopty
      </RouterLink>
      <Box style={{ flex: 1 }} />
      <RouterLink to="/register" style={navLinkStyle}>{t.nav.join}</RouterLink>
      <RouterLink to="/login" style={navLinkStyle}>{t.nav.login}</RouterLink>
      <LanguageMenu language={language} onLanguageChange={onLanguageChange} style={navLinkStyle} />
    </Container>
  </AppBar>
);

export default function ForgotPasswordPage({ t, language, onLanguageChange }: PageProps) {
  const classes = useStyles();
  const copy = t.forgotPassword;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get("email");

    console.log({ email });
  };

  return (
    <Box className={classes.root}>
      <Header t={t} language={language} onLanguageChange={onLanguageChange} />

      <Box className={classes.main}>
        <Paper elevation={0} className={classes.paper}>
          <Box className={classes.iconBox}>
            <LockOutlinedIcon style={{ fontSize: 34 }} />
          </Box>

          <Typography component="h1" className={classes.title}>
            {copy.title}
          </Typography>

          <Typography className={classes.description}>
            {copy.description}
          </Typography>

          <Box component="form" onSubmit={handleSubmit} className={classes.form}>
            <TextField
              name="email"
              label={copy.email.label}
              type="email"
              placeholder={copy.email.placeholder}
              fullWidth
              required
              variant="outlined"
              className={classes.textField}
              InputProps={{
                startAdornment: (
                  <Box style={{ marginRight: 12, color: "#667085", display: "flex" }}>
                    <EmailOutlinedIcon />
                  </Box>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className={classes.submitButton}
            >
              {copy.submit}
            </Button>
          </Box>

          <Box className={classes.backLink}>
            <ArrowBackRoundedIcon className={classes.backIcon} />
            <RouterLink to="/login" className={classes.backLinkText}>
              {copy.backToLogin}
            </RouterLink>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
