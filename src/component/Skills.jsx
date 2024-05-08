import React from "react";
import { Typography, Divider, Box, Button,TextField,Chip } from "@mui/material";
import Modal from '@mui/material/Modal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function Skills() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = React.useState({ skill: ""});
  const [skillSet, setSkillSet] = React.useState([]);

  const handleSkillChange = (event) => {
    let { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleSkill = (data) => {
    setSkillSet(prev => [...prev,data]);
    setInputs({skill:""})
    handleClose()
  }
  const handleDelete = (indexToDelete) => {
    const filteredSkill = skillSet.filter((skill, index) => index !== indexToDelete);
    setSkillSet(filteredSkill);
};

  return (
    <div>
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4">Skills</Typography>
        <Button variant="contained" onClick={()=>handleOpen()}>ADD</Button>
      </Box>
      <Divider sx={{ marginTop: "10px", marginBottom: "1rem" }} />
      <Box sx={{display:"flex",gap:3,flexWrap:"wrap"}} my={2}>
              {skillSet.map((item,index)=>(
                <Chip label={item.skill} variant="outlined" onDelete={()=>handleDelete(index)} key={item.id}  />
              ))}
              </Box>
    </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography>Add Skill</Typography>
        <Box
            sx={{
              display: "flex !important",
              flexDirection: "row",
              justifyContent: "center !important",
              gap: 2,
            }}
            padding={5}
          >
            <Box sx={{ display: "flex", flexDirection: "row" }}>
              <TextField
                label="Skill"
                color="primary"
                name="skill"
                value={inputs.skill}
                onChange={handleSkillChange}
              />
            </Box>
          </Box>
          <Box
          my={-2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: 3,
            marginBottom: "3px",
          }}
          padding={5}
        >
          <Button
            sx={{
              backgroundColor: "grey",
              color: "white",

              "&:hover ": {
                backgroundColor: "grey",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              },
            }}
            size="large"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            sx={{
              backgroundColor: "red",
              color: "white",

              "&:hover ": {
                backgroundColor: "red",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
              },
            }}
            size="large"
            onClick={()=>handleSkill(inputs)}
          >
            Add
          </Button>
        </Box>
        </Box>
      </Modal>
    </div>
  );
}
