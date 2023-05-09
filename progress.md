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
  - Style wallet từ fake data
  - User thêm creditcard mới
  - Đảm bảo các component responsive căn bản
- Style lại component lịch sử chuyến đi cũ của user
  - Mỗi chuyến đi là một card riêng biệt, lấy dữ liệu từ fake data
  - thiết kế các card lịch sử chuyến đi responsive căn bản

Dự kiến mai
- Thiết kế lại sơ đồ tương tác của user và driver
- Chuyển được dữ liệu đi từ user qua driver để thử tương tác

### Ngày 6/5
- Tạo route cho return về từng driver khác nhau để chuẩn bị static page cho driver
- Tạo danh sách static page bằng next
- Tạo form đăng ký cho User chọn Driver

### Ngày 8/5
- edit lại fake data
- Refactor lại 1 số api route do phải edit lại cấu trúc fake data
- Filter dựa vào session của cả user và driver
- build xong danh sách static page, lấy danh sách từ file/driver/driver.json
- Lấy location hiện tại dựa trên navigator
- Debug để đảm bảo data hiển thị đúng

Dự kiến mai
 - Tạo chức năng submit user request
 - Tạo chức năng driver accept user request
 - Tạo chức năng các chuyến xe chưa hoàn thành
 - Tạo chức năng đánh giá sau khi hoàn thành

### Ngày 9/5
 - [Style update](https://github.com/interest-protocol/sui-interface)
