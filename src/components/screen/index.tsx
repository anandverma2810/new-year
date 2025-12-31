import Layout from "../layout";
import Button from "../button";
import { styled, Typography, Stack, Box } from "@mui/material";

export const Typo = styled(Typography)({
  color: "#463030",
  fontFamily: "fantasy",
  fontWeight: 800,
  fontSize: "1rem",
});

type ActionButton = {
  label: string;
  onClick: () => void;
};

type ScreenProps = {
  messages?: string[];
  actions?: ActionButton[];
  image?: string;
  overlayImage?: string;
  imageProps?: {
    width: string | number;
    height?: string | number;
    isImageClick?: boolean;
  };
};

const Screen = ({
  messages,
  actions,
  image,
  overlayImage,
  imageProps,
}: ScreenProps) => {
  const isImageClick = imageProps?.isImageClick;
  return (
    <Layout>
      <Box
        sx={{
          position: "relative",
          display: "inline-block",
        }}
      >
        <Box
          component={"img"}
          src={image}
          sx={{
            ...imageProps,
            p: "1rem",
            objectFit: "cover",
            cursor: isImageClick ? "pointer" : "default",
          }}
          {...(isImageClick && { onClick: actions?.[0].onClick })}
        />

        {overlayImage && (
          <Box
            component="img"
            src={overlayImage}
            sx={{
              position: "absolute",
              top: "-4rem",
              right: "2rem",
              transform: "translateX(50%)",
              width: "6rem",
              zIndex: 2,
            }}
          />
        )}
      </Box>

      {messages?.map((msg, index) => (
        <Typo key={index}>{msg}</Typo>
      ))}

      {!isImageClick && (
        <Stack direction="row" gap="4rem" p="2rem">
          {actions?.map((action, index) => (
            <Button key={index} label={action.label} onClick={action.onClick} />
          ))}
        </Stack>
      )}
    </Layout>
  );
};

export default Screen;
