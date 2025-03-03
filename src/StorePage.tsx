// - 🍰 **甜點列表（無購物功能）**
//     - 只展示甜點資訊、價格，並導流至 **第三方購物平台**
//     - 按鈕範例：「前往購買（蝦皮）」或「前往 IG 訂購」
// - 💬 **顧客評價**
//     - 5 星評分 + 留言（提升信任感）
//     - 可篩選「最多好評」「最新評價」
// - 📍 **甜點店地圖定位**
//     - 讓用戶知道店家位置，點擊可直接導航

import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
} from "@mui/material";

const desserts = [
  {
    name: "抹茶瑪德蓮",
    price: "NT$45/顆",
    img: "img1.jpg",
    link: "https://shopee.tw",
  },
  {
    name: "伯爵紅茶塔",
    price: "NT$120/個",
    img: "img2.jpg",
    link: "https://instagram.com",
  },
  {
    name: "伯爵紅茶塔",
    price: "NT$120/個",
    img: "img2.jpg",
    link: "https://instagram.com",
  },
];

const reviews = [
  { rating: 5, comment: "超喜歡這款甜點，茶香很濃！" },
  { rating: 4, comment: "口感細緻，不過個人覺得甜度可以再降低一點。" },
];

export default function StorePage() {
  return (
    <Container sx={{ mt: 4 }}>
      {/* 甜點列表 */}
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        🍰 甜點列表
      </Typography>
      <Grid container spacing={2}>
        {desserts.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardMedia component="img" image={item.img} alt={item.name} />
              <CardContent>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="body1" sx={{ color: "gray" }}>
                  {item.price}
                </Typography>
                <Button
                  variant="outlined"
                  href={item.link}
                  target="_blank"
                  sx={{ mt: 1 }}
                >
                  前往購買
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 顧客評價 */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          💬 顧客評價
        </Typography>
        {reviews.map((review, index) => (
          <Box
            key={index}
            sx={{ mb: 2, p: 2, bgcolor: "#f8f8f8", borderRadius: 2 }}
          >
            <Rating value={review.rating} readOnly />
            <Typography variant="body1" sx={{ mt: 1 }}>
              {review.comment}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* 地圖 */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
          📍 店家位置
        </Typography>
        <iframe
          title="甜點店地圖"
          width="100%"
          height="300"
          style={{ border: "none", borderRadius: "10px" }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=台北101&key=YOUR_GOOGLE_MAPS_API_KEY"
        ></iframe>
      </Box>
    </Container>
  );
}
