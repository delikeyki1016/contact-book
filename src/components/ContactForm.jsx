import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import usePhoneBookStore from "../stores/usePhoneBookStore";
import AddIcon from "@mui/icons-material/Add";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const { addContact } = usePhoneBookStore();

    const handleAddContact = () => {
        if (!name.trim() || !phoneNumber.trim()) return;
        addContact(name, phoneNumber);
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleAddContact();
                setName("");
                setPhoneNumber("");
            }}
        >
            <Box
                display="flex"
                flexDirection={"column"}
                alignItems={"center"}
                gap={2}
            >
                <TextField
                    id="name"
                    value={name}
                    label="이름"
                    variant="standard"
                    color="warning"
                    fullWidth
                    onChange={(e) => setName(e.target.value)}
                />
                <TextField
                    id="phoneNumber"
                    value={phoneNumber}
                    label="연락처"
                    variant="standard"
                    color="warning"
                    fullWidth
                    type="number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    type="submit"
                >
                    추가
                    <AddIcon fontSize="small" />
                </Button>
            </Box>
        </form>
    );
};
export default ContactForm;
