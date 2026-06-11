import React from "react";
import { Box, Button, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBack";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PageHeader from "./components/PageHeader";
import type { PageProps } from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    overflowX: "hidden",
  },
  main: {
    maxWidth: 1180,
    margin: "0 auto",
    padding: theme.spacing(3, 2),
    boxSizing: "border-box",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 3),
    },
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6, 3),
    },
  },
  paper: {
    padding: theme.spacing(3),
    borderRadius: 24,
    backgroundColor: "#ffffff",
    boxShadow: "0 24px 80px rgba(17,24,39,0.08)",
    border: "1px solid rgba(17,24,39,0.08)",
    boxSizing: "border-box",
    overflow: "hidden",
    width: "100%",
    minWidth: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(5),
    },
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: theme.spacing(1),
    color: theme.palette.primary.main,
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: theme.spacing(2),
    maxWidth: "100%",
    overflowWrap: "break-word",
  },
  title: {
    color: "#111827",
    fontSize: 30,
    fontWeight: 900,
    lineHeight: 1.14,
    marginBottom: theme.spacing(3),
    overflowWrap: "anywhere",
    wordBreak: "normal",
    hyphens: "auto",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: 28,
      lineHeight: 1.18,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 42,
    },
  },
  intro: {
    color: "#374151",
    fontSize: 16,
    lineHeight: 1.8,
    marginBottom: theme.spacing(4),
    overflowWrap: "anywhere",
  },
  section: {
    marginTop: theme.spacing(4),
  },
  sectionTitle: {
    color: "#111827",
    fontSize: 22,
    fontWeight: 900,
    marginBottom: theme.spacing(2),
    overflowWrap: "anywhere",
  },
  list: {
    margin: 0,
    paddingLeft: theme.spacing(2.5),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(3),
    },
  },
  item: {
    color: "#374151",
    fontSize: 16,
    lineHeight: 1.75,
    marginBottom: theme.spacing(1.25),
    overflowWrap: "break-word",
  },
  footer: {
    marginTop: theme.spacing(5),
    paddingTop: theme.spacing(3),
    borderTop: "1px solid rgba(17,24,39,0.08)",
    display: "flex",
    justifyContent: "flex-start",
  },
  backButton: {
    borderRadius: 16,
    height: 48,
    paddingLeft: theme.spacing(2.5),
    paddingRight: theme.spacing(2.5),
    textTransform: "none",
    fontWeight: 800,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

export default function TermsAndConditionsPage({
  t,
  language,
  onLanguageChange,
}: PageProps) {
  const classes = useStyles();
  const terms = t.termsAndConditions;

  return (
    <Box className={classes.root}>
      <PageHeader
        t={t}
        language={language}
        onLanguageChange={onLanguageChange}
        logoTo="/register"
      />

      <Box className={classes.main}>
        <Paper elevation={0} className={classes.paper}>
          <Typography className={classes.eyebrow}>
            <DescriptionOutlinedIcon fontSize="small" />
            {terms.eyebrow}
          </Typography>

          <Typography component="h1" className={classes.title}>
            {terms.title}
          </Typography>

          <Typography className={classes.intro}>{terms.intro}</Typography>

          {terms.sections.map((section) => (
            <Box key={section.title} className={classes.section}>
              <Typography component="h2" className={classes.sectionTitle}>
                {section.title}
              </Typography>
              <ul className={classes.list}>
                {section.items.map((item) => (
                  <li key={item} className={classes.item}>
                    {item}
                  </li>
                ))}
              </ul>
            </Box>
          ))}

          <Box className={classes.footer}>
            <Button
              component={RouterLink}
              to="/register"
              variant="contained"
              color="primary"
              className={classes.backButton}
              startIcon={<ArrowBackRoundedIcon />}
            >
              {terms.backToRegister}
            </Button>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
