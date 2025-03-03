// ### **3. 甜點社群**

// - 📸 **顧客分享甜點**
//     - 用戶可以上傳甜點照片 + 簡短心得
//     - 支援「標籤分類」（例如：#芋泥 #手工甜點 #低糖）
// - 🏆 **社群排行榜**
//     - 最受歡迎的甜點 & 店家會排名前列，增加流量曝光

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Avatar,
  Stack,
  Grid,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// 假設的社群分享資料
const posts = [
  {
    id: 1,
    user: "甜點初心者",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/300",
    tags: ["#低糖", "#手工甜點"],
    likes: 88,
  },
  {
    id: 2,
    user: "日式點心愛好者",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/300",
    tags: ["#抹茶", "#無麩質"],
    likes: 73,
  },
  {
    id: 3,
    user: "甜點愛好家",
    avatar: "https://via.placeholder.com/50",
    image: "https://via.placeholder.com/300",
    tags: ["#千層蛋糕", "#綿密口感"],
    likes: 65,
  },
];

// 假設的排行榜資料
const ranking = [
  { id: 1, name: "焦糖布丁", likes: 320 },
  { id: 2, name: "抹茶生巧克力", likes: 280 },
  { id: 3, name: "柚子磅蛋糕", likes: 190 },
];

const SocialPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 頁面標題 */}
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        甜點社群
      </Typography>

      <Grid container spacing={4}>
        {/* 左側：甜點照片牆 */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={6} md={4} key={post.id}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    backgroundColor: "#FAF5EF",
                    border: "1px solid #E0D5C1",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "100%",
                      height: 180,
                      borderRadius: "12px 12px 0 0",
                    }}
                    image={post.image}
                    alt="甜點照片"
                  />
                  <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Avatar src={post.avatar} />
                      <Typography variant="subtitle1">{post.user}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} mt={1}>
                      {post.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          size="small"
                          variant="outlined"
                          sx={{ borderRadius: 2, color: "#5C4033" }}
                        />
                      ))}
                    </Stack>
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={1}
                      mt={1}
                    >
                      <FavoriteBorderIcon sx={{ color: "#A67C52" }} />
                      <Typography sx={{ fontSize: "14px" }}>
                        {post.likes} 喜愛
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* 右側：社群排行榜 */}
        <Grid item xs={12} md={4}>
          <Box sx={{ backgroundColor: "#FAF5EF", p: 3, borderRadius: 3 }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              社群排行榜 🏆
            </Typography>
            {ranking.map((item, index) => (
              <Stack
                key={item.id}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  p: 2,
                  borderBottom:
                    index !== ranking.length - 1 ? "1px solid #E0D5C1" : "none",
                }}
              >
                <Stack direction="row" alignItems="center" spacing={2}>
                  <Avatar sx={{ bgcolor: "#A67C52", color: "white" }}>
                    {index + 1}
                  </Avatar>
                  <Typography variant="body1">{item.name}</Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: "#5C4033" }}>
                  {item.likes} 喜愛
                </Typography>
              </Stack>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SocialPage;
