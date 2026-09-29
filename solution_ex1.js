// Dữ liệu thô từ máy quét Kiosk
const rawAppointmentCode = "     med-nhi-0004  ";
const cleanPatientName = "     nguyễn văn an  ";

// Dọn dẹp khoảng trắng
const cleanAppointmentCode = rawAppointmentCode.trim();
const formattedPatientName = cleanPatientName.trim().toUpperCase();
const departmentCode = cleanAppointmentCode.slice(4, 7);
const appointmentNumber = cleanAppointmentCode.slice(8, 12);
const isCodeValid = cleanAppointmentCode.toUpperCase().startsWith("MED-");

console.log("Bệnh nhân:", formattedPatientName);
console.log("Chuyên khoa:", departmentCode.toUpperCase());
console.log("Số thứ tự tiếp đón:", appointmentNumber);
console.log("Trạng thái hợp lệ:", isCodeValid);