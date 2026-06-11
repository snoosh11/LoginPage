import React from "react";
import { Box, Typography } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import type { FeatureItemProps } from "../../types";
import styles from "./FeatureItem.module.css";

export default function FeatureItem({ text }: FeatureItemProps) {
  return (
    <Box className={styles.item}>
      <CheckCircleOutlineIcon className={styles.icon} />
      <Typography className={styles.text}>{text}</Typography>
    </Box>
  );
}
