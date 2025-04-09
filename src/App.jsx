import "./App.css";
import Grid from "@mui/material/Grid";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactSearch from "./components/ContactSearch";

function App() {
    return (
        <div className="paper-wrap">
            <h1>My Contact</h1>
            <Grid container spacing={2}>
                <Grid size={5}>
                    <ContactForm />
                    <ContactSearch />
                </Grid>
                <Grid size={7}>
                    <ContactList />
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
