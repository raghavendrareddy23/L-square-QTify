import React from "react";
// import styles from "./Accordian.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/system";

const useStyles = styled({
  content: {
    display: "flex",
    justifyContent: "center",
    fontSize: "50px",
    marginTop: "32px",
  },
  root: {
    width: "60vw",
    margin: "auto",
    background: "black",
    color: "white",
    borderRadius: 5,
    border: "2px solid #FFFFFF",
  },
  main: {
    background: "black",
    color: "white",
  },
});

function Accordian() {
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.content}>FAQ's</h1>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            className={classes.main}
            expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Is QTify free to use?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>Yes, you can use for free.</Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <br />
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            className={classes.main}
            expandIcon={<ExpandMoreIcon style={{ color: "#34c94b" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Can I download and listen to songs offline?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Sorry, unfortunately we don't provide the service to download any
              songs.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <hr style={{ marginTop: "24px" }} />
    </div>
  );
}

export default Accordian;