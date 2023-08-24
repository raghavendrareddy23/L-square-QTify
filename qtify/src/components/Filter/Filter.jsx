import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "./Filter.module.css";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Filter({ data, selectFilterIndex, setSelectFilterIndex }) {
  const handleChange = (event, newValue) => {
    setSelectFilterIndex(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={selectFilterIndex}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                background: "var(--color-primary)",
              },
            }}
          >
            {data.map((ele, index) => (
              <Tab
                className={styles.tab}
                label={ele.label}
                key={ele.key} // Assign a unique key to each Tab
                {...a11yProps(index)} // Pass the correct index to a11yProps
              />
            ))}
          </Tabs>
        </Box>
      </Box>
    </div>
  );
}

export default Filter;
