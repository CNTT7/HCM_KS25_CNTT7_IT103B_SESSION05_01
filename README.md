Phân tích lỗi & Lập bảng Test Cases (trình bày trong README.md):
Đọc hiểu mã nguồn, xác định dòng lệnh sai logic và phân tích nguyên nhân kỹ thuật dẫn đến sự cố nghiệp vụ.
- phần bài nó làm rất thừa: ví dụ: cleanAppointmentCode(Tạo biến mà không biết sử dụng và không biết tối ưu); isValidPrefix biến này tạo ra để không làm gì cả? 
Lập bảng 02 Test Cases đối chứng gồm các cột: Trường hợp kiểm thử, Dữ liệu đầu vào, Kết quả sai thực tế, Kết quả đúng mong đợi.

Trường hợp kiểm thử: đề cho 

Dữ liệu đầu vào: 
const rawAppointmentCode = "  med-nhi-1024  ";
const cleanPatientName = "  nguyễn văn an  ";

Kết quả sai thực tế: không sai
Kết quả đúng mong đợi: 
Bệnh nhân: NGUYỄN VĂN AN
Chuyên khoa: NHI
So thứ tự tiep đón: 1024
Trạng thai hợp lệ: true


Trường hợp kiểm thử: ramdom mã rawAppointmentCode

Dữ liệu đầu vào: 
const rawAppointmentCode = "     med-nhi-0004  ";
const cleanPatientName = "     nguyễn văn an  ";

Kết quả sai thực tế: không sai
Kết quả đúng mong đợi: 
Bệnh nhân: NGUYỄN VĂN AN
Chuyên khoa: NHI
Số thứ tự tiếp đón: 0004
Trạng thai hợp lệ: true