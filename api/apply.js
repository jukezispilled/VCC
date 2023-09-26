import nodemailer from 'nodemailer';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage });

export default async (req, res) => {
  try {
    const { name, phone, address, email, workExperience } = req.body;
    const resume = req.file;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: 'uqdjdatfyjqzkaoo',
      },
    });

    // Define the email content
    const mailOptions = {
      from: 'Vector Apply',
      to: 'jax46500@gmail.com',
      subject: 'New Employment Form Submission',
      html: `
        <p>Name: ${name}</p>
        <p>Phone: ${phone}</p>
        <p>Address: ${address}</p>
        <p>Email: ${email}</p>
        <p>Work Experience: ${workExperience}</p>
      `,
      attachments: [
        {
          filename: resume.originalname,
          content: resume.buffer,
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};
