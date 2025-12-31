import { Box, Button as MUIButton } from "@mui/material";
import "./index.css";
import type { MouseEventHandler } from "react";
import { Typo } from "../screen";

type ButtonProps = {
  label: string;
  onClick: MouseEventHandler;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MUIButton
        disableRipple
        className="button-10"
        role="button"
        onClick={onClick}
      >
        <Typo
          sx={{
            textDecoration: "underline",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "1rem!important",
          }}
        >
          {label}
        </Typo>
      </MUIButton>
    </Box>
  );
};

export default Button;
