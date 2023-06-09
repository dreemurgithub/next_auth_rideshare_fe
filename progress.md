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
 - Refactor lại các function, 
   - 4 function helper chính của api/... sẽ dành cho 4 lệnh get/post/put/delete
   - các function tại frontend cần được fix lại để không bị lỗi type, và đổi biến ngoài frontend=>parameter
 - Code vẫn còn nhiều điểm hơi rối nên cần dành thêm thời gian format kĩ càng

Dự kiến mai
 - Tiếp tục format và refactor, cố gắng theo dúng linting style yêu cầu

### Ngày 10/5
 - Update hầu hết theo các helper function tương tự như style
   - Các function delete, add và read đã hoạt động ổn và compile hết lỗi
   - Vẫn chưa dùng tương tác cho edit, do chưa sử dụng đến
   - Cân nhắc không dùng Edit vì edit === thêm 1 record + xóa 1 record?
 - Tiếp tục test hết lại tất cả các api/route và debug
 - User đã có thể tạo request chuyến xe và hoàn tất chuyến xe, vẫn chưa thêm vào lịch sử đi của user

Dự kiến mai
 - Cố gắng hoàn thành các tương tác của user và driver
   - Hoàn thành chuyến đi=> Lịch sử
   - Chức năng booking lại chuyến cũ với tài xế đó
 - Tiếp tục refactor và cleanup

### Ngày 11/5
 - Tạo hoàn chỉnh chức năng user request, chưa style
   - User đã có thể thấy được các request của chính mình đặt, request của user có thể rate/ hủy / hoàn thành được
   - Request của tài xế chỉ thấy, không thể rate / hủy / hoàn thành được
 - Reformat lại driver form để có thể đáp ứng các yêu cầu khi tạo request mới
   - Kéo Rating state và thông tin tài xế qua fetch request
   - Filter dựa vào session để chỉ cho phép user thao tác với chuyến đi
   - Chuẩn bị cho chức năng booking lại từ lịch sử chuyến đi

Dự kiến mai
 - Cố gắng hoàn thành hết tất cả các tương tác của user và driver
 - Bắt đầu format các component để style frontend

### Ngày 12/5
 - Hoàn thành chức năng book lại dựa theo localstorage
   - Debug các type error của localstorage mà compiler báo
   - Rebook đi vào lại Driver cũ, với quãng đường và địa chỉ cũ
 - Format layout của /user theo và cac driver static page
   - Design layout để bắt đầu responsive cho /user và các driver page
   - Sử dụng thêm thư viện Material UI component để edit rating và style dễ hơn
   - Design sidebar cho driver với bootstrap icon

Dự kiến mai
 - Design các page khác và thành phần còn lại, cũng như đợi góp ý nếu có về cách tổ chức code
 - Clean up 1 số helper function, API route và fake data không dùng tới sau khi gần hoàn thành 

### Ngày 13/5
 - Format cho Navbar
 - Update Navbar state cho mobile
   - PC sẽ hiển thị trên top
   - Mobile hiển thị bên trái
 - Clean up các sign in/out ở các page khác, để hết về navbar

### Ngày 14/5
 - Bắt đầu code và design Help page theo style 1 số website lớn
 - Tạo homepage theo design của 1 số website lớn
 - Bắt đầu tạo chat box giống như facebook message(chưa hoàn thành)

Dự kiến mai
- Tiếp tục hoàn thành design và đợi góp ý
- Clean up các component và fake data cũng như API không dùng đến để hoàn thiện sản phẩm 

### Ngày 15/5
- Thiết kế fake data đơn giản cho chưc năng chat để hiển thị đối thoại của user và sale
  - Tin nhắn phân ra thành user 'me' (của khách hàng) và 'helper' để hiển thị chat 2 bên
  - Cho phép user send message và thay đổi client state
  - Chat có thể kết nối với backend
- Style khung chat
  - scroll tới tin nhắn cuối cùng
  - Khi gõ text sẽ hide các button bớt, khi text xóa đi sẽ hiển thị thêm các tùy chọn(hoạt động na ná như facebook messenger)
  - chat gắn dưới góc phải
  Dự kiến mai
- Tiếp tục design help page
- Sau khi hoàn thành help page sẽ clean up hết các function không dùng

### Ngày 16/5

- Style help page bằng một số form đơn giản
- Hoàn thành Chat
  - Scroll to bottom tự động khi bật/tắt chat và sau khi gửi tin nhắn
  - Gõ enter để tự động send tin nhắn
  - Tin nhắn hiển thị email của user trên header
  - Tắt bật chat
- Clean up navbar khỏi một số page không dùng
- Style lại lịch sử chuyến đi, hiển thị sao thì vì 3/4...

Dự kiến tiếp theo: Đợi góp ý code, hiện tại đã hoàn thành hết các chức năng frontend được giao