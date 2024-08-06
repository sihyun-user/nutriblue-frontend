
# NutriBlue - 飲食日記與全面營養資訊平台

NutriBlue 是您的飲食日記和營養指南的最佳夥伴。通過紀錄每日飲食習慣，了解每餐的營養成分，並查詢大量健康食品資料庫，幫助您做出更明智的飲食選擇，達成健康生活目標。立即加入我們，開啟您的健康飲食之旅！

DEMO: https://nutriblue.vercel.app

### 測試帳號

```bash
Account： user@gmail.com
Password： user1234
```

## 安裝

以下將會引導你如何安裝此專案到你的電腦上。

Node.js 版本建議為：`18.16.0` 以上

### 取得專案

```bash
git clone https://github.com/sihyun-user/nutriblue-frontend.git
```

### 安裝套件

```bash
npm install
```

### 運行專案

```bash
npm run dev
```

### 開啟專案

在瀏覽器網址列輸入以下即可看到畫面

```bash
http://localhost:3000/
```

### 環境變數說明

```env
# react-hot-toast 出現時長
NEXT_TIMEOUT_PUBLIC_SEC=3000

# 前台域名，請參照前台專案的 localhost: https://nutriblue.vercel.app
NEXT_PUBLIC_BASEURL=

# 後台 API 域名，請參照後台專案的 localhost:https://nutriblue-backend.onrender.com
NEXT_PUBLIC_BASE_API=
```