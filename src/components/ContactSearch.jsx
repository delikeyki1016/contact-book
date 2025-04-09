import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactSearch = () => {
    const [keyword, setKeyword] = useState("");
    const { setSearchKeyword } = usePhoneBookStore();

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                }}
            >
                <Box className="search-bar">
                    <TextField
                        id="search"
                        value={keyword}
                        label="검색"
                        variant="standard"
                        color="warning"
                        fullWidth
                        onChange={(e) => {
                            setKeyword(e.target.value);
                            setSearchKeyword(e.target.value.trim());
                        }}
                    />
                    <SearchIcon fontSize="small" type="submit" />
                </Box>
                <Button
                    variant="contained"
                    color="warning"
                    fullWidth
                    sx={{ marginTop: 2 }}
                    onClick={() => {
                        setKeyword("");
                        setSearchKeyword("");
                    }}
                >
                    전체보기
                </Button>
            </form>
        </>
    );
};
export default ContactSearch;
