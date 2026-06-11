import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AppTextField from "./components/AppTextField";
import MarketingPanel from "./components/MarketingPanel";
import PageHeader from "./components/PageHeader";
import type { PageProps, RegisterFormProps } from "./types";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
    overflowX: "hidden",
  },
  main: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
    padding: theme.spacing(3, 2),
    maxWidth: 1440,
    margin: "0 auto",
    boxSizing: "border-box",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      padding: theme.spacing(4, 3),
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: theme.spacing(4),
      padding: theme.spacing(6, 4),
    },
  },
  leftPanel: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  formPaper: {
    padding: theme.spacing(3),
    borderRadius: 24,
    backgroundColor: "#ffffff",
    boxShadow: "0 24px 80px rgba(17,24,39,0.08)",
    boxSizing: "border-box",
    overflow: "hidden",
    width: "100%",
    minWidth: 0,
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(4),
    },
  },
  formTitle: {
    fontWeight: 900,
    fontSize: 26,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      fontSize: 28,
    },
  },
  formSubtitle: {
    color: "#667085",
    marginBottom: theme.spacing(3),
    lineHeight: 1.55,
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
    alignItems: "start",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
      gap: theme.spacing(4),
    },
  },
  formColumn: {
    minWidth: 0,
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      minWidth: 0,
    },
    "& .MuiInputLabel-root": {
      maxWidth: "calc(100% - 28px)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  checkboxControl: {
    alignItems: "flex-start",
    marginLeft: 0,
    marginRight: 0,
    width: "100%",
  },
  checkboxLabel: {
    paddingTop: 9,
    minWidth: 0,
  },
  termsLabel: {
    fontSize: 14,
    lineHeight: 1.45,
    overflowWrap: "break-word",
  },
  termsLink: {
    fontWeight: 800,
    color: "#ff8a00",
  },
  alertBox: {
    marginTop: theme.spacing(3),
    borderRadius: 24,
    backgroundColor: "#eef6ff",
    display: "flex",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    gap: theme.spacing(1),
    minWidth: 0,
  },
  alertIcon: {
    flexShrink: 0,
    marginTop: 2,
  },
  alertText: {
    fontSize: 14,
    lineHeight: 1.55,
    minWidth: 0,
    overflowWrap: "break-word",
  },
  submitButton: {
    borderRadius: 16,
    height: 52,
    textTransform: "uppercase",
    fontWeight: 900,
    marginTop: theme.spacing(2),
    boxShadow: "0 14px 30px rgba(255,138,0,0.32)",
  },
}));

const RegisterForm: React.FC<RegisterFormProps> = ({
  t,
  selectedSource,
  onSourceChange,
  onSubmit,
}) => {
  const classes = useStyles();
  const form = t.register.form;

  return (
    <Paper elevation={0} className={classes.formPaper}>
      <Typography className={classes.formTitle}>{form.title}</Typography>
      <Typography className={classes.formSubtitle}>{form.subtitle}</Typography>

      <form onSubmit={onSubmit}>
        <Box className={classes.formGrid}>
          <Box className={classes.formColumn}>
            <AppTextField className={classes.textField} name="schoolName" label={form.schoolName.label} placeholder={form.schoolName.placeholder} required />
            <AppTextField className={classes.textField} name="email" label={form.email.label} type="email" placeholder={form.email.placeholder} required />
            <AppTextField className={classes.textField} name="phone" label={form.phone.label} placeholder={form.phone.placeholder} required />
            <AppTextField
              className={classes.textField}
              name="password"
              label={form.password.label}
              placeholder={form.password.placeholder}
              required
              passwordToggle
            />
            <FormControlLabel
              control={<Checkbox name="acceptedTerms" color="primary" />}
              classes={{ root: classes.checkboxControl, label: classes.checkboxLabel }}
              label={
                <Typography className={classes.termsLabel}>
                  {form.acceptTerms}{" "}
                  <RouterLink to="/terms-and-conditions" className={classes.termsLink}>
                    {form.termsLink}
                  </RouterLink>
                </Typography>
              }
              style={{ marginTop: 12 }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              classes={{ root: classes.checkboxControl, label: classes.checkboxLabel }}
              label={<Typography style={{ fontSize: 14, fontWeight: 700 }}>{form.notRobot}</Typography>}
              style={{ marginTop: 4 }}
            />
          </Box>

          <Box className={classes.formColumn}>
            <Typography style={{ fontWeight: 700, marginBottom: 8 }}>{form.sourceQuestion}</Typography>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <RadioGroup name="source" value={selectedSource} onChange={onSourceChange}>
                {form.sourceOptions.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio color="primary" />}
                    label={<Typography style={{ lineHeight: 1.5 }}>{option.label}</Typography>}
                    style={{ marginLeft: 0, marginRight: 0, width: "100%" }}
                  />
                ))}
              </RadioGroup>
              {selectedSource === "other" && (
                <AppTextField className={classes.textField} name="sourceOther" label={form.sourceOther.label} placeholder={form.sourceOther.placeholder} />
              )}
            </FormControl>
          </Box>
        </Box>

        <Box className={classes.alertBox}>
          <InfoOutlinedIcon className={classes.alertIcon} />
          <Typography className={classes.alertText}>{form.alert}</Typography>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth className={classes.submitButton}>
          {form.submit}
        </Button>
      </form>

      <Typography style={{ marginTop: 24, color: "#667085", fontSize: 14, textAlign: "center" }}>
        {form.hasAccount}{" "}
        <RouterLink to="/login" style={{ fontWeight: 700, color: "#ff8a00", textDecoration: "none" }}>
          {form.loginLink}
        </RouterLink>
      </Typography>
    </Paper>
  );
};

export default function RegisterPage({ t, language, onLanguageChange }: PageProps) {
  const classes = useStyles();
  const [selectedSource, setSelectedSource] = useState("google");

  const handleSourceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSource(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    console.log({
      schoolName: form.get("schoolName"),
      email: form.get("email"),
      phone: form.get("phone"),
      password: form.get("password"),
      source: form.get("source"),
      sourceOther: form.get("sourceOther"),
      acceptedTerms: form.get("acceptedTerms"),
    });
  };

  return (
    <Box className={classes.root}>
      <PageHeader
        t={t}
        language={language}
        onLanguageChange={onLanguageChange}
        logoTo="/register"
      />
      <Box className={classes.main}>
        <MarketingPanel
          panel={t.register.panel}
          variant="register"
          className={classes.leftPanel}
        />
        <RegisterForm
          t={t}
          selectedSource={selectedSource}
          onSourceChange={handleSourceChange}
          onSubmit={handleSubmit}
        />
      </Box>
    </Box>
  );
}
