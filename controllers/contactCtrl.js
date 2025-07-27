const contact = require('../models/contact');

exports.submitContactForm = async (req, res) => {
  try {
    const { name, email, number, subject, message } = req.body;

    // Server-side validation
    if (!name || !email || !number || !subject || !message) {
      req.flash('error_msg', 'All fields are required.');
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const newContact = new contact({
      name,
      email,
      number,
      subject,
      message,
    });

    await newContact.save();

    res.status(200).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ error: 'Server error. Please try again later.' });
  }
};
