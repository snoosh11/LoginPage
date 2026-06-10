import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
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
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: theme.spacing(3),
    padding: theme.spacing(4, 2),
    maxWidth: 1440,
    margin: "0 auto",
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
}));

const navLinkStyle: React.CSSProperties = {
  color: "#111827",
  fontWeight: 500,
  textTransform: "uppercase",
  marginLeft: 24,
  textDecoration: "none",
  fontSize: 15,
};

const ChipCard: React.FC<{ number: string; label: string; numberFontSize?: number }> = ({
  number,
  label,
  numberFontSize = 26,
}) => (
  <Box style={{ padding: 20, borderRadius: 16, backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center" }}>
    <Typography style={{ color: "#ff8a00", fontSize: numberFontSize, fontWeight: 900, lineHeight: 1.15 }}>
      {number}
    </Typography>
    <Typography style={{ color: "rgba(255,255,255,0.78)", marginTop: 4, fontSize: 13, textTransform: "uppercase" }}>
      {label}
    </Typography>
  </Box>
);

const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
  <Box style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
    <CheckCircleOutlineIcon style={{ color: "#ff8a00" }} />
    <Typography style={{ marginLeft: 12, fontWeight: 700, fontSize: 15 }}>{text}</Typography>
  </Box>
);

const Header: React.FC<PageProps> = ({ t, language, onLanguageChange }) => (
  <AppBar position="static" elevation={0} style={{ backgroundColor: "transparent", boxShadow: "none", borderBottom: "1px solid rgba(17,24,39,0.08)" }}>
    <Container maxWidth="lg" style={{ display: "flex", alignItems: "center", minHeight: 72 }}>
      <RouterLink to="/register" style={{ fontWeight: 900, fontSize: 28, color: "#ff8a00", letterSpacing: "-0.06em", textDecoration: "none" }}>
        voopty
      </RouterLink>
      <Box style={{ flex: 1 }} />
      <RouterLink to="/register" style={navLinkStyle}>{t.nav.join}</RouterLink>
      <RouterLink to="/login" style={navLinkStyle}>{t.nav.login}</RouterLink>
      <LanguageMenu language={language} onLanguageChange={onLanguageChange} style={navLinkStyle} />
    </Container>
  </AppBar>
);

const WelcomeCard: React.FC<{ t: Locale; className?: string }> = ({ t, className }) => (
  <Paper
    elevation={0}
    className={className}
    style={{
      padding: 44,
      borderRadius: 24,
      background: "linear-gradient(135deg, #0f172a 0%, #111827 54%, #ff7a00 145%)",
      color: "#ffffff",
      boxShadow: "0 28px 80px rgba(17,24,39,0.22)",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: 720,
    }}
  >
    <Box style={{ position: "absolute", width: 320, height: 320, borderRadius: "5%", right: -90, top: 70, backgroundColor: "rgba(255,255,255,0.08)" }} />
    <Box>
      <Typography style={{ letterSpacing: "0.08em", textTransform: "uppercase", fontSize: 13, fontWeight: 700, color: "#ffb74d", marginBottom: 24 }}>
        {t.register.panel.subtitle}
      </Typography>
      <Typography style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.04em", maxWidth: 480 }}>
        {t.register.panel.title}
      </Typography>
      <Typography style={{ marginTop: 24, color: "rgba(255,255,255,0.72)", fontSize: 18, lineHeight: 1.7, maxWidth: 470 }}>
        {t.register.panel.description}
      </Typography>
      <Box style={{ marginTop: 40 }}>
        {t.register.panel.features.map((feature) => (
          <FeatureItem key={feature} text={feature} />
        ))}
      </Box>
    </Box>
    <Box style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
      {t.register.panel.chips.map((chip) => (
        <ChipCard key={`${chip.number}-${chip.label}`} {...chip} />
      ))}
    </Box>
  </Paper>
);

interface RegisterFormProps {
  t: Locale;
  selectedSource: string;
  onSourceChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  t,
  selectedSource,
  onSourceChange,
  onSubmit,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const form = t.register.form;

  const handleClickShowPassword = () => {
    setShowPassword((value) => !value);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Paper elevation={0} style={{ padding: 32, borderRadius: 24, backgroundColor: "#ffffff", boxShadow: "0 24px 80px rgba(17,24,39,0.08)" }}>
      <Typography style={{ fontWeight: 900, fontSize: 28, marginBottom: 8 }}>{form.title}</Typography>
      <Typography style={{ color: "#667085", marginBottom: 24 }}>{form.subtitle}</Typography>

      <form onSubmit={onSubmit}>
        <Box style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, alignItems: "start" }}>
          <Box>
            <TextField name="schoolName" label={form.schoolName.label} placeholder={form.schoolName.placeholder} fullWidth required variant="outlined" margin="normal" />
            <TextField name="email" label={form.email.label} type="email" placeholder={form.email.placeholder} fullWidth required variant="outlined" margin="normal" />
            <TextField name="phone" label={form.phone.label} placeholder={form.phone.placeholder} fullWidth required variant="outlined" margin="normal" />
            <TextField
              name="password"
              label={form.password.label}
              type={showPassword ? "text" : "password"}
              placeholder={form.password.placeholder}
              fullWidth
              required
              variant="outlined"
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <FormControlLabel
              control={<Checkbox name="acceptedTerms" color="primary" />}
              label={
                <Typography style={{ fontSize: 14 }}>
                  {form.acceptTerms}{" "}
                  <RouterLink to="/register" style={{ fontWeight: 800, color: "#ff8a00" }}>
                    {form.termsLink}
                  </RouterLink>
                </Typography>
              }
              style={{ marginTop: 12, marginLeft: 0 }}
            />
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={<Typography style={{ fontSize: 14, fontWeight: 700 }}>{form.notRobot}</Typography>}
              style={{ marginTop: 4, marginLeft: 0 }}
            />
          </Box>

          <Box>
            <Typography style={{ fontWeight: 700, marginBottom: 8 }}>{form.sourceQuestion}</Typography>
            <FormControl component="fieldset" style={{ width: "100%" }}>
              <RadioGroup name="source" value={selectedSource} onChange={onSourceChange}>
                {form.sourceOptions.map((option) => (
                  <FormControlLabel
                    key={option.value}
                    value={option.value}
                    control={<Radio color="primary" />}
                    label={<Typography style={{ lineHeight: 1.5 }}>{option.label}</Typography>}
                    style={{ marginLeft: 0 }}
                  />
                ))}
              </RadioGroup>
              {selectedSource === "other" && (
                <TextField name="sourceOther" label={form.sourceOther.label} placeholder={form.sourceOther.placeholder} fullWidth variant="outlined" margin="normal" />
              )}
            </FormControl>
          </Box>
        </Box>

        <Box style={{ marginTop: 24, borderRadius: 24, backgroundColor: "#eef6ff", display: "flex", alignItems: "center", padding: 16, gap: 8 }}>
          <InfoOutlinedIcon />
          <Typography style={{ fontSize: 14 }}>{form.alert}</Typography>
        </Box>

        <Button type="submit" variant="contained" color="primary" fullWidth style={{ borderRadius: 16, height: 52, textTransform: "uppercase", fontWeight: 900, marginTop: 16, boxShadow: "0 14px 30px rgba(255,138,0,0.32)" }}>
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
      <Header t={t} language={language} onLanguageChange={onLanguageChange} />
      <Box className={classes.main}>
        <WelcomeCard t={t} className={classes.leftPanel} />
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
