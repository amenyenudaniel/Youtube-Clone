import { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";

import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos } from "./";

const SearchFeed = ({ lightmode }) => {
  const [videos, setVideos] = useState(null);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight="95vh">
      {lightmode ? (
        <Typography
          variant="h4"
          fontWeight={900}
          color="#000"
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
      ) : (
        <Typography
          variant="h4"
          fontWeight={900}
          color="white"
          mb={3}
          ml={{ sm: "100px" }}
        >
          Search Results for{" "}
          <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
        </Typography>
      )}

      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} lightmode={lightmode} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
