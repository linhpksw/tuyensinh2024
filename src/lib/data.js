import thayManh from '../../public/img/teacher/thayManh.jpg';
import coHuong from '../../public/img/teacher/coHuong.jpg';
import thayLam from '../../public/img/teacher/thayLam.jpg';
import thayPhuong from '../../public/img/teacher/thayPhuong.jpg';
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
    { type: 'Lớp 8 chuyên toán', state: 'enabled' },
    { type: 'Lớp 9A0 chuyên toán', state: 'enabled' },
    { type: 'Lớp 9A1 chuyên toán', state: 'enabled' },
    { type: 'Lớp 9A2 toán nâng cao', state: 'enabled' },
    { type: 'Lớp 10A0 - Vận dụng cao', state: 'disabled' },
    { type: 'Lớp 10A1 - Nâng cao', state: 'disabled' },
];

export const info = {
    address: 'Trường THPT DL Lê Hồng Phong - số 27 Tô Hiệu, Hà Đông',
    displayPhone: '036 286 0970',
    phone: '0362860970',
    googleMap: 'https://goo.gl/maps/proqtNoL24gvuNxy9',
    logo: 'https://tuyensinh.clbanhsang.com/img/logo/logo-alter.png',
    zaloOA: 'https://zalo.me/clbanhsang',
    zaloOAQR: 'https://tuyensinh.clbanhsang.com/img/logo/zalo-qr.jpg',
    zaloOAQRPath: '/../../public/img/logo/zalo-qr.jpg',
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
    c2: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2024 - 2025, CLB Ánh Sáng tổ chức: 1 lớp Toán 8 ôn thi vào chuyên toán, 2 lớp 9 ôn thi vào chuyên toán và 1 lớp 9 nâng cao ôn thi toán điều kiện vào 10, có kiểm tra đầu vào để xếp lớp. Thông tin chi tiết phụ huynh xem ở phía dưới.',
    c3: 'Kính gửi các quý vị phụ huynh học sinh và các con! Năm học 2024 - 2025, CLB Ánh Sáng tổ chức 2 lớp Toán 10 ôn thi THPTQG. Lớp 10A0 - Lớp vận dụng cao, dành cho các học sinh lớp chuyên toán lý hóa các trường chuyên, lớp chọn khối A và A1 trường LTV, LQĐ với mục tiêu điểm 9-10 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là HS lớp chuyên toán lý hoá các trường chuyên hoặc HS trường thường có điểm thi vào 10 môn toán từ 9,5 trở lên. Lớp 10A1 - Lớp toán nâng cao, dành cho các học sinh khá giỏi các trường THPT, với mục tiêu điểm 9 môn toán thi đại học. Điều kiện xét tuyển đầu vào của lớp là điểm thi vào 10 môn toán từ 8,5 trở lên.',
};

export const classInfo = {
    'Lớp 8 chuyên toán': 'Kiểm tra xếp lớp vào chiều Chủ nhật 14/7 (15h - 17h) - Khai giảng ngày Thứ Năm 18/7.',
    'Lớp 9A0 chuyên toán': 'Kiểm tra xếp lớp vào chiều Chủ nhật 2/6 (15h - 17h) - Khai giảng ngày Thứ Ba 4/6.',
    'Lớp 9A1 chuyên toán': 'Kiểm tra xếp lớp vào chiều Chủ nhật 2/6 (15h - 17h) - Khai giảng ngày Thứ Bảy 8/6',
    'Lớp 9A2 toán nâng cao': 'Không kiểm tra xếp lớp đầu vào - Khai giảng ngày Chủ Nhật 9/6',
};

export const timetable = {
    c2: [
        {
            no: 1,
            grade: 'LỚP 8 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào chiều Chủ nhật 14/7 (15h - 17h) - Khai giảng ngày Thứ Năm 18/7',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 5 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Chủ nhật từ 19h - 21h',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 2,
            grade: 'LỚP 9A0 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào chiều Chủ nhật 2/6 (15h - 17h) - Khai giảng ngày Thứ Ba 4/6',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 7 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 3 từ 18h30 - 21h30',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 3,
            grade: 'LỚP 9A1 CHUYÊN TOÁN',
            opening: 'Kiểm tra xếp lớp vào chiều Chủ nhật 2/6 (15h - 17h) - Khai giảng ngày Thứ Bảy 8/6',
            child: [
                {
                    subject: 'Hình học',
                    time: 'Thứ 3 từ 19h - 21h',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số - Số học',
                    time: 'Thứ 7 từ 18h30 - 21h30',
                    teacher: 'PGS-TS Phùng Văn Mạnh',
                },
            ],
            contact: 'Liên hệ cô Hường',
            phone: '0362860970',
        },
        {
            no: 4,
            grade: 'LỚP 9A2 TOÁN NÂNG CAO',
            opening: 'Không kiểm tra xếp lớp đầu vào - Khai giảng ngày Chủ Nhật 9/6',
            child: [
                {
                    subject: 'Đại số',
                    time: 'Chủ nhật từ 19h - 20h45',
                    teacher: 'Cô Hường',
                },
                {
                    subject: 'Hình học và bất đẳng thức',
                    time: 'Thứ 2 từ 19h - 20h45',
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
            opening: 'Khai giảng vào...',
            child: [
                {
                    subject: 'Hình học',
                    time: '',
                    teacher: 'Thầy Lâm',
                },
                {
                    subject: 'Đại số',
                    time: '',
                    teacher: 'Thầy Hưng',
                },
            ],
            contact: 'Liên hệ thầy Lâm',
            phone: '0988426803',
        },
        {
            no: 2,
            grade: 'LỚP 10A1 - NÂNG CAO',
            opening: 'Khai giảng vào...',
            child: [
                {
                    subject: 'Hình học',
                    time: '',
                    teacher: 'Cô Hường',
                },
                {
                    subject: 'Đại số',
                    time: '',
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
