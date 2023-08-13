import {
  Box,
  FormControl,
  ImageList,
  MenuItem,
  OutlinedInput,
  Select,
  Typography
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
        <link rel="icon" href="/images/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital@1&family=Lora&family=Playfair+Display&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <div className={styles.gradientBox}>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
          >
            <h1 className={styles.title}>Pixels & Palettes</h1>
            <h3 className={styles.bio}>
              This semester, I discussed how my passions of digital art and
              computer science are closely connected. While these two
              disciplines may seem unrelated, I argue that they’re quite similar
              since they're both creative outlets that empower me to make
              anything I can imagine. For this project, I wanted to bring this
              connection to life in a way that also conveys my biggest passions.
            </h3>
          </Box>
        </div>

        <Box
          ms={3}
          me={3}
          p={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography sx={{ fontFamily: "Playfair Display" }} variant="h6">
            Select a project type:
          </Typography>
          <FormControl sx={{ m: 1 }} size="normal">
            <Select
              id="demo-simple-select"
              value={filterSelection}
              input={
                <OutlinedInput
                  sx={{ fontSize: "1.2em", fontFamily: "Playfair Display" }}
                />
              }
              onChange={(event) => handleChange(event.target.value)}
            >
              <MenuItem sx={{ fontFamily: "Playfair Display" }} value={"ALL"}>
                All
              </MenuItem>
              <MenuItem sx={{ fontFamily: "Playfair Display" }} value={"TECH"}>
                Technical
              </MenuItem>
              <MenuItem sx={{ fontFamily: "Playfair Display" }} value={"ART"}>
                Art
              </MenuItem>
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
          background: #faf9f6;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
