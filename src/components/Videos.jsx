import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction, lightmode }) => {
  if (!videos?.length) return <Loader />;

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      sx={{
        justifyContent: { xs: "center", md: "start" },
      }}
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} lightmode={lightmode} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} lightmode={lightmode} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
