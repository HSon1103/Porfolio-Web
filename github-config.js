// ============================================================
//  HƯỚNG DẪN SETUP (chỉ cần làm 1 lần):
//
//  1. Tạo GitHub repo mới (public hoặc private)
//  2. Upload toàn bộ các file này vào repo
//  3. Tạo GitHub Personal Access Token:
//     → GitHub → Settings → Developer settings
//     → Personal access tokens → Tokens (classic) → Generate new
//     → Tick "repo" scope → Generate → Copy token
//  4. Điền thông tin bên dưới
//  5. Deploy repo lên Netlify hoặc Vercel (kéo thả folder)
//
//  ⚠ QUAN TRỌNG: Không public token này lên mạng!
//     Nếu dùng repo public, hãy dùng Netlify Environment Variables
//     để ẩn GITHUB_TOKEN (xem README.md)
// ============================================================

const GH_CONFIG = {
  owner:  "YOUR_GITHUB_USERNAME",   // VD: "nguyenhoangson"
  repo:   "YOUR_REPO_NAME",         // VD: "portfolio"
  branch: "main",
  token:  "YOUR_GITHUB_TOKEN",      // VD: "ghp_xxxxxxxxxxxx"
  dataPath: "data.json"             // đường dẫn file data trong repo
};

// Admin credentials (đổi mật khẩu sau khi deploy!)
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";
