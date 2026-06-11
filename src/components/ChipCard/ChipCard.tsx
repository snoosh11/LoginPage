import React from "react";
import { Box, Typography } from "@material-ui/core";
import type { ChipCardProps } from "../../types";
import styles from "./ChipCard.module.css";

export default function ChipCard({
  number,
  label,
  numberFontSize = 26,
}: ChipCardProps) {
  return (
    <Box className={styles.card}>
      <Typography
        className={styles.number}
        style={{ fontSize: numberFontSize }}
      >
        {number}
      </Typography>
      <Typography className={styles.label}>{label}</Typography>
    </Box>
  );
}
