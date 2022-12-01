import Box from "@mui/material/Box";

const BoxFlex = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: { xs: "center", sm: "start" },
        borderTop: { xs: 0.5, sm: 0 },
        borderLeft: { xs: 0.5, sm: 0 },
        borderBottom: { xs: props.borderStyle, sm: 0 },
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxFlex;
