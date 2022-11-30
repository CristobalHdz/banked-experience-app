// Components imports
import InfoLayout from "../components/InfoLayout";

// MUI imports
import Grid from "@mui/material/Grid";

const DUMMY_PLAYER = {
  rsName: "lalala",
  cookingLvl: 50,
  cookingXp: 101333,
};

const DUMMY_DATA = [
  {
    itemId: 1,
    member: true,
    name: "raw rocktail",
    experience: 245,
    level: 85,
    imageUrl: "https://runescape.wiki/images/Raw_rocktail.png?f05cc",
  },
  {
    itemId: 2,
    member: false,
    name: "raw shrimp",
    experience: 31.8,
    level: 1,
    imageUrl: "https://runescape.wiki/images/Raw_shrimps.png?575eb",
  },
];

const Mainview = () => {
  const itemList = DUMMY_DATA.map((data) => {
    return (
      <Grid item xs={12} md={8} key={data.itemId} marginBottom={1}>
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
