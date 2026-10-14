import React, { useState } from 'react';
import { HireMePageProps } from '../types';
import { CheckBadgeIcon, ArrowLeftIcon, EnvelopeIcon } from './icons';
import { WEB3FORMS_ACCESS_KEY } from '../constants';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export const HireMePage: React.FC<HireMePageProps> = ({
  personalInfo,
  socialLinks,
  setCurrentPage,
}) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
    if (status === 'error' && errors.form) {
      setErrors((prev) => ({ ...prev, form: undefined }));
    }
    if (status !== 'idle') setStatus('idle');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrors({});

    // If no access key is configured, simulate a smooth demo success response
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
      setTimeout(() => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }, 700);
      return;
    }

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('access_key', WEB3FORMS_ACCESS_KEY);
    formPayload.append('subject', `Portfolio Inquiry from ${formData.name}`);
    formPayload.append('from_name', personalInfo.name);
    formPayload.append('replyto', formData.email);
    formPayload.append('botcheck', '');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formPayload,
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrors({ form: result.message || 'An unexpected error occurred. Please try again.' });
      }
    } catch {
      setStatus('error');
      setErrors({ form: 'Network error. Please try again or email directly.' });
    }
  };

  const inputBaseClasses =
    'w-full px-4 py-3 rounded-xl border text-sm text-text-primary dark:text-dark-text-primary placeholder-text-placeholder dark:placeholder-dark-text-placeholder transition-colors duration-200 ease-in-out';
  const inputNormalStateClasses =
    'bg-input-bg dark:bg-dark-input-bg border-input-border dark:border-dark-input-border';
  const inputFocusStateClasses =
    'focus:outline-none focus:border-accent-green focus:ring-2 focus:ring-accent-green/30 dark:focus:border-accent-green';
  const inputErrorStateClasses = 'border-accent-red dark:border-dark-accent-red';

  return (
    <div className="space-y-8">
      <button
        onClick={() => setCurrentPage('home')}
        className="animated-item anim-fadeInUp inline-flex items-center text-xs font-mono font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group mb-2"
        aria-label="Back to Home"
      >
        <ArrowLeftIcon className="w-3.5 h-3.5 mr-1.5 group-hover:-translate-x-1 transition-transform" />
        Back to Home
      </button>

      <div className="animated-item anim-fadeInUp bg-card dark:bg-dark-card p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-sm border border-border dark:border-dark-border space-y-8">
        <section id="hire-me-form-section">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-accent-green dark:text-dark-accent-green">
              Direct Contact
            </span>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-accent-green/10 text-accent-green dark:text-dark-accent-green border border-accent-green/20">
              <CheckBadgeIcon className="w-3.5 h-3.5 mr-1 text-accent-green" />
              Open for Opportunities
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-text-primary dark:text-dark-text-primary mb-2">
            {personalInfo.hireMePageTitle}
          </h1>
          <p className="text-base text-text-secondary dark:text-dark-text-secondary mb-6 leading-relaxed max-w-2xl">
            {personalInfo.hireMePageSubtitle}
          </p>

          {/* Quick Direct Email Row */}
          <div className="p-4 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
            <div className="flex items-center space-x-2 text-xs font-mono">
              <EnvelopeIcon className="w-4 h-4 text-accent-green" />
              <span className="text-text-secondary dark:text-dark-text-secondary">Direct Email:</span>
              <span className="font-semibold text-text-primary dark:text-dark-text-primary">
                {personalInfo.email}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-card dark:bg-dark-card border border-border dark:border-dark-border hover:border-accent-green/50 text-text-primary dark:text-dark-text-primary transition-colors"
              >
                {copied ? '✔ Copied to Clipboard' : 'Copy Email Address'}
              </button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Jordan Rivera"
                  className={`${inputBaseClasses} ${
                    errors.name ? inputErrorStateClasses : inputNormalStateClasses
                  } ${inputFocusStateClasses}`}
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-accent-red mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. jordan@company.com"
                  className={`${inputBaseClasses} ${
                    errors.email ? inputErrorStateClasses : inputNormalStateClasses
                  } ${inputFocusStateClasses}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-accent-red mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5">
                Message / Initiative Overview
              </label>
              <textarea
                name="message"
                id="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your initiative, timeline, or architecture challenges..."
                className={`${inputBaseClasses} ${
                  errors.message ? inputErrorStateClasses : inputNormalStateClasses
                } ${inputFocusStateClasses}`}
                aria-invalid={!!errors.message}
              />
              {errors.message && <p className="text-xs text-accent-red mt-1">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full font-semibold text-sm text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-all duration-200 ease-in-out active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-sm min-h-[44px]"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending Message...' : 'Send Message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-accent-green/10 border border-accent-green/30 text-accent-green dark:text-dark-accent-green text-sm font-medium">
                Thank you! Your message placeholder was recorded successfully.
              </div>
            )}
            {status === 'error' && errors.form && (
              <p className="text-sm text-accent-red mt-2">{errors.form}</p>
            )}
          </form>
        </section>
      </div>
    </div>
  );
};
