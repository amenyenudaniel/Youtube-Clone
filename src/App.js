import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  ScrollToTop,
} from "./components";

const App = () => {
  const [lightmode, setLightmode] = useState(true);
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Box sx={{ backgroundColor: lightmode ? "#fff" : "#000" }}>
        <Navbar lightmode={lightmode} setLightmode={setLightmode} />
        <Routes>
          <Route exact path="/" element={<Feed lightmode={lightmode} />} />
          <Route
            path="/video/:id"
            element={<VideoDetail lightmode={lightmode} />}
          />
          <Route
            path="/channel/:id"
            element={<ChannelDetail lightmode={lightmode} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed lightmode={lightmode} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
