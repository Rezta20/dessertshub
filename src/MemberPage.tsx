// ### **📌 4. 會員系統**

// - 📂 **個人專區**
//     - 收藏店家 & 甜點
//     - 設定 AI 推薦偏好（如：愛吃巧克力、無麩質甜點）
// - 📣 **訊息推播**
//     - 店家可以推播新甜點資訊、活動優惠
//     - 用戶可以選擇要不要接收推播，減少廣告干擾

import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Chip,
  Avatar,
  Button,
  Stack,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";
import { useState } from "react";

// 假設的用戶資料
const user = {
  name: "甜點控小王",
  avatar: "https://via.placeholder.com/100",
  favoriteShops: ["甜點之家", "微光食匯"],
  favoriteDesserts: ["巧克力慕斯", "抹茶餅乾"],
  preferences: ["巧克力", "低糖"],
};

const MemberPage = () => {
  const [pushNotifications, setPushNotifications] = useState(true);

  const handlePushChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPushNotifications(event.target.checked);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* 頁面標題 */}
      <Typography
        variant="h4"
        textAlign="center"
        gutterBottom
        sx={{ fontWeight: "bold" }}
      >
        會員專區
      </Typography>

      {/* 個人專區 */}
      <Card
        sx={{
          mb: 4,
          borderRadius: 3,
          border: "1px solid #E0D5C1",
          boxShadow: "none",
        }}
      >
        <CardContent>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={user.avatar} sx={{ width: 80, height: 80 }} />
            <Typography variant="h6">{user.name}</Typography>
          </Stack>
          <Stack spacing={1} mt={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              收藏店家
            </Typography>
            <Stack direction="row" spacing={1}>
              {user.favoriteShops.map((shop, index) => (
                <Chip
                  key={index}
                  label={shop}
                  sx={{
                    borderColor: "#A67C52",
                    color: "#A67C52",
                    borderRadius: 2,
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
          <Stack spacing={1} mt={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              收藏甜點
            </Typography>
            <Stack direction="row" spacing={1}>
              {user.favoriteDesserts.map((dessert, index) => (
                <Chip
                  key={index}
                  label={dessert}
                  sx={{
                    borderColor: "#A67C52",
                    color: "#A67C52",
                    borderRadius: 2,
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
          <Stack spacing={1} mt={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              偏好設定
            </Typography>
            <Stack direction="row" spacing={1}>
              {user.preferences.map((preference, index) => (
                <Chip
                  key={index}
                  label={preference}
                  sx={{
                    borderColor: "#A67C52",
                    color: "#A67C52",
                    borderRadius: 2,
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </Card>

      {/* 訊息推播設定 */}
      <Card
        sx={{ borderRadius: 3, border: "1px solid #E0D5C1", boxShadow: "none" }}
      >
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
            訊息推播設定
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            是否接收店家新甜點資訊及活動優惠？
          </Typography>
          <FormControlLabel
            control={
              <Switch checked={pushNotifications} onChange={handlePushChange} />
            }
            label={pushNotifications ? "開啟推播" : "關閉推播"}
          />
        </CardContent>
      </Card>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Button variant="contained" color="primary" sx={{ borderRadius: 5 }}>
          更新設定
        </Button>
      </Box>
    </Container>
  );
};

export default MemberPage;
