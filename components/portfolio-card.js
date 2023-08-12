import {
  Box,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

export default function PortfolioCard({ cardData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

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
      <ImageListItemBar title={cardData.title} />
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {cardData.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {cardData.description}
          </Typography>
        </Box>
      </Modal>
    </ImageListItem>
  );
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
