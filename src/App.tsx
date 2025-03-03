import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../theme";

import Header from "./HeaderComponent";
import HomePage from "./HomePage";
import MemberPage from "./MemberPage";
import SocialPage from "./SocialPage";
import StorePage from "./StorePage";

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* 設定路由 */}
        <Header />
        <Routes>
          {/* 設定不同頁面的路由 */}
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/social" element={<SocialPage />} />
          <Route path="/member" element={<MemberPage />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
};

export default App;

// ## **📍 為何這樣設計？**

// ✅ **避免建立電商系統，降低開發成本**

// ✅ **專注於「甜點推薦 & 導流」，提升店家廣告價值**

// ✅ **透過「AI 推薦」+「甜點地圖」，提高用戶留存率**

// ✅ **先累積甜點業者與顧客數量，後期可考慮變現方式（如廣告、VIP 會員）**
