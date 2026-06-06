import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, ChevronDown, Linkedin, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { updateForm, resetForm, setSubmitStatus } from '../../redux/slices/contactSlice';
import Button from '../common/Button';
import GlassCard from '../common/GlassCard';

const Contact = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { formData, status, errorMessage } = useSelector((state) => state.contact);
  const [phoneTouched, setPhoneTouched] = useState(false);

  const getPhoneError = () => {
    if (formData.phone.length > 0 || phoneTouched) {
      if (!formData.phone) {
        return 'Phone number is required.';
      } else if (formData.phone.length < 10) {
        return 'Phone number must be at least 10 digits.';
      } else if (formData.phone.length > 15) {
        return 'Phone number cannot exceed 15 digits.';
      }
    }
    return '';
  };

  const phoneError = getPhoneError();

  const servicesList = [
    { category: 'Development', options: ['Web Engineering', 'App Development', 'E-Commerce Solutions', 'SaaS Product Development'] },
    { category: 'AI & Automation', options: ['AI Chatbot Development', 'WhatsApp Automation', 'Workflow Automation', 'CRM & Sales Automation'] },
    { category: 'Marketing', options: ['Meta Ads Management', 'Google Ads & PPC', 'SEO & Digital Growth', 'AI Content Generation'] },
    { category: 'Design & Branding', options: ['Product Design (UI/UX)', 'Brand Architecture', 'Video Production'] },
    { category: 'Tech Solutions', options: ['Analytics Dashboards', 'Cloud & IT Setup', 'Cybersecurity'] },
    { category: 'Additional Option', options: ['Other (Tell us your requirement)'] },
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const serviceParam = queryParams.get('service');
    if (serviceParam) {
      const decodedService = decodeURIComponent(serviceParam);
      let matchedService = '';
      for (const group of servicesList) {
        const found = group.options.find(opt => opt.toLowerCase() === decodedService.toLowerCase());
        if (found) {
          matchedService = found;
          break;
        }
      }
      if (matchedService) {
        dispatch(updateForm({ service: matchedService }));
      }
    }
  }, [location, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const numericValue = value.replace(/\D/g, '');
      dispatch(updateForm({ [name]: numericValue }));
    } else {
      dispatch(updateForm({ [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      dispatch(setSubmitStatus({ status: 'error', error: 'All fields are required.' }));
      return;
    }

    // Email Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      dispatch(setSubmitStatus({ status: 'error', error: 'Please enter a valid email address.' }));
      return;
    }

    // Phone Number Validation
    if (formData.phone.length < 10 || formData.phone.length > 15) {
      setPhoneTouched(true);
      dispatch(setSubmitStatus({ status: 'error', error: 'Please enter a valid phone number.' }));
      return;
    }

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config Check:', {
      hasServiceID: !!serviceID,
      hasTemplateID: !!templateID,
      hasPublicKey: !!publicKey,
      serviceID,
      templateID,
      publicKey
    });

    if (!serviceID || !templateID || !publicKey || serviceID.includes('your_') || templateID.includes('your_') || publicKey.includes('your_')) {
      dispatch(setSubmitStatus({ 
        status: 'error', 
        error: 'EmailJS is not configured. Please define valid VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY keys in your .env file.' 
      }));
      return;
    }

    dispatch(setSubmitStatus({ status: 'sending' }));

    const templateParams = {
      from_name: formData.name,
      name: formData.name,
      user_name: formData.name,
      sender_name: formData.name,
      client_name: formData.name,

      reply_to: formData.email,
      email: formData.email,
      user_email: formData.email,
      from_email: formData.email,
      sender_email: formData.email,
      email_address: formData.email,

      phone_number: formData.phone,
      phone: formData.phone,
      user_phone: formData.phone,
      sender_phone: formData.phone,

      selected_service: formData.service,
      service: formData.service,
      subject: formData.service,

      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, {
      publicKey: publicKey
    })
      .then((response) => {
        console.log('EmailJS Response:', response);
        if (response.status !== 200) {
          throw new Error(`EmailJS responded with non-success status: ${response.status} (${response.text})`);
        }
        
        console.log('EmailJS Send Success:', {
          status: response.status,
          text: response.text
        });

        dispatch(setSubmitStatus({ status: 'success' }));
        setPhoneTouched(false);
        setPhoneError('');
        
        setTimeout(() => {
          dispatch(resetForm());
        }, 4000);
      })
      .catch((err) => {
        console.error('EmailJS Send Failure Details:', err);
        const errMsg = err?.text || err?.message || 'Failed to send message. Please verify your EmailJS keys in the .env file.';
        dispatch(setSubmitStatus({ 
          status: 'error', 
          error: errMsg
        }));
      });
  };

  const contactInfos = [
    { icon: Mail, label: 'Email Us', value: 'uaretech2926@gmail.com', link: 'mailto:uaretech2926@gmail.com' },
    { icon: Phone, label: 'Call Us', value: '+91 89401 05075', link: 'tel:+918940105075' },
    { icon: MapPin, label: 'Our Location', value: 'Madurai, Tamil Nadu, India', link: 'https://maps.google.com/?q=Madurai,Tamil+Nadu,India' },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 z-10 overflow-hidden bg-[#F8FAFC]"
    >


      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-outfit font-extrabold text-text-primary mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base font-inter font-medium text-text-tertiary"
          >
            Have a project in mind or need assistance with a digital transformation? Submit your query and an expert will reply within 12 hours.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Info & Google Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 justify-between">
            
            {/* Direct Info Pills */}
            <div className="flex flex-col gap-6">
              {contactInfos.map((info, i) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.link}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-slate-200/60 bg-white hover:bg-slate-50 shadow-glass hover:border-brand-primary/20 transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-outfit font-extrabold text-[10px] text-text-tertiary uppercase tracking-wider">{info.label}</h4>
                      <span className="font-inter text-sm sm:text-base font-bold text-text-primary">{info.value}</span>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Follow Our Journey Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full p-8 rounded-3xl shadow-glass border border-slate-200/60 bg-white flex flex-col items-center justify-center gap-6"
            >
              <h4 className="font-outfit font-extrabold text-lg text-text-primary tracking-tight">
                Follow Our Journey
              </h4>
              <div className="flex items-center gap-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-[#0077B5]/10 hover:bg-[#0077B5]/20 flex items-center justify-center text-[#0077B5] transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-14 h-14 rounded-2xl bg-[#E1306C]/10 hover:bg-[#E1306C]/20 flex items-center justify-center text-[#E1306C] transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-7 h-7" />
                </a>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Dynamic Feedback Contact Form */}
          <div className="lg:col-span-7 w-full h-full">
            <GlassCard hoverEffect={false} className="h-full flex flex-col justify-center relative overflow-hidden bg-white border border-slate-200/60 p-8 sm:p-10">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  /* Success Feedback Panel */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
                      className="text-brand-primary mb-6"
                    >
                      <CheckCircle2 className="w-20 h-20 fill-brand-primary/10" />
                    </motion.div>
                    
                    <h3 className="font-outfit font-extrabold text-2xl text-text-primary mb-3">
                      Message Sent Successfully!
                    </h3>
                    
                    <p className="font-inter text-sm sm:text-base font-semibold leading-relaxed text-text-tertiary max-w-sm">
                      Thank you for contacting UareTech. Our lead systems architect has been notified and we will contact you shortly.
                    </p>
                  </motion.div>
                ) : (
                  /* Standard Input Form */
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-6"
                  >
                    <h3 className="font-outfit font-extrabold text-xl text-text-primary text-left mb-2">
                      Send Us a Message
                    </h3>

                    {/* Form Input: Name */}
                    <div className="relative text-left">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder=" "
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm"
                      />
                      <label 
                        htmlFor="name"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter font-semibold ${
                          formData.name 
                            ? 'top-0 text-xs text-text-tertiary bg-white px-1.5 -translate-y-1/2 peer-focus:text-brand-primary' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-text-tertiary peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2'
                        }`}
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Form Input: Email */}
                    <div className="relative text-left">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder=" "
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm"
                      />
                      <label 
                        htmlFor="email"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter font-semibold ${
                          formData.email 
                            ? 'top-0 text-xs text-text-tertiary bg-white px-1.5 -translate-y-1/2 peer-focus:text-brand-primary' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-text-tertiary peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2'
                        }`}
                      >
                        Email Address *
                      </label>
                    </div>

                    {/* Form Input: Phone */}
                    <div className="relative text-left">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder=" "
                        maxLength={15}
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={() => setPhoneTouched(true)}
                        disabled={status === 'sending'}
                        className={`peer w-full px-4 py-3.5 rounded-xl border ${
                          phoneError && phoneTouched ? 'border-red-500 focus:border-red-500' : 'border-slate-200 focus:border-brand-primary/40'
                        } bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm`}
                      />
                      <label 
                        htmlFor="phone"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter font-semibold ${
                          formData.phone 
                            ? 'top-0 text-xs text-text-tertiary bg-white px-1.5 -translate-y-1/2 peer-focus:text-brand-primary' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-text-tertiary peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2'
                        }`}
                      >
                        Phone Number *
                      </label>
                      {phoneError && phoneTouched && (
                        <div className="text-red-500 font-inter text-[11px] font-semibold mt-1.5 px-1 text-left">
                          {phoneError}
                        </div>
                      )}
                    </div>

                    {/* Form Input: Service Dropdown */}
                    <div className="relative text-left">
                      <select
                        name="service"
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled hidden></option>
                        {servicesList.map((group) => (
                          <optgroup key={group.category} label={group.category} className="font-outfit font-bold text-xs text-brand-primary bg-slate-50">
                            {group.options.map((opt) => (
                              <option key={opt} value={opt} className="font-inter text-sm text-slate-900 bg-white">
                                {opt}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-tertiary">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                      <label 
                        htmlFor="service"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter font-semibold ${
                          formData.service 
                            ? 'top-0 text-xs text-text-tertiary bg-white px-1.5 -translate-y-1/2 peer-focus:text-brand-primary' 
                            : 'top-1/2 -translate-y-1/2 text-sm text-text-tertiary peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2'
                        }`}
                      >
                        Select a Service *
                      </label>
                    </div>

                    {/* Form Input: Message */}
                    <div className="relative text-left">
                      <textarea
                        name="message"
                        id="message"
                        required
                        rows="4"
                        placeholder=" "
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={status === 'sending'}
                        className="peer w-full px-4 py-3.5 rounded-xl border border-slate-200 focus:border-brand-primary/40 bg-white text-slate-900 font-inter text-sm outline-none transition-all duration-300 shadow-sm resize-none"
                      />
                      <label 
                        htmlFor="message"
                        className={`absolute left-4 transition-all duration-300 pointer-events-none font-inter font-semibold ${
                          formData.message 
                            ? 'top-0 text-xs text-text-tertiary bg-white px-1.5 -translate-y-1/2 peer-focus:text-brand-primary' 
                            : 'top-4 text-sm text-text-tertiary peer-focus:top-0 peer-focus:text-xs peer-focus:text-brand-primary peer-focus:bg-white peer-focus:px-1.5 peer-focus:-translate-y-1/2'
                        }`}
                      >
                        Tell us about your project *
                      </label>
                    </div>

                    {/* Validation Error Message */}
                    {status === 'error' && (
                      <div className="text-red-500 font-inter text-xs font-bold text-left px-1 animate-pulse">
                        ⚠️ {errorMessage || 'Please fill in all required fields correctly.'}
                      </div>
                    )}

                    {/* Form submit status controls */}
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={status === 'sending'}
                      className="w-full py-4 text-base font-bold shadow-glow hover:shadow-glow/90"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          <span>Sending Query...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Message</span>
                        </>
                      )}
                    </Button>

                  </motion.form>
                )}
              </AnimatePresence>

            </GlassCard>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
