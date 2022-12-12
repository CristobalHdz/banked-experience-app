/**
 * Table layout Ui
 */

import Box from "@mui/material/Box";

const BoxFlex = (props) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        justifyContent: { xs: "center", md: props.justifyItems },
        borderTop: { xs: 0.5, md: 0 },
        borderLeft: { xs: 0.5, md: 0 },
        borderBottom: { xs: props.borderStyle, md: 0 },
      }}
    >
      {props.children}
    </Box>
  );
};

export default BoxFlex;
