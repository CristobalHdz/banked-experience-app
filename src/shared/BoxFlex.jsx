import Box from "@mui/material/Box";

const BoxFlex = (props) => {
  const classes = props.additionStyles;
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{
        classes,
        borderTop: { xs: 0.5, sm: 0 },
        borderLeft: { xs: 0.5, sm: 0 },
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxFlex;
