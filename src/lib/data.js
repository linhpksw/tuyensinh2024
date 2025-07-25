import thayManh from '../../public/img/teacher/thayManh.jpg';
import coHuong from '../../public/img/teacher/coHuong.jpg';
import thayLam from '../../public/img/teacher/thayLam.jpg';
// import thayPhuong from '../../public/img/teacher/thayPhuong.jpg';
import thayHung from '../../public/img/teacher/thayHung.jpg';

import toan7P1 from '../../public/img/document/toan7P1.jpg';
import toan7P2 from '../../public/img/document/toan7P2.jpg';
import toan8P1 from '../../public/img/document/toan8P1.jpg';
import toan8P2 from '../../public/img/document/toan8P2.jpg';

import chuyenSuPham from '../../public/img/fb/chuyenSuPham.png';
import deToanMinhHoa from '../../public/img/fb/deToanMinhHoa.png';
import giaiDe from '../../public/img/fb/giaiDe.png';
import moiNgay02 from '../../public/img/fb/moiNgay02.png';
import thongTinTuyenSinh from '../../public/img/fb/thongTinTuyenSinh.png';
import kinhNghiemLuyenThi from '../../public/img/fb/kinhNghiemLuyenThi.png';

export const classOptions = [
    { type: 'Lớp 10A0 vận dụng cao', state: 'enabled' },
    { type: 'Lớp 10A1 nâng cao', state: 'enabled' },
    { type: 'Lớp 8A0 chuyên toán', state: 'enabled' },
    { type: 'Lớp 8A1 chuyên toán', state: 'enabled' },
    { type: 'Lớp 9A0 chuyên toán', state: 'wishlist' },
    { type: 'Lớp 9A1 chuyên toán', state: 'wishlist' },
    { type: 'Lớp 9A2 toán nâng cao', state: 'wishlist' },
];

export const info = {
    address: 'Trung Tâm Đào Tạo Và Nghiên Cứu Khoa Học, số 27 Tô Hiệu, P.Nguyễn Trãi, Hà Đông, Hà Nội',
    displayPhone: '036 286 0970',
    phone: '0362860970',
    googleMap: 'https://maps.app.goo.gl/G7oHiG2tM1njeCzu6',
    logo: 'https://tuyensinh.clbanhsang.com/img/logo/logo-alter.png',
    zaloOA: 'https://zalo.me/clbanhsang',
    zaloOAName: 'Trung tâm Toán Câu lạc bộ Ánh Sáng',
    zaloOAQR: 'https://tuyensinh.clbanhsang.com/img/logo/zalo-qr.jpg',
    zaloOAQRPath: '/../../public/img/logo/zalo-qr.jpg',
    groupFB: 'https://www.facebook.com/groups/clbanhsang',
    groupFBName: 'CLB Ánh Sáng',
};

export const navLinks = [
    {
        name: 'Về chúng tôi',
        href: 'about',
    },
    {
        name: 'Lịch học',
        href: 'schedule',
    },
    {
        name: 'Giáo viên',
        href: 'teacher',
    },
    {
        name: 'Q & A',
        href: 'faq',
    },
    {
        name: 'Liên hệ',
        href: 'info',
    },
];

export const fbGroup = [
    {
        id: 1,
        src: chuyenSuPham,
        alt: 'Chuyên sư phạm',
    },
    {
        id: 2,
        src: deToanMinhHoa,
        alt: 'Đề toán minh họa',
    },
    {
        id: 3,
        src: giaiDe,
        alt: 'Giải đề',
    },
    {
        id: 4,
        src: moiNgay02,
        alt: 'Mỗi ngày 0.2 điểm',
    },
    {
        id: 5,
        src: thongTinTuyenSinh,
        alt: 'Thông tin tuyển sinh',
    },
    {
        id: 6,
        src: kinhNghiemLuyenThi,
        alt: 'Kinh nghiệm luyện thi',
    },
];

export const gradeTab = [
    {
        grade: 'c2',
        title: 'Dành cho khối THCS',
    },
    {
        grade: 'c3',
        title: 'Dành cho khối THPT',
    },
];

export const accordianQA = {
    c2: {
        items: [
            {
                id: 1,
                question: 'Học sinh cần chuẩn bị gì cho kì thi đầu vào?',
                answer: 'Trung tâm gợi ý một số tài liệu để học sinh ôn luyện trước kì thi.',
            },
        ],

        mathBook: {
            l7: [
                {
                    no: 1,
                    src: toan7P1,
                },
                {
                    no: 2,
                    src: toan7P2,
                },
            ],
            l8: [
                {
                    no: 3,
                    src: toan8P1,
                },
                {
                    no: 4,
                    src: toan8P2,
                },
            ],
        },
    },
    c3: {
        items: [],
    },
};

export const intro = {
    c2: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2025 - 2026, CLB Ánh Sáng tổ chức: 2 lớp Toán 8 ôn thi vào chuyên toán, 2 lớp 9 ôn thi vào chuyên toán và 1 lớp 9 nâng cao ôn thi toán điều kiện vào 10, có kiểm tra đầu vào để xếp lớp. Thông tin chi tiết phụ huynh xem ở phía dưới.',
    c3: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2025 - 2026, CLB Ánh Sáng tổ chức 2 lớp Toán 10 ôn thi THPTQG. Lớp 10A0 - Lớp vận dụng cao, dành cho các học sinh lớp chuyên toán lý hóa các trường chuyên, lớp chọn khối A và A1 trường LTV, LQĐ với mục tiêu điểm 9-10 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là HS lớp chuyên toán lý hoá các trường chuyên hoặc HS trường thường có điểm thi vào 10 môn toán từ 9 trở lên. Lớp 10A1 - Lớp toán nâng cao, dành cho các học sinh khá giỏi các trường THPT, với mục tiêu điểm 9 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là điểm thi vào 10 môn toán từ 8 trở lên.',
};

export const classInfo = {
    'Lớp 8A0 chuyên toán': 'Kiểm tra xếp lớp vào tối Thứ bảy 12/7 (19h - 21h) - Khai giảng ngày Thứ ba 15/7 tại P305.',
    'Lớp 8A1 chuyên toán': 'Kiểm tra xếp lớp vào tối Thứ bảy 12/7 (19h - 21h) - Khai giảng ngày Thứ ba 15/7 tại P204.',
    'Lớp 9A0 chuyên toán': 'Kiểm tra xếp lớp vào tối Chủ nhật 1/6 (19h - 21h) - Khai giảng ngày Thứ năm 5/6 tại P305.',
    'Lớp 9A1 chuyên toán': 'Kiểm tra xếp lớp vào tối Chủ nhật 1/6 (19h - 21h) - Khai giảng ngày Thứ năm 5/6 tại P204.',
    'Lớp 9A2 toán nâng cao': 'Không kiểm tra xếp lớp đầu vào - Khai giảng tối Thứ tư 4/6 tại P205.',
    'Lớp 10A0 vận dụng cao': 'Khai giảng vào 19h tối Thứ sáu 1/8 tại P305.',
    'Lớp 10A1 nâng cao': 'Khai giảng vào 19h tối Thứ sáu 1/8 tại P204.',
};

export const timetable = {
    c2: [
        {
            no: 1,
            grade: 'LỚP 8A0 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào tối Thứ bảy 12/7 (19h - 21h) - Khai giảng ngày Thứ ba 15/7 tại P305',
            child: [
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 3 từ 19h - 21h',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
                {
                    subject: 'Hình học',
                    time: 'Thứ 7 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 2,
            grade: 'LỚP 8A1 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào tối Thứ bảy 12/7 (19h - 21h) - Khai giảng ngày Thứ ba 15/7 tại P204',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 3 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 7 từ 19h - 21h',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 3,
            grade: 'LỚP 9A0 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào tối Chủ nhật 1/6 (19h - 21h) - Khai giảng ngày Thứ năm 5/6 tại P305',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 5 từ 18h30 - 21h30',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Chủ nhật từ 19h - 21h',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 4,
            grade: 'LỚP 9A1 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào tối Chủ nhật 1/6 (19h - 21h) - Khai giảng ngày Thứ năm 5/6 tại P204',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 5 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Chủ nhật từ 18h30 - 21h30',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 5,
            grade: 'LỚP 9A2 TOÁN NÂNG CAO',
            opening: 'Không kiểm tra xếp lớp đầu vào - Khai giảng ngày Thứ tư 4/6 tại P205',
            child: [
                {
                    subject: 'Hình học và bất đẳng thức',
                    time: 'Thứ 4 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số',
                    time: 'Thứ 7 từ 19h - 21h',
                    teacher: 'Cô Hường',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
    ],
    c3: [
        {
            no: 1,
            grade: 'LỚP 10A0 - VẬN DỤNG CAO',
            opening: 'Khai giảng vào 19h tối Thứ sáu 1/8 tại P305',
            child: [
                {
                    subject: 'Đại số',
                    time: 'Thứ 6 từ 19h - 21h',
                    teacher: 'Thầy Hưng',
                },
                {
                    subject: 'Hình học',
                    time: 'Chủ nhật từ 9h - 10h45',
                    teacher: 'Thầy Lâm',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 2,
            grade: 'LỚP 10A1 - NÂNG CAO',
            opening: 'Khai giảng vào 19h tối Thứ sáu 1/8 tại P204',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 6 từ 19h - 21h',
                    teacher: 'Cô Hường',
                },
                {
                    subject: 'Đại số',
                    time: 'Chủ nhật từ 10h - 11h45',
                    teacher: 'Thầy Hưng',
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
            bio: 'Cựu học sinh chuyên toán khối phổ thông chuyên toán Sư Phạm; Cựu sinh viên lớp chất lượng cao K50 trường ĐHSP Hà Nội; Thạc sĩ chuyên ngành hình học trường ĐH KHTN; giải nhất Giáo viên giỏi thành phố Hà Nội 2014; Hiệu phó trường Chuyên Nguyễn Huệ.',
        },
        {
            name: 'Thầy Phùng Văn Mạnh',
            src: thayManh,
            bio: 'Cựu học sinh chuyên toán trường chuyên Hưng Yên, giải NHÌ quốc gia môn toán; lớp trưởng lớp chất lượng cao K50 trường ĐHSP Hà Nội; học bổng toàn phần làm tiến sĩ khoa học tại Pháp; giảng viên tổ giải tích trường ĐHSP Hà Nội, năm 2017 thầy được vinh dự phong chức danh PGS ở tuổi 35. Nhiều năm thầy đã được mời về trường Chuyên Nguyễn Huệ dạy bồi dưỡng đội tuyển HSG Quốc Gia.',
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
            bio: 'Cựu học sinh chuyên toán khối phổ thông chuyên toán Sư Phạm; Cựu sinh viên lớp chất lượng cao K50 trường ĐHSP Hà Nội; Thạc sĩ chuyên ngành hình học trường ĐH KHTN; giải nhất Giáo viên giỏi thành phố Hà Nội 2014; Hiệu phó trường THPT chuyên Nguyễn Huệ, bồi dưỡng nhiều học sinh giỏi quốc gia.',
        },
        // {
        //     name: 'Thầy Nghiêm Ngọc Phương',
        //     src: thayPhuong,
        //     bio: 'Cựu học sinh chuyên toán Nguyễn Huệ, Giải Ba HSG QG môn toán, Cựu sinh viên lớp chất lượng cao K54 trường ĐHSP Hà Nội; GVCN lớp 10 chuyên toán THPT chuyên Nguyễn Huệ, tổ trưởng tổ Toán trường THPT chuyên Nguyễn Huệ, bồi dưỡng nhiều học sinh giỏi quốc gia.',
        // },
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

export const schoolList = [
    { name: 'THCS AMSTERDAM', type: 'c2' },
    { name: 'THCS AN HƯNG', type: 'c2' },
    { name: 'THCS AN THƯỢNG', type: 'c2' },
    { name: 'THCS ARCHIMEDES', type: 'c2' },
    { name: 'THCS BAN MAI', type: 'c2' },
    { name: 'THCS BÌNH MINH', type: 'c2' },
    { name: 'THCS CAO VIÊN', type: 'c2' },
    { name: 'THCS CHU VĂN AN', type: 'c2' },
    { name: 'THCS CHU VĂN AN - THANH TRÌ', type: 'c2' },
    { name: 'THCS CẦU GIẤY', type: 'c2' },
    { name: 'THCS CỰ KHUÊ', type: 'c2' },
    { name: 'THCS DƯƠNG NỘI', type: 'c2' },
    { name: 'THCS GIẢNG VÕ', type: 'c2' },
    { name: 'THCS HOÀNG LIỆT', type: 'c2' },
    { name: 'THCS HÀ NỘI THĂNG LONG', type: 'c2' },
    { name: 'THCS KIM GIANG', type: 'c2' },
    { name: 'THCS KIẾN HƯNG', type: 'c2' },
    { name: 'THCS LA KHÊ', type: 'c2' },
    { name: 'THCS LA PHÙ', type: 'c2' },
    { name: 'THCS LOMONOXOP', type: 'c2' },
    { name: 'THCS LÊ HỒNG PHONG', type: 'c2' },
    { name: 'THCS LÊ LỢI', type: 'c2' },
    { name: 'THCS LÊ QUÝ ĐÔN', type: 'c2' },
    { name: 'THCS LƯƠNG THẾ VINH', type: 'c2' },
    { name: 'THCS MARIE CURIE', type: 'c2' },
    { name: 'THCS MẬU LƯƠNG', type: 'c2' },
    { name: 'THCS MỄ TRÌ', type: 'c2' },
    { name: 'THCS MỖ LAO', type: 'c2' },
    { name: 'THCS MỸ HƯNG', type: 'c2' },
    { name: 'THCS MỸ ĐỨC', type: 'c2' },
    { name: 'THCS NAM TRUNG YÊN', type: 'c2' },
    { name: 'THCS NAM TỪ LIÊM', type: 'c2' },
    { name: 'THCS NEWTON', type: 'c2' },
    { name: 'THCS NGOẠI NGỮ', type: 'c2' },
    { name: 'THCS NGUYỄN LÂN', type: 'c2' },
    { name: 'THCS NGUYỄN TRÃI', type: 'c2' },
    { name: 'THCS NGUYỄN TRÃI A - THƯỜNG TÍN', type: 'c2' },
    { name: 'THCS NGUYỄN TRƯỜNG TỘ', type: 'c2' },
    { name: 'THCS NGUYỄN TRỰC', type: 'c2' },
    { name: 'THCS NGUYỄN TẤT THÀNH', type: 'c2' },
    { name: 'THCS NGUYỄN VĂN HUYÊN', type: 'c2' },
    { name: 'THCS NGÔ SĨ LIÊN', type: 'c2' },
    { name: 'THCS NGÔ SĨ LIÊN (CHƯƠNG MỸ)', type: 'c2' },
    { name: 'THCS NGÔI SAO', type: 'c2' },
    { name: 'THCS NGÔI SAO HÀ NỘI', type: 'c2' },
    { name: 'THCS NGỌC HOÀ', type: 'c2' },
    { name: 'THCS NHÂN CHÍNH', type: 'c2' },
    { name: 'THCS PHÚ LA', type: 'c2' },
    { name: 'THCS PHÚ LÃM', type: 'c2' },
    { name: 'THCS PHÚ LƯƠNG', type: 'c2' },
    { name: 'THCS PHÚ LƯƠNG 2', type: 'c2' },
    { name: 'THCS PHỤNG CHÂU', type: 'c2' },
    { name: 'THCS SPRINGHILL', type: 'c2' },
    { name: 'THCS THANH CAO', type: 'c2' },
    { name: 'THCS THANH LIỆT', type: 'c2' },
    { name: 'THCS THANH XUÂN', type: 'c2' },
    { name: 'THCS THANH XUÂN NAM', type: 'c2' },
    { name: 'THCS THANH XUÂN TRUNG', type: 'c2' },
    { name: 'THCS THĂNG LONG', type: 'c2' },
    { name: 'THCS TRUNG HÒA', type: 'c2' },
    { name: 'THCS TRUNG VĂN', type: 'c2' },
    { name: 'THCS TRẦN DUY HƯNG', type: 'c2' },
    { name: 'THCS TRẦN ĐĂNG NINH', type: 'c2' },
    { name: 'THCS TT CHÚC SƠN', type: 'c2' },
    { name: 'THCS TÂN TRIỀU', type: 'c2' },
    { name: 'THCS TÂY MỖ', type: 'c2' },
    { name: 'THCS TẢ THANH OAI', type: 'c2' },
    { name: 'THCS VICTORIA THĂNG LONG', type: 'c2' },
    { name: 'THCS VIỆT NAM ANGIERI', type: 'c2' },
    { name: 'THCS VĂN KHÊ', type: 'c2' },
    { name: 'THCS VĂN QUÁN', type: 'c2' },
    { name: 'THCS VĂN YÊN', type: 'c2' },
    { name: 'THCS VĨNH QUỲNH', type: 'c2' },
    { name: 'THCS XUÂN MAI A', type: 'c2' },
    { name: 'THCS XUÂN PHƯƠNG', type: 'c2' },
    { name: 'THCS YÊN HÒA', type: 'c2' },
    { name: 'THCS YÊN NGHĨA', type: 'c2' },
    { name: 'THCS ĐOÀN THỊ ĐIỂM', type: 'c2' },
    { name: 'THCS ĐÀO DUY TỪ', type: 'c2' },
    { name: 'THCS ĐÔNG LA', type: 'c2' },
    { name: 'THCS ĐÔNG PHƯƠNG YÊN', type: 'c2' },
    { name: 'THCS ĐẠI KIM', type: 'c2' },
    { name: 'THCS ĐẠI MỖ', type: 'c2' },
    { name: 'THCS ĐỒNG MAI', type: 'c2' },
    { name: 'THPT BAN MAI', type: 'c3' },
    { name: 'THPT CHU VĂN AN', type: 'c3' },
    { name: 'THPT CHUYÊN HÀ NỘI-AMSTERDAM', type: 'c3' },
    { name: 'THPT CHUYÊN KHOA HỌC TỰ NHIÊN', type: 'c3' },
    { name: 'THPT CHUYÊN NGUYỄN HUỆ', type: 'c3' },
    { name: 'THPT CHUYÊN SƯ PHẠM', type: 'c3' },
    { name: 'THPT CHƯƠNG MỸ A', type: 'c3' },
    { name: 'THPT HOÀI ĐỨC A', type: 'c3' },
    { name: 'THPT HOÀI ĐỨC B', type: 'c3' },
    { name: 'THPT HÀ ĐÔNG', type: 'c3' },
    { name: 'THPT KHƯƠNG HẠ', type: 'c3' },
    { name: 'THPT KIM LIÊN', type: 'c3' },
    { name: 'THPT LOMONOXOP', type: 'c3' },
    { name: 'THPT LÊ LỢI', type: 'c3' },
    { name: 'THPT LÊ QUÝ ĐÔN HÀ ĐÔNG', type: 'c3' },
    { name: 'THPT LƯƠNG THẾ VINH', type: 'c3' },
    { name: 'THPT LƯƠNG VĂN CAN', type: 'c3' },
    { name: 'THPT MARIE CURIE', type: 'c3' },
    { name: 'THPT NGUYỄN TẤT THÀNH', type: 'c3' },
    { name: 'THPT NGÔ THÌ NHẬM', type: 'c3' },
    { name: 'THPT NGỌC HỒI', type: 'c3' },
    { name: 'THPT NHÂN CHÍNH', type: 'c3' },
    { name: 'THPT QUANG TRUNG HÀ ĐÔNG', type: 'c3' },
    { name: 'THPT THANH OAI B', type: 'c3' },
    { name: 'THPT TRUNG VĂN', type: 'c3' },
    { name: 'THPT TRẦN HƯNG ĐẠO HÀ ĐÔNG', type: 'c3' },
    { name: 'THPT ĐÀO DUY TỪ', type: 'c3' },
];
