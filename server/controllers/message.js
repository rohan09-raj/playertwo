import sendSMS from '../services/twilio.js';
import generateOTP from '../utils/otp.js';

const sendOTP = async (req, res) => {
  const {mobile} = req.body;

  try {
    const otp = generateOTP();
    const message = `Your OTP for Aadhaar verification is : ${otp}`;
    sendSMS(mobile, message);
    res.status(200).json({message: 'OTP sent successfully', otpCode: otp});
  } catch (error) {
    res.status(404).json({message: error});
  }
};

export default {sendOTP};
