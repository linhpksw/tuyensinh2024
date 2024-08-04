import nodemailer from 'nodemailer';
import { info, classInfo } from '@/lib/data';

const sendEmail = async (req, res) => {
    try {
        const { data } = req.body;

        const transporter = nodemailer.createTransport({
            service: process.env.EMAIL_SERVICE,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const htmlContent = generateHtmlContent(data);

        const mailOptions = {
            from: '"Câu lạc bộ Toán Ánh Sáng" <' + process.env.EMAIL_USER + '>',
            to: data[0].email,
            subject: 'Thư xác nhận đăng ký học thành công',
            html: htmlContent,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error occurred while sending email:', error);
                res.status(500).send(error);
            } else {
                console.log('Email sent: ' + info.response);
                res.status(200).send('Email sent!');
            }
        });
    } catch (error) {
        console.log('An error occurred in the sendEmail function:', error);
        res.status(500).send(error);
    }
};

export default sendEmail;

function generateHtmlContent(data) {
    const note = classInfo[data[0].subject];
    const isNotAvailale = data[0].subject.includes('10');

    const studentNum = data.length;

    let htmlContent = `
    <head>
  <style>
    body {
      line-height: 1.5;
      letter-spacing: 0.01em;
    }

    .info-table {
      width: 500px;
      border-collapse: collapse;
      color: #374151;
    }
    .info-table td {
      padding-top: 10px;
      padding-bottom: 10px;
      padding-right: 40px;
      padding-left: 40px;
      line-height: 1.5;
    }
    .alert {
        gap: 8px;
        margin-top: 12px;
        padding: 16px;
        margin-bottom: 16px;
        font-size: 0.875rem;
        color: #854d0e;
        background-color: #fef3c7;
        border-radius: 0.375rem;
    }

    .alert .font-medium {
        font-weight: 500;
    }
  </style>
</head>
<body>
  <p style="color: #374151;">Câu lạc bộ Toán Ánh Sáng xin thông báo,</p>

  <p style="color: #374151;">
    Đơn đăng kí học cho con đã được trung tâm xác nhận. Phụ huynh vui lòng kiểm tra lại thông tin bên dưới.
  </p>

  ${
      isNotAvailale
          ? `<div class="alert">
        <span class="font-medium">Chú ý: </span> Khối 10 hiện tại đã đủ sĩ số lớp và đơn đăng ký của phụ huynh sẽ nằm vào trong danh sách chờ của lớp. CLB Ánh Sáng sẽ liên hệ với PH ngay khi lớp có chỗ trống mới hoặc có thêm lớp mới ạ.
    </div>`
          : ''
  }

  ${data
      .map(
          (item, index) => `
  <h2 style="color: #e11d48">${studentNum > 1 ? 'Thông tin học sinh thứ ' + (index + 1) : 'Thông tin học sinh'}</h2>
  <table class="info-table">
    <tr style="background-color: #f2f2f2;">
      <td>Họ và tên</td>
      <td>${item.studentName}</td>
    </tr>
    <tr>
      <td>Đăng kí lớp học</td>
      <td>${item.subject}</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td>Năm sinh</td>
      <td>${item.year}</td>
    </tr>
    <tr>
      <td>Trường</td>
      <td>${item.school}</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td>Số điện thoại</td>
      <td>${item.studentPhone}</td>
    </tr>
  </table>
  `
      )
      .join('')}

  <h2 style="color: #e11d48">Thông tin phụ huynh</h2>
  <table class="info-table">
    <tr style="background-color: #f2f2f2;">
      <td>Số điện thoại đăng ký</td>
      <td>${data[0].registerPhone}</td>
    </tr>
    <tr>
      <td>Số điện thoại dự phòng</td>
      <td>${data[0].backupPhone}</td>
    </tr>
    <tr style="background-color: #f2f2f2;">
      <td>Email</td>
      <td>${data[0].email}</td>
    </tr>
  </table>

  <p>
    Nếu thông tin trên không chính xác, phụ huynh nhấn chỉnh sửa
    <a href="https://tuyensinh.clbanhsang.com/${data[0].registerPhone}"
      >tại đây.</a
    >
  </p>

  <p style="color: #e11d48;">Chú ý: ${note}</p>

  <p style="color: #e11d48;">Nếu có bất kì thắc mắc, phụ huynh có thể nhắn tin đến Zalo OA của trung tâm <a href="https://zalo.me/clbanhsang">tại đây.</a> Hoặc quét mã QR bên dưới và nhấn "Quan tâm" để nhận những thông báo mới nhất trong thời gian tới.<p>

  <a href="https://zalo.me/clbanhsang">
    <img
      src="${info.zaloOAQR}"
      alt="Zalo OA Câu lạc bộ Toán Ánh Sáng"
      style="width: w56px; height: 390px; margin-top: 20px; margin-bottom: 20px;"
    />
  </a>

  <hr style="margin-top: 30px" />

  <a href="https://tuyensinh.clbanhsang.com">
    <img
      src="${info.logo}"
      alt="Logo Câu lạc bộ Toán Ánh Sáng"
      style="width:252px; height:40px; padding-top:20px"
    />
  </a>

  <p>
    <b style="margin-top: 20px; color: #4b5563;">Zalo OA:</b>
    <a href="${info.zaloOA}"
      >Trung tâm Toán Câu lạc bộ Ánh Sáng</a
    >
  </p>

  <p>
    <b style="color: #4b5563;">Địa chỉ:</b>
    <a href="${info.googleMap}"
      >${info.address}</a
    >
  </p>
  <p>
    <b style="color: #4b5563;">Cô Hường phụ trách: </b>
    <a href="tel:${info.phone}">${info.displayPhone}</a>
  </p>
</body>
  `;

    return htmlContent;
}
