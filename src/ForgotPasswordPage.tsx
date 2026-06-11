import React, { useState } from "react";
import {
  Box,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBack";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AppTextField from "./components/AppTextField";
import PageHeader from "./components/PageHeader";
import type { PageProps } from "./types";

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
  successAlert: {
    borderRadius: 20,
    border: "1px solid rgba(18,183,106,0.24)",
    backgroundColor: "rgba(18,183,106,0.08)",
    padding: theme.spacing(2.5),
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(1.5),
    marginBottom: theme.spacing(3),
  },
  successIcon: {
    color: "#12b76a",
    fontSize: 28,
    marginTop: 2,
  },
  successTitle: {
    color: "#111827",
    fontWeight: 800,
    fontSize: 16,
    marginBottom: theme.spacing(0.75),
  },
  successText: {
    color: theme.palette.text.secondary,
    fontSize: 15,
    lineHeight: 1.6,
  },
  successEmail: {
    color: "#111827",
    fontWeight: 800,
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

export default function ForgotPasswordPage({ t, language, onLanguageChange }: PageProps) {
  const classes = useStyles();
  const copy = t.forgotPassword;
  const [isSent, setIsSent] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = String(form.get("email") || "");

    console.log({ email });
    setSubmittedEmail(email);
    setIsSent(true);
  };

  return (
    <Box className={classes.root}>
      <PageHeader t={t} language={language} onLanguageChange={onLanguageChange} />

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

          {isSent ? (
            <>
              <Box className={classes.successAlert}>
                <CheckCircleOutlineIcon className={classes.successIcon} />
                <Box>
                  <Typography className={classes.successTitle}>
                    {copy.successTitle}
                  </Typography>
                  <Typography className={classes.successText}>
                    {copy.successMessage}{" "}
                    <span className={classes.successEmail}>
                      {submittedEmail}
                    </span>
                  </Typography>
                </Box>
              </Box>

              <Button
                component={RouterLink}
                to="/login"
                variant="contained"
                color="primary"
                fullWidth
                className={classes.submitButton}
              >
                {copy.backToLogin}
              </Button>
            </>
          ) : (
            <>
              <Box component="form" onSubmit={handleSubmit} className={classes.form}>
                <AppTextField
                  name="email"
                  label={copy.email.label}
                  type="email"
                  placeholder={copy.email.placeholder}
                  required
                  className={classes.textField}
                  startIcon={<EmailOutlinedIcon />}
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
            </>
          )}
        </Paper>
      </Box>
    </Box>
  );
}
