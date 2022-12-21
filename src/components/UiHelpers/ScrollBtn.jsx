import classes from "./ScrollBtn.module.css";

const scrollHandler = () => {
  window.scrollTo(0,0);
};

const ScrollBtn = () => {
  return (
    <button onClick={scrollHandler} className={classes.scrollbtn}>
      ︽
    </button>
  );
};

export default ScrollBtn;
