import {
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React, { useState } from "react";

export default function PortfolioCard({ cardData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const allImages = [cardData.image, ...cardData.otherImages];

  return (
    <ImageListItem key={cardData.id}>
      <img
        src={`${cardData.image}`}
        alt={cardData.title}
        onClick={handleModalOpen}
        loading="lazy"
        style={{
          opacity: hover ? 0.7 : 1,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <ImageListItemBar
        sx={{
          height: "60px",
          "& .MuiImageListItemBar-title": {
            fontSize: "20px",
            fontFamily: "Playfair Display",
          },
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
        }}
        title={cardData.title}
      />

      <Dialog
        width={700}
        open={modalOpen}
        onClose={handleModalClose}
        scroll={"paper"}
      >
        <DialogTitle
          style={{
            paddingBottom: 0,
            marginBottom: 0,
            fontFamily: "Playfair Display",
          }}
          variant="h4"
        >
          {cardData.title}
        </DialogTitle>
        <DialogTitle
          style={{
            paddingTop: 0,
            marginTop: 0,
            paddingBottom: 4,
            marginInlineStart: 5,
            fontFamily: "Lora",
          }}
          variant="h6"
        >
          {cardData.year}
        </DialogTitle>

        <Divider variant="middle" sx={{ borderBottomWidth: 3 }} />

        <DialogContent pt={0} mt={0}>
          <DialogContentText pt={0} mt={0} sx={{ fontFamily: "Lora" }}>
            {cardData.description}
          </DialogContentText>
          <Box
            display="flex"
            flexDirection={"column"}
            alignItems="center"
            justifyContent="center"
            mt={2}
          >
            {allImages.map((image) => (
              <img
                src={image}
                alt={cardData.title}
                style={imageStyle}
                width={550}
              />
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </ImageListItem>
  );
}

const imageStyle = {
  marginBottom: 20,
};
