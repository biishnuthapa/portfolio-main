import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { EMAIL_CONFIG } from '@/lib/constants';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export function useEmailService() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (data: EmailData): Promise<boolean> => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAIL_CONFIG.serviceId,
        EMAIL_CONFIG.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: EMAIL_CONFIG.recipientEmail,
        },
        EMAIL_CONFIG.publicKey
      );

      toast.success('Message sent successfully!');
      return true;
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { sendEmail, isSubmitting };
}