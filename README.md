**1) Quy trình cập nhật**
 1) Chạy local (tuỳ chọn)
npm install
npm run dev

 2) Commit & push
git add -A
git commit -m "feat: <mô tả thay đổi>"
git push

→ GitHub Actions tự build & deploy. Vài phút sau kiểm tra Prod.

Chỉ muốn redeploy lại (không đổi code)
git commit --allow-empty -m "trigger deploy"
git push

**2) Thêm trang/route mới**

Bọc trang trong Layout (Header/Footer) qua RouteMap.jsx.
Với HashRouter, dùng đường dẫn bình thường (/, /about, …).

