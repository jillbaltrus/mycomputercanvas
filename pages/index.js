import {
  Avatar,
  Box,
  FormControl,
  ImageList,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useState } from "react";
import PortfolioCard from "../components/portfolio-card";
import data from "../public/data";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [filterSelection, setFilterSelection] = useState("ALL");
  const [projectsToDisplay, setProjectsToDisplay] = useState(data);

  const handleChange = (value) => {
    setFilterSelection(value);
    if (value == "ALL") {
      setProjectsToDisplay(data);
    } else if (value == "TECH") {
      setProjectsToDisplay(data.filter((item) => item.type == "TECH"));
    } else if (value == "ART") {
      setProjectsToDisplay(data.filter((item) => item.type == "ART"));
    } else {
      setProjectsToDisplay([]);
    }
  };

  return (
    <div>
      <Head>
        <title>Jillian Baltrus Portfolio</title>
      </Head>

      <main>
        <div className={styles.gradientBox}>
          <Avatar
            sx={{ width: 100, height: 100 }}
            src={"/images/avatar.png"}
            alt="Jillian"
          />
          <h1 className={styles.title}>My Computer Canvas</h1>
        </div>

        <Box p={1} display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h6">Select a project type:</Typography>
          <FormControl sx={{ m: 1 }} size="normal">
            <Select
              id="demo-simple-select"
              value={filterSelection}
              input={<OutlinedInput sx={{ fontSize: "1.2em" }} />}
              onChange={(event) => handleChange(event.target.value)}
            >
              <MenuItem value={"ALL"}>All</MenuItem>
              <MenuItem value={"TECH"}>Technical</MenuItem>
              <MenuItem value={"ART"}>Art</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <div className={styles.container}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {projectsToDisplay.map((item) => (
              <PortfolioCard key={item.id} cardData={item} />
            ))}
          </ImageList>
        </div>
      </main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background: #fcf3fa;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
