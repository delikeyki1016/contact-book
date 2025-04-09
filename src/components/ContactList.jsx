import { Box, Typography } from "@mui/material";
import usePhoneBookStore from "../stores/usePhoneBookStore";

const ContactList = () => {
    const { phoneBook, searchKeyword } = usePhoneBookStore();
    console.log(phoneBook);
    const filteredList = searchKeyword
        ? phoneBook.filter((item) => item.name.includes(searchKeyword))
        : phoneBook;
    return (
        <>
            {filteredList.length > 0 ? (
                <ul className="phone-book-list">
                    {filteredList.map((item, index) => (
                        <li key={item?.id ?? `empty-${index}`}>
                            <Typography>
                                {item?.name}{" "}
                                <a href={`tel:${item?.phoneNumber}`}>
                                    {item?.phoneNumber}
                                </a>
                            </Typography>
                        </li>
                    ))}
                </ul>
            ) : (
                <Box
                    className="phone-book-list"
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                >
                    <Typography>검색결과가 없습니다.</Typography>
                </Box>
            )}
        </>
    );
};
export default ContactList;
