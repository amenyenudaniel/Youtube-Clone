import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { WbSunny } from "@mui/icons-material";
import { DarkMode } from "@mui/icons-material";
import { SearchBar } from "./";

const Navbar = ({ lightmode, setLightmode }) => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: lightmode ? "#fff" : "#000",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    {lightmode ? (
      <span
        style={{ color: "black", marginRight: "1rem", cursor: "pointer" }}
        title="LightMode"
        onClick={() => setLightmode(false)}
      >
        <DarkMode />
      </span>
    ) : (
      <span
        style={{ color: "white", marginRight: "1rem", cursor: "pointer" }}
        title="LightMode"
        onClick={() => setLightmode(true)}
      >
        <WbSunny />
      </span>
    )}
  </Stack>
);

export default Navbar;
