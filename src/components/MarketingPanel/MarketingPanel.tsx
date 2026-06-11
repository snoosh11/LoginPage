import React from "react";
import { Box, Paper, Typography } from "@material-ui/core";
import ChipCard from "../ChipCard";
import FeatureItem from "../FeatureItem";
import type { MarketingPanelProps } from "../../types";
import styles from "./MarketingPanel.module.css";

export default function MarketingPanel({
  panel,
  variant = "login",
  className,
}: MarketingPanelProps) {
  const titleClassName = [
    styles.title,
    variant === "register" ? styles.registerTitle : styles.loginTitle,
  ].join(" ");
  const descriptionClassName = [
    styles.description,
    variant === "register"
      ? styles.registerDescription
      : styles.loginDescription,
  ].join(" ");
  const panelClassName = [styles.panel, className].filter(Boolean).join(" ");

  return (
    <Paper elevation={0} className={panelClassName}>
      <Box className={styles.decor} />
      <Box>
        <Typography className={styles.subtitle}>{panel.subtitle}</Typography>
        <Typography className={titleClassName}>{panel.title}</Typography>
        <Typography className={descriptionClassName}>
          {panel.description}
        </Typography>
        <Box className={styles.features}>
          {panel.features.map((feature) => (
            <FeatureItem key={feature} text={feature} />
          ))}
        </Box>
      </Box>
      <Box className={styles.chips}>
        {panel.chips.map((chip) => (
          <ChipCard key={`${chip.number}-${chip.label}`} {...chip} />
        ))}
      </Box>
    </Paper>
  );
}
