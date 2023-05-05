# Update tiến độ
## Link tới các task cần thiết
[Trello Board](https://trello.com/b/2zewDXi9)

[Use Case Diagram](https://drive.google.com/file/d/1EBREZRCl0H9Ft1f3wodKh038tRkkflt-/view?usp=sharing)

[Edit the Diagram](https://app.diagrams.net/#G1EBREZRCl0H9Ft1f3wodKh038tRkkflt-)
 
### Trước lễ 28/4
- Planning các yêu cầu cần thiết
  - Google map API
  - Next-Auth với Google login
  - NextJs - đọc file
  - Bootstrap cho style
- Tạo ENV cho google login
- Thiết kế khung cho các folder trong directory
  - fake data ở trong file(ngoài root)
  - src/components chứa navbar, footer và 1 số các component lặp lại của react
  - src/component chứa basic layout và import vào _app.tsx
### Trong lễ 29/4 - 3/5
- Tìm tài liêu và học cách set up google map api
  - Package google-map-api/react
  - Đọc tài liệu đê biết cách dùng
  - Test và debug code thành công
- Tạo fake data và các api route
  - Test đọc file và ghi file
  - API route cho trip, review, booking, driver
- Tạo login với google dưới api và trên frontend
  - Bọc session context trên frontend
  - Tạo nút sign in và sigh out
### Ngày 4/5
- Style navbar và footer
- Tạo style cho 1 số các component
- Edit lại cấu trúc file fake data, bao gồm user, driver, user_driver
  - user chứa điểm GPS hiện tại, điểm đến
  - driver chứa các drỉver để tạo list static page
  - user_driver chứa lịch sử booking, dùng để cho cả driver và user truy cập
- Fake data cho wallet, đã fetch được thông tin
    
Dự kiến mai
- Tạo tương tác của user và driver
- Style cho wallet
- Tạo danh sách static page cho driver

### Ngày 5/5
- Edit Wallet component
  - Style wallet
  - User thêm creditcard mới
