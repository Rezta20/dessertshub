// - 🍰 **AI 推薦甜點**
//     - 依據用戶的瀏覽記錄、點擊行為，推薦他可能喜歡的甜點或店家
//     - 簡單版：基於標籤（例如「抹茶控」的用戶會看到抹茶類甜點）
//     - 進階版（未來）：學習用戶行為，自動生成更精準的推薦
// - 🗺️ **甜點地圖**
//     - 顯示附近的甜點店（可以篩選不同種類，如日式甜點、法式甜點等）
//     - 點擊後進入店家詳細頁面，查看甜點與優惠資訊
// - 🔥 **限時優惠（廣告推播）**
//     - 甜點業者可以購買廣告，讓店家優惠顯示在首頁
//     - 用戶可以設定「甜點偏好」，接收符合興趣的推播（減少廣告干擾感）

import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { TextField, Autocomplete, Chip, Stack, Box } from "@mui/material";

// SearchBar Section: 甜點搜尋欄
const searchSuggestions = [
  "巧克力蛋糕",
  "抹茶瑪德蓮",
  "伯爵紅茶塔",
  "草莓千層",
  "鹹蛋黃費南雪",
];
const popularTags = ["低糖", "熱銷", "新品", "限定", "季節推薦"];

function SearchBarSection() {
  const setSearchTerm = (term: string) => {
    console.log(term);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 600, mx: "auto", mt: 4 }}>
      {/* 搜尋欄 + 自動補全 */}
      <Autocomplete
        freeSolo
        options={searchSuggestions}
        onInputChange={(event, newValue) => setSearchTerm(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="搜尋甜點"
            variant="outlined"
            fullWidth
            sx={{
              bgcolor: "background.paper", // 讓搜尋欄有白色背景，不會被黑色背景影響
              borderRadius: 1, // 讓外觀更圓潤
            }}
          />
        )}
      />

      {/* 標籤區塊 */}
      <Stack direction="row" spacing={1} mt={2} flexWrap="wrap">
        {popularTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => setSearchTerm(tag)}
            color="primary" // 讓標籤變得顯眼
            sx={{ cursor: "pointer" }}
          />
        ))}
      </Stack>
    </Box>
  );
}

// Hero Section：AI 推薦甜點區
const HeroSection = () => {
  const desserts = ["抹茶蛋糕", "巧克力慕斯", "草莓塔"];
  return (
    <Box sx={{ bgcolor: "background.paper", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom color="black">
          AI 推薦甜點
        </Typography>
        <Grid container spacing={4}>
          {desserts.map((dessert, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: 0, paddingTop: "56.25%" }} // 16:9比例
                  image={`https://via.placeholder.com/300x200?text=${dessert}`}
                  alt={dessert}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div" gutterBottom>
                    {dessert}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    推薦理由：美味又健康！
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// SearchAndRecommand Section: 包含搜尋欄和推薦甜點區
const SearchAndRecommand = () => {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }} // 在小屏幕是上下排列，md 屏幕是左右排列
      spacing={4}
      justifyContent="space-between "
      alignItems="center" // 這裡加上可以讓左右兩邊的區塊有更好的間距
    >
      <Box sx={{ flex: 4 }}>
        {" "}
        {/* 搜尋欄佔 4 分 */}
        <SearchBarSection />
      </Box>
      <Box sx={{ flex: 6 }}>
        {" "}
        {/* 推薦甜點區佔 6 分 */}
        <HeroSection />
      </Box>
    </Stack>
  );
};

// Map Section：甜點地圖區域
const MapSection = () => (
  <Box sx={{ py: 8 }}>
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        甜點地圖
      </Typography>
      <Paper
        sx={{
          height: 300,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "grey.200",
        }}
      >
        <Typography variant="h6" color="text.secondary">
          [Google Maps 整合區域]
        </Typography>
      </Paper>
    </Container>
  </Box>
);

// Promo Section：限時優惠 / 廣告推播
const PromoSection = () => (
  <Box sx={{ bgcolor: "primary.main", py: 8 }}>
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: "white" }}
      >
        限時優惠
      </Typography>
      <Typography variant="h6" align="center" sx={{ color: "white", mb: 2 }}>
        最新甜點優惠，立刻搶購！
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{ bgcolor: "white", color: "primary.main" }}
        >
          立即查看
        </Button>
      </Box>
    </Container>
  </Box>
);

// Community Section：甜點打卡牆
const CommunitySection = () => {
  const shares = ["用戶A的甜點分享", "用戶B的甜點打卡", "用戶C的美味日常"];
  return (
    <Box sx={{ bgcolor: "grey.100", py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" gutterBottom>
          甜點打卡牆
        </Typography>
        <Grid container spacing={4}>
          {shares.map((share, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={`https://via.placeholder.com/300x200?text=打卡${
                    index + 1
                  }`}
                  alt={`分享 ${index + 1}`}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" gutterBottom>
                    {share}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    分享他/她對甜點的獨特見解與感受。
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// Footer Component
const Footer = () => (
  <Box sx={{ bgcolor: "grey.900", color: "grey.300", py: 4 }}>
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} DessertsHub. All rights reserved.
        </Typography>
        <Box>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            關於我們
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            聯繫我們
          </Link>
          <Link href="#" color="inherit" sx={{ ml: 2 }}>
            隱私政策
          </Link>
        </Box>
      </Box>
    </Container>
  </Box>
);

const App = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <SearchAndRecommand />
        <MapSection />
        <PromoSection />
        <CommunitySection />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
