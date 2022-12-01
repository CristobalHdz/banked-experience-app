// Components imports
import InfoLayout from "../components/InfoLayout";

// MUI imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

// Item info
import itemInfo from "../DataArray/ItemInfo.js";

const DUMMY_PLAYER = {
  rsName: "lalala",
  cookingLvl: 50,
  cookingXp: 101333,
};

const Mainview = () => {
  const itemList = itemInfo.map((data) => {
    return (
      <Grid item xs={12} sm={10} md={7} key={data.itemId} marginBottom={1}>
        <InfoLayout
          itemId={data.itemId}
          name={data.name}
          member={data.member}
          imageUrl={data.imageUrl}
          level={data.level}
          experience={data.experience}
        />
      </Grid>
    );
  });

  return (
    <section>
      <h1>The Mainview Page</h1>
      <Grid container justifyContent="center">
        {itemList}
      </Grid>
      <Button
        variant="contained"
        style={{
          textTransform: "none",
        }}
      >
        Submit
      </Button>
    </section>
  );
};

export default Mainview;
