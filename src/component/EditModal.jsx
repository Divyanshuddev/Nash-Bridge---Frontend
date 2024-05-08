import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Card, Avatar, CardContent, Select, MenuItem } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal({ openModal, closeModal }) {
  const [slot, setSlot] = React.useState(0);
  const [open, setOpen] = React.useState(openModal);
  const handleChange = (event) => {
    setSlot(event.target.value);
  };
  return (
    <div>
      <Modal
        open={open}
        disableEscapeKeyDown={true}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Card
            sx={{ minWidth: 75, padding: 2, borderRadius: 5 }}
            elevation={0}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <Avatar sx={{ width: 100, height: 100 }} />
              <CardContent
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <Typography variant="h6" fontWeight={'bold'}>Name :</Typography>
                  <Typography variant="h5">User Name</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <Typography variant="h6" fontWeight={'bold'}>Department :</Typography>
                  <Typography variant="h5">Department Name</Typography>
                </Box>
                
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                <Typography variant="h6" fontWeight={'bold'}>Slot Title : </Typography>
                <Typography variant="h5">Testing</Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="h6" fontWeight={'bold'}>Description</Typography>
                  <Typography variant="h6" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", gap: 1 }}>
                  <Typography variant="h5" fontWeight={'bold'}>Slot :</Typography>
                  <Select
                    value={slot}
                    sx={{ width: "50%", height: "70%" }}
                    onChange={handleChange}
                  >
                    <MenuItem value={0}>Book Slot</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </Box>
              </CardContent>
            </Box>
            <Box sx={{ display: "flex",flexDirection:"row", justifyContent: "flex-end",gap:4 }}>
            <Button variant="contained" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="contained" onClick={closeModal}>
                Confirm
              </Button>
            </Box>
          </Card>
        </Box>
      </Modal>
    </div>
  );
}
