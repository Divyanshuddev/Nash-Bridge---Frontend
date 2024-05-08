// import React from 'react'
// import Modal from "@mui/material/Modal";
// import { Card, Avatar, CardContent, Select, MenuItem,Box,Typography,Button, TextField } from "@mui/material";
// const style = {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: "translate(-50%, -50%)",
//     bgcolor: "background.paper",
//     border: "2px solid #000",
//     boxShadow: 24,
//     p: 4,
//   };

// export default function CreateSlotModal() {
//     const [slot, setSlot] = React.useState(0);
//   const [open, setOpen] = React.useState(false);
//   const [formData,setFormData]= React.useState({title:"asds",description:"cdscvfg",slot:"csdcfv"})
//   const handleChange = (event) => {
//     setSlot(event.target.value);
//   };
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };
//   const handleCreateModal = async (e) => {
//     e.preventDefault();
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");

//     const raw = JSON.stringify({
//         id:2,
//       title:formData.title,
//       description:formData.description,
//       slot:formData.slot
//     });

//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     try {
//       const response = await fetch(
//         "http://localhost:3000/practice",
//         requestOptions
//       );
//       if (response.ok) {
//         const data = await response.json();
//       }
//     } catch (err) {
//       console.log(err);
//     } finally {
//       console.log('ok')
//     }
//   };
//   return (
//     <div>
//         <Modal
//         open={open}
//         disableEscapeKeyDown={true}
//         onClose={closeModal}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box sx={style}>
//           <Card
//             sx={{ minWidth: 75, padding: 2, borderRadius: 5 }}
//             elevation={0}
//           >

//            <TextField value={formData.title} onChange={handleInput}  />
//            <TextField value={formData.description} onChange={handleInput} />
//            <TextField value={formData.slot} onChange={handleInput} />
//             <Box sx={{ display: "flex",flexDirection:"row", justifyContent: "flex-end",gap:4 }}>
//             <Button variant="contained" onClick={closeModal}>
//                 Cancel
//               </Button>
//               <Button variant="contained" onClick={closeModal}>
//                 Confirm
//               </Button>
//             </Box>
//           </Card>
//         </Box>
//       </Modal>
//     </div>
//   )
// }
