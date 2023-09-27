import nodemailer from 'nodemailer';

const E_PASS = process.env.EMAIL_PASS;

export default async (req, res) => {
  try {
    const { name, phone, address, email, workExperience, resume } = req.body;

    // Decode the Base64-encoded resume back into binary data
    const resumeData = Buffer.from(resume, 'base64');

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'jax46500@gmail.com',
        pass: E_PASS,
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
          filename: 'resume.pdf', // Change the filename as needed
          content: resumeData,
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
