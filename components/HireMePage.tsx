import React, { useState } from 'react';
import { PROFILE, WEB3FORMS_ACCESS_KEY } from '../constants';
import { usePageMeta } from '../hooks/usePageMeta';
import { GithubIcon, LinkedinIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from './icons';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  form?: string;
}

export const HireMePage: React.FC = () => {
  usePageMeta(
    'Contact — Daffa Danendra Fairuzza',
    "Open to software engineering internships, collaborating on projects, and conversations about full-stack development or applied AI/ML."
  );

  const formEnabled = Boolean(WEB3FORMS_ACCESS_KEY);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (navigator.clipboard && PROFILE.email) {
      navigator.clipboard.writeText(PROFILE.email);
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
      newErrors.email = 'Please enter a valid email address.';
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
    if (!formEnabled) return;
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrors({});

    const formPayload = new FormData();
    formPayload.append('name', formData.name);
    formPayload.append('email', formData.email);
    formPayload.append('message', formData.message);
    formPayload.append('access_key', WEB3FORMS_ACCESS_KEY);
    formPayload.append('subject', `Portfolio Inquiry from ${formData.name}`);
    formPayload.append('from_name', PROFILE.name);
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
      setErrors({ form: 'Network error. Please try again later.' });
    }
  };

  const inputBaseClasses =
    'w-full px-4 py-3 rounded-xl border text-sm text-text-primary dark:text-dark-text-primary placeholder-text-placeholder dark:placeholder-dark-text-placeholder transition-colors duration-200';
  const inputNormalStateClasses =
    'bg-input-bg dark:bg-dark-input-bg border-input-border dark:border-dark-input-border';
  const inputFocusStateClasses =
    'focus:outline-none focus:border-accent-green dark:focus:border-dark-accent-green';
  const inputErrorStateClasses = 'border-accent-red dark:border-dark-accent-red';

  const hasBothMissing = !PROFILE.email && !PROFILE.linkedinUrl;

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <header className="animated-item anim-fadeInUp space-y-4 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent-green dark:text-dark-accent-green">
          Contact
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-medium tracking-tight leading-[1.08] text-text-primary dark:text-dark-text-primary">
          Let&apos;s connect.
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-text-secondary dark:text-dark-text-secondary">
          I&apos;m open to software engineering internships, collaborating on projects, and conversations about full-stack development or applied AI/ML.
        </p>
      </header>

      {/* Main grid */}
      <div className="animated-item anim-fadeInUp anim-delay-100 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
        <div className="space-y-8">
          {/* Channels list */}
          <div className="divide-y divide-border-subtle dark:divide-dark-border-subtle border-y border-border-subtle dark:border-dark-border-subtle">
            {/* GitHub */}
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group py-5 flex items-center justify-between gap-4 hover:bg-card-hover/60 dark:hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3.5 min-w-0">
                <GithubIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-text-primary dark:text-dark-text-primary shrink-0"
                />
                <div className="min-w-0">
                  <div className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                    @{PROFILE.githubUsername}
                  </div>
                  <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                    Repositories and ongoing work
                  </div>
                </div>
              </div>
              <ArrowTopRightOnSquareIcon
                aria-hidden="true"
                className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover:text-accent-green dark:group-hover:text-dark-accent-green transition-colors shrink-0"
              />
            </a>

            {/* Email (only when set) */}
            {PROFILE.email && (
              <div className="py-5 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <EnvelopeIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-text-primary dark:text-dark-text-primary shrink-0"
                  />
                  <div className="min-w-0">
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="text-sm font-medium text-text-primary dark:text-dark-text-primary hover:underline break-all"
                    >
                      {PROFILE.email}
                    </a>
                    <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                      Direct email
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-button-secondary-bg dark:bg-dark-button-secondary-bg border border-border-subtle dark:border-dark-border-subtle hover:border-accent-green/50 text-text-primary dark:text-dark-text-primary transition-colors"
                >
                  {copied ? 'Copied' : 'Copy email'}
                </button>
              </div>
            )}

            {/* LinkedIn (only when set) */}
            {PROFILE.linkedinUrl && (
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-5 flex items-center justify-between gap-4 hover:bg-card-hover/60 dark:hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <LinkedinIcon
                    aria-hidden="true"
                    className="w-5 h-5 text-text-primary dark:text-dark-text-primary shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-text-primary dark:text-dark-text-primary">
                      LinkedIn
                    </div>
                    <div className="text-xs text-text-secondary dark:text-dark-text-secondary">
                      Professional profile
                    </div>
                  </div>
                </div>
                <ArrowTopRightOnSquareIcon
                  aria-hidden="true"
                  className="w-4 h-4 text-text-secondary dark:text-dark-text-secondary group-hover:text-accent-green dark:group-hover:text-dark-accent-green transition-colors shrink-0"
                />
              </a>
            )}
          </div>

          {hasBothMissing && (
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
              Email and LinkedIn will be listed here soon &mdash; GitHub is the best place to reach me for now.
            </p>
          )}

          {/* Optional Web3Forms contact form */}
          {formEnabled && (
            <form onSubmit={handleSubmit} className="space-y-5 pt-2" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`${inputBaseClasses} ${
                      errors.name ? inputErrorStateClasses : inputNormalStateClasses
                    } ${inputFocusStateClasses}`}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="text-xs text-accent-red mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`${inputBaseClasses} ${
                      errors.email ? inputErrorStateClasses : inputNormalStateClasses
                    } ${inputFocusStateClasses}`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-xs text-accent-red mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-text-secondary dark:text-dark-text-secondary mb-1.5"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  className={`${inputBaseClasses} ${
                    errors.message ? inputErrorStateClasses : inputNormalStateClasses
                  } ${inputFocusStateClasses}`}
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-accent-red mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="h-11 px-6 rounded-full font-medium text-sm text-button-primary-text dark:text-dark-button-primary-text bg-button-primary-bg dark:bg-dark-button-primary-bg hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover transition-colors active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Sending...' : 'Send message'}
              </button>

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-accent-green-bg dark:bg-dark-accent-green-bg border border-accent-green/20 text-accent-green dark:text-dark-accent-green text-sm font-medium">
                  Thanks &mdash; your message has been sent.
                </div>
              )}
              {status === 'error' && errors.form && (
                <p className="text-sm text-accent-red mt-2">{errors.form}</p>
              )}
            </form>
          )}
        </div>

        {/* Side block */}
        <aside className="border-t lg:border-t-0 lg:border-l border-border-subtle dark:border-dark-border-subtle pt-6 lg:pt-0 lg:pl-8 space-y-6">
          <div className="space-y-3">
            <h2 className="font-mono text-xs uppercase tracking-[0.14em] text-text-secondary dark:text-dark-text-secondary">
              Good reasons to reach out
            </h2>
            <ul className="space-y-2.5 text-sm text-text-primary dark:text-dark-text-primary">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green dark:bg-dark-accent-green shrink-0 mt-2" />
                <span>Software engineering internships</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green dark:bg-dark-accent-green shrink-0 mt-2" />
                <span>Collaborating on web or mobile projects</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-green dark:bg-dark-accent-green shrink-0 mt-2" />
                <span>Talking through full-stack development or applied AI/ML</span>
              </li>
            </ul>
          </div>

          <p className="font-mono text-xs text-text-secondary dark:text-dark-text-secondary pt-2 border-t border-border-subtle dark:border-dark-border-subtle">
            Based in {PROFILE.location} &middot; {PROFILE.timezone}
          </p>
        </aside>
      </div>
    </div>
  );
};
