import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      backgroundColor: "#030D15",
      height: "150px",
      padding: "0",
    },
    ftrp: {
      color: "white",
    },
  })
);

function Footer() {
  const classes = useStyles();

  return (
    <Grid className={classes.footer}>
      <Grid>
        <Typography className={classes.ftrp}>
          STORE - worldwide fashion store since 1978. We sell over 1000+ branded
          products on our web-site.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
