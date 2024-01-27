import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
  lightmode,
}) => (
  <Card
    sx={{
      width: { xs: "100%", sm: "358px", md: "320px" },
      boxShadow: "none",
      borderRadius: 0,
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "280px", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent
      sx={{
        backgroundColor: lightmode ? "rgba(226, 226, 226, 0.645)" : "#1E1E1E",
        height: "40px",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        {lightmode ? (
          <Typography variant="subtitle1" fontWeight="bold" color="#000">
            {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
          </Typography>
        ) : (
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 30) || demoVideoTitle.slice(0, 30)}
          </Typography>
        )}
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
