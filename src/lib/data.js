import thayManh from '../../public/img/teacher/thayManh.jpg';
import coHuong from '../../public/img/teacher/coHuong.jpg';
import thayLam from '../../public/img/teacher/thayLam.jpg';
import thayPhuong from '../../public/img/teacher/thayPhuong.jpg';
import thayHung from '../../public/img/teacher/thayHung.jpg';

export const offer = {
    c2: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2023 - 2024, Câu lạc bộ Toán Ánh Sáng tổ chức: 2 lớp toán 8 ôn thi vào chuyên toán, 2 lớp 9 ôn thi vào chuyên toán và 1 lớp 9 nâng cao ôn thi toán điều kiện vào 10, có kiểm tra đầu vào để xếp lớp. Thông tin chi tiết phụ huynh xem ở phía dưới.',
    c3: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2023-2024, Trung tâm toán Câu lạc bộ Ánh Sáng tổ chức 2 lớp toán 10 ôn thi THPTQG. Lớp 10A0 - Lớp vận dụng cao, dành cho các học sinh lớp chuyên toán lý hóa các trường chuyên, lớp chọn khối A và A1 trường LTV, LQĐ với mục tiêu điểm 9-10 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là HS lớp chuyên toán lý hoá các trường chuyên hoặc HS trường thường có điểm thi vào 10 môn toán từ 9,5 trở lên. Lớp 10A1 - Lớp toán nâng cao, dành cho các học sinh khá giỏi các trường THPT, với mục tiêu điểm 9 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là điểm thi vào 10 môn toán từ 8,5 trở lên.',
};

export const timetable = {
    c2: [
        {
            no: 1,
            grade: 'LỚP 8 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào chiều Chủ nhật hàng tuần (16h - 17h45) - Khai giảng từ ngày Thứ Ba 18/07',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 3 từ 19h30 - 21h30',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 7 từ 19h30 - 21h30',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 2,
            grade: 'LỚP 9A0 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp đợt 2 từ 17h - 19h ngày Chủ nhật 18/06 - Khai giảng từ ngày Thứ Năm 08/06',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Chủ nhật từ 8h - 10h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 5 từ 19h30 - 21h30',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 3,
            grade: 'LỚP 9A1 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp đợt 2 từ 17h - 19h ngày Chủ nhật 18/06 - Khai giảng từ ngày Thứ Năm 08/06',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 5 từ 19h30 - 21h30',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Chủ nhật từ 8h - 10h',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 4,
            grade: 'LỚP 9A2 TOÁN NÂNG CAO',
            opening: 'Không kiểm tra xếp lớp đầu vào - Khai giảng ngày Chủ Nhật 18/06',
            child: [
                {
                    subject: 'Đại số',
                    time: 'Chủ nhật từ 16h - 17h45',
                    teacher: 'Cô Hường',
                },
                {
                    subject: 'Hình học và bất đẳng thức',
                    time: 'Thứ 2 từ 19h45 - 21h30',
                    teacher: 'Thầy Lâm',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
    ],
    c3: [
        {
            no: 1,
            grade: 'LỚP 10A0 - VẬN DỤNG CAO',
            opening: 'Khai giảng vào 19h30 Thứ Tư ngày 02/08 tại phòng 309.',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 4 từ 19h30 - 21h15',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số',
                    time: 'Thứ 2 từ 19h30 - 21h15',
                    teacher: 'Thầy Hưng',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 2,
            grade: 'LỚP 10A1 - NÂNG CAO',
            opening: 'Khai giảng vào 19h30 Thứ Tư ngày 02/08 tại phòng 204.',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 4 từ 19h30 - 21h15',
                    teacher: 'Cô Hường',
                },
                {
                    subject: 'Đại số',
                    time: 'Thứ 2 từ 17h45 - 19h30',
                    teacher: 'Thầy Phương',
                },
            ],

            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
    ],
};
export const teacher = {
    c2: [
        {
            name: 'Thầy Đinh Hữu Lâm',
            src: thayLam,
            bio: 'Cựu học sinh chuyên toán khối phổ thông chuyên toán Sư Phạm; Cựu sinh viên lớp chất lượng cao K50 trường ĐHSP Hà Nội; Thạc sĩ chuyên ngành hình học trường ĐH KHTN; giải nhất Giáo viên giỏi thành phố Hà Nội 2014; tổ trưởng tổ Toán trường THPT chuyên Nguyễn Huệ, chuyên viên môn toán khối THPT Sở GDĐT Hà Nội, bồi dưỡng nhiều học sinh giỏi quốc gia.',
        },
        {
            name: 'Thầy Phùng Văn Mạnh',
            src: thayManh,
            bio: 'Cựu học sinh chuyên toán trường chuyên Hưng Yên, giải NHÌ quốc gia môn toán; lớp trưởng lớp chất lượng cao K50 trường ĐHSP Hà Nội; học bổng toàn phần làm tiến sĩ khoa học tại Pháp; giảng viên tổ giải tích trường ĐHSP Hà Nội, năm 2017 thầy được vinh dự phong chức danh PGS ở tuổi 35.',
        },
        {
            name: 'Cô Đặng Thị Hường',
            src: coHuong,
            bio: 'Giáo viên toán trường THPT chuyên Nguyễn Huệ, luyện thi vào 10 và thi THPTQG lâu năm.',
        },
    ],
    c3: [
        {
            name: 'Thầy Đinh Hữu Lâm',
            src: thayLam,
            bio: 'Cựu học sinh chuyên toán khối phổ thông chuyên toán Sư Phạm; Cựu sinh viên lớp chất lượng cao K50 trường ĐHSP Hà Nội; Thạc sĩ chuyên ngành hình học trường ĐH KHTN; giải nhất Giáo viên giỏi thành phố Hà Nội 2014; Hiệu phó trường THPT chuyên Nguyễn Huệ, chuyên viên môn toán khối THPT Sở GDĐT Hà Nội, bồi dưỡng nhiều học sinh giỏi quốc gia.',
        },
        {
            name: 'Thầy Nghiêm Ngọc Phương',
            src: thayPhuong,
            bio: 'Cựu học sinh chuyên toán Nguyễn Huệ, Giải Ba HSG QG môn toán, Cựu sinh viên lớp chất lượng cao K54 trường ĐHSP Hà Nội; GVCN lớp 10 chuyên toán THPT chuyên Nguyễn Huệ, tổ trưởng tổ Toán trường THPT chuyên Nguyễn Huệ, bồi dưỡng nhiều học sinh giỏi quốc gia.',
        },
        {
            name: 'Cô Đặng Thị Hường',
            src: coHuong,
            bio: 'Thạc sĩ toán học - Giáo viên toán trường THPT chuyên Nguyễn Huệ, luyện thi vào 10 và thi THPTQG lâu năm.',
        },
        {
            name: 'Thầy Trần Bá Hưng',
            src: thayHung,
            bio: 'Giáo viên toán trường THPT chuyên Nguyễn Huệ, tốt nghiệp bằng xuất sắc ĐHSP toán, được vào thẳng hệ cao học, điểm 10 thi THPTQG toán 2019.',
        },
    ],
};
