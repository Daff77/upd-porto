import React, { useState } from 'react';
import {
  FiActivity,
  FiLayers,
  FiDatabase,
  FiServer,
  FiCpu,
  FiMic,
  FiRadio,
  FiAlertTriangle,
  FiUsers,
  FiShield,
  FiCheckCircle,
  FiClock,
  ArrowTopRightOnSquareIcon,
  GithubIcon,
  CheckBadgeIcon,
  ArrowLeftIcon,
  CodeBracketSquareIcon,
} from './icons';
import { CallToAction } from './CallToAction';

interface RapidMindCaseStudyProps {
  onBack: () => void;
  setCurrentPage: (pageId: string) => void;
  email: string;
}

export const RapidMindCaseStudy: React.FC<RapidMindCaseStudyProps> = ({
  onBack,
  setCurrentPage,
  email,
}) => {
  const [activeRoleTab, setActiveRoleTab] = useState<'relawan' | 'healthcare' | 'admin'>('relawan');
  const [activeArchTab, setActiveArchTab] = useState<'topology' | 'sync' | 'ml'>('topology');

  // Configurable repository & demo links (Placeholders identified as requested)
  const repoUrl = "https://github.com/daffadanendra/rapid-mind";
  const demoUrl = ""; // Leave blank or add live preview URL

  return (
    <article className="space-y-16 md:space-y-24">
      {/* Navigation & Header */}
      <div className="space-y-6">
        <button
          onClick={onBack}
          className="inline-flex items-center text-sm font-medium text-text-secondary dark:text-dark-text-secondary hover:text-text-primary dark:hover:text-dark-text-primary transition-colors group"
        >
          <ArrowLeftIcon className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Hero Banner */}
        <header className="space-y-5 p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-card via-card to-card-hover dark:from-dark-card dark:via-dark-card dark:to-dark-card-hover border border-border dark:border-dark-border shadow-lg">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30">
              <FiActivity className="w-3.5 h-3.5 mr-1.5" />
              Primary Technical Project
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary">
              Disaster Response Competition Prototype
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-button-secondary-bg dark:bg-dark-button-secondary-bg text-text-secondary dark:text-dark-text-secondary">
              Full-Stack & On-Device ML
            </span>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary dark:text-dark-text-primary tracking-tight leading-tight">
              RAPID-MIND
            </h1>
            <p className="text-lg sm:text-2xl font-semibold text-accent-green">
              Web-Based Emergency Psychological Triage System
            </p>
          </div>

          <p className="text-base sm:text-lg text-text-secondary dark:text-dark-text-secondary leading-relaxed max-w-4xl">
            A full-stack, offline-first decision-support platform engineered for disaster mental-health intake. Built around three canonical role workspaces (Field Volunteers, Healthcare Facilities, and Regional Command), RAPID-MIND unifies standardized psychiatric triage, on-device Indonesian speech-to-text inference, and sub-second WebSocket emergency dispatch.
          </p>

          {/* Quick Meta Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-border/80 dark:border-dark-border/80 text-xs sm:text-sm">
            <div>
              <p className="text-text-secondary dark:text-dark-text-secondary font-medium">Architecture</p>
              <p className="font-semibold text-text-primary dark:text-dark-text-primary">Laravel 13 + Vue 3 + Inertia</p>
            </div>
            <div>
              <p className="text-text-secondary dark:text-dark-text-secondary font-medium">Offline Storage</p>
              <p className="font-semibold text-text-primary dark:text-dark-text-primary">IndexedDB (Dexie) Outbox</p>
            </div>
            <div>
              <p className="text-text-secondary dark:text-dark-text-secondary font-medium">Machine Learning</p>
              <p className="font-semibold text-text-primary dark:text-dark-text-primary">On-Device Whisper Small ONNX</p>
            </div>
            <div>
              <p className="text-text-secondary dark:text-dark-text-secondary font-medium">Real-Time Core</p>
              <p className="font-semibold text-text-primary dark:text-dark-text-primary">Laravel Reverb WebSockets</p>
            </div>
          </div>
        </header>
      </div>

      {/* 1. Project Overview */}
      <section id="project-overview" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">01.</span>
            Project Overview
          </h2>
        </div>

        <div className="prose dark:prose-invert max-w-none text-text-secondary dark:text-dark-text-secondary leading-relaxed space-y-4">
          <p>
            In humanitarian disaster response, physical casualties routinely receive organized clinical prioritization, whereas acute psychological distress is frequently neglected, delayed, or managed through ad-hoc paper records. <strong>RAPID-MIND</strong> was engineered as a competitive innovation prototype to bridge this critical gap through a unified web-based system.
          </p>
          <div className="p-4 rounded-xl bg-accent-green/10 border border-accent-green/20 text-text-primary dark:text-dark-text-primary text-sm">
            <strong>Core Clinical & Architectural Premise:</strong> RAPID-MIND is strictly a <em>decision-support system</em>, not an autonomous diagnostic system. Machine intelligence and automated calculations assist volunteers in high-stress field conditions, while licensed healthcare clinicians and trained personnel retain full authoritative oversight over diagnostic and referral decisions.
          </div>
          <p>
            The platform is architected around a single codebase and database serving three distinct role-specific workspaces:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-accent-green">
                RELAWAN (Field Volunteer)
              </span>
              <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Mobile-First Offline PWA</h3>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Designed for field intake at temporary shelters. Guides volunteers through Psychological First Aid (PFA) and standardized SRQ-20 screening even during total network outages.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-500">
                HEALTHCARE (Clinician)
              </span>
              <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Emergency Triage Queue</h3>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Desktop clinical command console receiving real-time emergency T0 alerts via WebSockets with secondary tele-verification and audit-logged facility routing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/20 text-purple-500">
                ADMIN (Regional Command)
              </span>
              <h3 className="font-semibold text-text-primary dark:text-dark-text-primary">Geospatial Command Center</h3>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Regional disaster dashboard with MapLibre GL spatial shelter/facility mapping, longitudinal ECharts mental health analytics, and personnel provisioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      <section id="problem-statement" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">02.</span>
            Problem Statement
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
              1. Field Chaos & Connectivity Collapse
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              In post-disaster environments, cellular towers and broadband connections are frequently destroyed or congested. Conventional cloud-dependent web systems become completely unresponsive, leaving field volunteers unable to record victim assessments or coordinate support.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
              2. Delayed Acute Emergency Escalation
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Acute psychiatric emergencies (e.g. active suicidal ideation, psychotic dissociation, acute trauma) require immediate clinical intervention. Without a fast-track escalation mechanism, severe red flags remain buried inside paper forms or unprioritized general intake queues.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
              3. Cognitive Strain on Non-Clinical Responders
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Most frontline volunteers in disaster camps are university students or local community responders without psychiatric backgrounds. Complex clinical diagnostic manuals overwhelm them, leading to inconsistent screening quality, typing errors, and intake fatigue.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="w-10 h-10 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center font-bold">
              <FiAlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
              4. Data Fragmentation & Lost Referrals
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              Without an auditable tracking lifecycle, patients referred from shelters to hospitals fall through administrative cracks. Healthcare workers lack historical context on why a patient was escalated, while command centers lack real-time visibility into regional trauma trends.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Proposed Solution */}
      <section id="proposed-solution" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">03.</span>
            Proposed Solution
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
              Standardized, Multi-Tier Clinical Decision Support
            </h3>
            <p className="text-sm sm:text-base text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              RAPID-MIND resolves these challenges by introducing an offline-first architecture coupled with an auditable, deterministic clinical triage scoring engine based on established global protocols.
            </p>
          </div>

          {/* Scoring Engine Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-2">
              <span className="text-xs font-bold text-accent-green uppercase">Component 1</span>
              <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">WHO SRQ-20 Instrument</h4>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                20 validated binary psychological symptoms (headaches, sleep disturbance, sadness, anxiety). Includes explicit affirmative protection for Item Q17.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-2">
              <span className="text-xs font-bold text-blue-500 uppercase">Component 2</span>
              <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">5 Vulnerability Risk Factors (R1–R5)</h4>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Weighted situational factors including severe personal loss, prior psychiatric history, physical disability, pregnant/lactating, and family separation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 border border-border/80 dark:border-dark-border/80 space-y-2">
              <span className="text-xs font-bold text-purple-500 uppercase">Component 3</span>
              <h4 className="font-semibold text-text-primary dark:text-dark-text-primary">3 Daily Functioning Domains (F1–F3)</h4>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary">
                Measures self-care impairment, social withdrawal, and inability to perform basic tasks scored on a tri-state scale (0 = Normal, 1 = Moderate, 3 = Severe).
              </p>
            </div>
          </div>

          {/* Classification Tiers */}
          <div className="space-y-3 pt-4 border-t border-border dark:border-dark-border">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary dark:text-dark-text-secondary">
              Deterministic Output Tiers
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-500 font-medium">
                <strong>T0: Emergency</strong>
                <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">
                  Immediate suicidal threat or acute psychosis. Triggers instant WebSocket alert.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500 font-medium">
                <strong>T1: High Priority</strong>
                <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">
                  SRQ ≥ 8 with severe functional breakdown. Fast-tracked clinical referral.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 font-medium">
                <strong>T2: Standard Support</strong>
                <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">
                  Moderate distress with preserved basic function. Community PFA sessions.
                </p>
              </div>
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-medium">
                <strong>T3: Mild / Monitoring</strong>
                <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">
                  Resilient coping. Guided self-care exercises (5-4-3-2-1 grounding).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. System Architecture */}
      <section id="system-architecture" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">04.</span>
            System Architecture
          </h2>
        </div>

        {/* Interactive Architecture View Selector */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveArchTab('topology')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeArchTab === 'topology'
                ? 'bg-accent-green text-white shadow-sm'
                : 'bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            Container & Service Topology
          </button>
          <button
            onClick={() => setActiveArchTab('sync')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeArchTab === 'sync'
                ? 'bg-accent-green text-white shadow-sm'
                : 'bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            Offline Outbox Sync Flow
          </button>
          <button
            onClick={() => setActiveArchTab('ml')}
            className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
              activeArchTab === 'ml'
                ? 'bg-accent-green text-white shadow-sm'
                : 'bg-card dark:bg-dark-card border border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            In-Browser Web Worker Audio Pipeline
          </button>
        </div>

        {/* Architecture Tab Content */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border">
          {activeArchTab === 'topology' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                  Docker Compose Service Topology
                </h3>
                <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary mt-1">
                  Containerized multi-service architecture running in isolated network namespaces.
                </p>
              </div>

              {/* Topology Diagram Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-mono">
                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-accent-green font-bold">
                    <span>1. nginx (80/443)</span>
                    <FiServer className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    Reverse proxy terminating HTTPS, handling static assets, and dispatching WebSocket traffic to Reverb.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-blue-500 font-bold">
                    <span>2. app (PHP 8.3 FPM)</span>
                    <FiLayers className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    Laravel 13 application runtime processing Inertia requests, clinical scoring, and idempotent sync endpoints.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-purple-500 font-bold">
                    <span>3. postgres (PostGIS)</span>
                    <FiDatabase className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    Primary relational store with spatial extension calculating shelter-to-hospital coordinates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-amber-500 font-bold">
                    <span>4. reverb (8080)</span>
                    <FiRadio className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    First-party Laravel Reverb WebSocket server broadcasting EmergencyCreated events to healthcare monitors.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-rose-500 font-bold">
                    <span>5. queue (Worker)</span>
                    <FiActivity className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    Asynchronous worker processing batch offline sync reconciliations and audit log writes.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border dark:border-dark-border space-y-2">
                  <div className="flex items-center justify-between text-teal-500 font-bold">
                    <span>6. Client Browser / PWA</span>
                    <FiUsers className="w-4 h-4" />
                  </div>
                  <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                    Vue 3 + Inertia SPA operating with IndexedDB storage and local Web Worker AI thread.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeArchTab === 'sync' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                Transactional Outbox Synchronization Flow
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
                Deterministic client-to-server sync architecture guaranteeing zero data loss during network dropouts.
              </p>

              <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 font-mono text-xs space-y-3">
                <div className="flex items-center space-x-2 text-accent-green font-bold">
                  <span>[Step 1: Local Mutation]</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Volunteer completes intake offline → UUID assigned → Assessment and EmergencyEvent stored immediately in local IndexedDB (Dexie). Outbox item queued with <code className="text-accent-green">PENDING</code> state.
                </p>

                <div className="flex items-center space-x-2 text-blue-500 font-bold">
                  <span>[Step 2: Connectivity Detection & Background Replay]</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Service Worker detects active network → Outbox Worker iterates pending mutations in sequence → POST payload sent to Laravel Sync API.
                </p>

                <div className="flex items-center space-x-2 text-purple-500 font-bold">
                  <span>[Step 3: Idempotent Server Reconciliation]</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Server evaluates client UUID. If previously recorded (replayed request), returns HTTP 200 without duplicate creation. If new, writes record in database transaction, fires WebSocket event, and returns HTTP 201. Client marks local row as <code className="text-accent-green">SYNCED</code>.
                </p>
              </div>
            </div>
          )}

          {activeArchTab === 'ml' && (
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
                Web Worker Audio Pipeline Architecture
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
                Zero-cloud on-device voice inference executing outside the browser's UI render loop.
              </p>

              <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 font-mono text-xs space-y-3">
                <div className="text-accent-green font-bold">
                  <span>Main Thread: UI & Audio Recording (Push-to-Talk)</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Volunteer taps microphone → MediaRecorder captures audio chunk → AudioContext converts to 16kHz float32 PCM → Transferred to Web Worker via structured cloning without blocking UI animations.
                </p>
                <div className="text-blue-500 font-bold">
                  <span>Dedicated Web Worker: ONNX Runtime Web</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Worker initializes <code className="text-accent-green">cmaree/Bagus-whisper-small-id-onnx</code> (cached in browser Cache API) → Runs forward pass in Wasm thread → Produces Indonesian transcript tokens.
                </p>
                <div className="text-purple-500 font-bold">
                  <span>Safety Interruption: Rule-Based Intent Matching</span>
                </div>
                <p className="font-sans text-text-secondary dark:text-dark-text-secondary">
                  Transcript checked for affirmative answers. Critical Question 17 (suicide screening) affirmative triggers Safety Review modal. Manual selections always override model predictions.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. Technology Stack */}
      <section id="technology-stack" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">05.</span>
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-accent-green font-bold text-sm">
              <FiServer className="w-4 h-4" />
              <span>Backend & APIs</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">Laravel 13:</strong> PHP 8.3 application framework</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Inertia.js 3:</strong> Tight client-server coupling</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">JWT Auth:</strong> Role-based token authentication</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Laravel Reverb:</strong> Native WebSocket server</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-blue-500 font-bold text-sm">
              <FiDatabase className="w-4 h-4" />
              <span>Database & Geospatial</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">PostgreSQL 16:</strong> ACID relational storage</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">PostGIS:</strong> Spatial points & distance routing</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Eloquent ORM:</strong> Audit-logged lifecycle models</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Database Transactions:</strong> Atomic outbox replay</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-purple-500 font-bold text-sm">
              <FiLayers className="w-4 h-4" />
              <span>Frontend & UI</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">Vue 3:</strong> Reactive Composition API components</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">TypeScript:</strong> Strict compile-time interface contracts</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Tailwind CSS 4:</strong> High-performance utility styling</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Lucide Icons:</strong> Consistent semantic iconography</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-amber-500 font-bold text-sm">
              <FiRadio className="w-4 h-4" />
              <span>Offline & Storage</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">Dexie.js 4:</strong> Client-side IndexedDB wrapper</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Vite PWA:</strong> Progressive Web App installability</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Workbox:</strong> Offline asset caching & Service Worker</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Transactional Outbox:</strong> Offline action queue</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-rose-500 font-bold text-sm">
              <FiCpu className="w-4 h-4" />
              <span>Machine Learning & Voice</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">Transformers.js 3.8.1:</strong> In-browser ML runtime</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Whisper-Small ID:</strong> Quantized Indonesian ONNX</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Web Workers:</strong> Non-blocking background thread</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Zero Cloud Audio:</strong> 100% on-device inference</li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-3">
            <div className="flex items-center space-x-2 text-teal-500 font-bold text-sm">
              <FiActivity className="w-4 h-4" />
              <span>Data Visualization & DevOps</span>
            </div>
            <ul className="text-xs space-y-1.5 text-text-secondary dark:text-dark-text-secondary">
              <li><strong className="text-text-primary dark:text-dark-text-primary">MapLibre GL JS:</strong> Interactive shelter map markers</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Apache ECharts:</strong> Longitudinal trend analytics</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">Docker Compose:</strong> Full multi-container topology</li>
              <li><strong className="text-text-primary dark:text-dark-text-primary">PHPUnit 12:</strong> Comprehensive backend testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Implemented Features (Role-by-Role Deep Dive) */}
      <section id="implemented-features" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">06.</span>
            Implemented Features by Role
          </h2>
        </div>

        {/* Role Tab Navigation */}
        <div className="flex border-b border-border dark:border-dark-border">
          <button
            onClick={() => setActiveRoleTab('relawan')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors ${
              activeRoleTab === 'relawan'
                ? 'border-accent-green text-accent-green'
                : 'border-transparent text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            Relawan (Field Volunteers)
          </button>
          <button
            onClick={() => setActiveRoleTab('healthcare')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors ${
              activeRoleTab === 'healthcare'
                ? 'border-accent-green text-accent-green'
                : 'border-transparent text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            Healthcare (Clinicians)
          </button>
          <button
            onClick={() => setActiveRoleTab('admin')}
            className={`py-3 px-6 text-sm font-semibold border-b-2 transition-colors ${
              activeRoleTab === 'admin'
                ? 'border-accent-green text-accent-green'
                : 'border-transparent text-text-secondary dark:text-dark-text-secondary hover:text-text-primary'
            }`}
          >
            Admin (Command Center)
          </button>
        </div>

        {/* Role Content */}
        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border">
          {activeRoleTab === 'relawan' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-green mr-2.5"></span>
                Relawan Field Workspace Capabilities
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Tailored for mobile touchscreen field operations with offline resilience:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Psychological First Aid (PFA) Guidebook</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Look, Listen, Link step-by-step guidance accompanied by an interactive 5-4-3-2-1 sensory grounding exercise to calm distressed victims prior to formal intake.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">SRQ-20 Questionnaire Intake</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Sequential or full-page questionnaire navigation with automatic state preservation and question-by-question review before submission.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Instant T0 Red Flag Shortcut</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Persistent emergency button accessible on all intake views. Allows immediate emergency escalation with a mandatory 3-step confirmation modal to prevent accidental triggers.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Client-Side IndexedDB Outbox</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Owner-scoped Dexie database keeping offline drafts and emergency records safe on the device until sync can be confirmed with the server.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeRoleTab === 'healthcare' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2.5"></span>
                Healthcare Clinical Command Capabilities
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Designed for clinical dispatchers and psychiatric staff handling incoming referrals:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Real-Time T0 Emergency Queue</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Receives live WebSocket broadcast alerts. Features audio/visual sirens, 2-step acknowledgement, and direct click-to-call link for the reporting volunteer.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Clinical Downgrade & Classification</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Clinicians can validate emergency T0 or downgrade to T1/T2 with required diagnostic justification notes, preventing hospital bed saturation.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Assessment Validation Worklist</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Segregated into "Perlu Divalidasi" and "Selesai", presenting complete score breakdowns, past assessment history, and longitudinal patient tracking.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Closed-Loop Referral Dispatch Lifecycle</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Explicit active-facility selection with append-only status transitions (Submitted → Acknowledged → In Transit → Arrived → Resolved).
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeRoleTab === 'admin' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-2.5"></span>
                Admin Regional Command Capabilities
              </h3>
              <p className="text-sm text-text-secondary dark:text-dark-text-secondary">
                Designed for regional disaster managers and health agency coordinators:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Interactive Geospatial Command Map</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    MapLibre GL map plotting verified PostGIS coordinates for evacuation shelters (Posko) and hospitals (Faskes) with live status popups.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Longitudinal Trend Analytics (ECharts)</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Aggregated 30-day mental health trajectories displaying symptom severity spikes across geographic disaster zones.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Master Data & PostGIS Validation</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    CRUD management for facilities with geographic coordinate pair validation and active-personnel deactivation safeguards.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-button-secondary-bg/30 dark:bg-dark-button-secondary-bg/30 border border-border/80 dark:border-dark-border/80 space-y-1.5">
                  <strong className="text-text-primary dark:text-dark-text-primary">Account Provisioning & Audit Trails</strong>
                  <p className="text-text-secondary dark:text-dark-text-secondary">
                    Strict boundary management for Relawan and Healthcare accounts with phone number normalization and facility assignment logs.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 7. MACHINE LEARNING SECTION */}
      <section id="machine-learning-section" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
              <span className="text-accent-green mr-3 text-xl font-mono">07.</span>
              Machine Learning: On-Device Speech-to-Text
            </h2>
            <span className="text-xs px-2.5 py-1 rounded-full bg-accent-green/15 text-accent-green font-mono">
              In-Browser ONNX
            </span>
          </div>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-6">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-text-primary dark:text-dark-text-primary">
              The AI Challenge: Voice Assistance Without Connectivity or Privacy Leaks
            </h3>
            <p className="text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              In disaster camps, victims describe traumatic events through oral conversation while volunteers take notes. Traditional speech-to-text relies on cloud APIs (e.g. OpenAI Whisper API, Google Speech API). In disaster zones, this model fails entirely: internet access is collapsed, latency is unacceptable, and streaming intimate trauma disclosures to commercial cloud endpoints poses severe patient privacy and legal risks.
            </p>
          </div>

          {/* Model Specification Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border/80 dark:border-dark-border/80 space-y-1">
              <span className="font-semibold text-text-secondary dark:text-dark-text-secondary">Model Identifier</span>
              <p className="font-mono text-accent-green font-bold">cmaree/Bagus-whisper-small-id-onnx</p>
              <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">Indonesian fine-tuned Whisper-Small architecture</p>
            </div>
            <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border/80 dark:border-dark-border/80 space-y-1">
              <span className="font-semibold text-text-secondary dark:text-dark-text-secondary">Quantization</span>
              <p className="font-mono text-blue-500 font-bold">q4f16 (Encoder & Decoder)</p>
              <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">4-bit quantized weights for low-RAM mobile execution</p>
            </div>
            <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border/80 dark:border-dark-border/80 space-y-1">
              <span className="font-semibold text-text-secondary dark:text-dark-text-secondary">Inference Runtime</span>
              <p className="font-mono text-purple-500 font-bold">@huggingface/transformers 3.8.1</p>
              <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">Client-side execution via ONNX Runtime WebAssembly</p>
            </div>
            <div className="p-4 rounded-xl bg-button-secondary-bg/40 dark:bg-dark-button-secondary-bg/40 border border-border/80 dark:border-dark-border/80 space-y-1">
              <span className="font-semibold text-text-secondary dark:text-dark-text-secondary">Data Transmission</span>
              <p className="font-mono text-rose-500 font-bold">0 Bytes (Strict Offline)</p>
              <p className="text-[11px] text-text-secondary dark:text-dark-text-secondary mt-1">Zero audio frames sent across the network</p>
            </div>
          </div>

          {/* Preprocessing & Audio Flow */}
          <div className="space-y-3 pt-2">
            <h4 className="font-bold text-text-primary dark:text-dark-text-primary text-base">
              Audio Preprocessing & Inference Architecture
            </h4>
            <div className="p-4 rounded-xl bg-button-secondary-bg/25 dark:bg-dark-button-secondary-bg/25 border border-border/70 dark:border-dark-border/70 space-y-2 text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <p>
                <strong>1. Audio Capture:</strong> Push-to-Talk activation via standard HTML5 <code className="text-accent-green">MediaRecorder</code> API prevents continuous microphone listening and battery drain.
              </p>
              <p>
                <strong>2. Resampling:</strong> Web Audio API converts raw browser audio input into 16 kHz mono float32 PCM tensor arrays matching Whisper's expected mel-spectrogram input format.
              </p>
              <p>
                <strong>3. Thread Isolation:</strong> Audio buffers are transferred to a dedicated Web Worker thread (<code className="text-accent-green">stt.worker.ts</code>). This prevents the heavy transformer forward pass from dropping UI frames or locking mobile touch responsiveness.
              </p>
              <p>
                <strong>4. Model Caching:</strong> On initial deployment/warm-up, model weights are stored inside the browser's native Cache API / IndexedDB, enabling subsequent cold startups even when internet is completely cut off.
              </p>
            </div>
          </div>

          {/* Clinical Safety & Responsible-Use Safeguards */}
          <div className="p-5 rounded-xl bg-rose-500/10 border border-rose-500/20 space-y-3">
            <div className="flex items-center space-x-2 text-rose-600 dark:text-rose-400 font-bold text-sm">
              <FiShield className="w-4 h-4" />
              <span>Ethical AI & Clinical Safety Boundaries</span>
            </div>
            <ul className="text-xs space-y-2 text-text-secondary dark:text-dark-text-secondary leading-relaxed list-disc pl-5">
              <li>
                <strong>Strict Human-in-the-Loop:</strong> The model never submits answers directly. It suggests question selections, but the human volunteer must review and confirm every item. A volunteer's manual selection immediately revokes model ownership.
              </li>
              <li>
                <strong>Critical Item Q17 Safety Interruption:</strong> SRQ Item 17 assesses thoughts of ending one's life. If speech transcription detects an affirmative match for Q17, the system immediately presents a <em>Potential Red Flag Safety Interruption Modal</em>. The system <strong>NEVER autonomously creates, submits, or transmits an emergency T0</strong>. Submitting T0 requires deliberate human gatekeeping.
              </li>
              <li>
                <strong>Deterministic Fallback:</strong> If WebAssembly loading fails, model download is interrupted, or microphone permission is denied, manual radio-button completion remains 100% operational without error.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Development Challenges & Solutions */}
      <section id="development-challenges" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">08.</span>
            Development Challenges & Engineering Solutions
          </h2>
        </div>

        <div className="space-y-4">
          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-text-primary dark:text-dark-text-primary text-base">
                1. Offline Replay Idempotency & Race Conditions
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-mono">Resolved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <strong>Challenge:</strong> When volunteers regained internet connectivity, multiple queued outbox sync requests could trigger duplicate assessments or duplicate emergency notifications on hospital dashboards.
              <br />
              <strong>Solution:</strong> Implemented client-side UUID generation with server-side idempotent transaction handlers. If an identical UUID is received during replay, the backend returns HTTP 200 with the existing canonical record, ensuring exactly-once delivery across WebSocket broadcast channels.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-text-primary dark:text-dark-text-primary text-base">
                2. PostGIS Coordinate String Serialization Bug
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-mono">Resolved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <strong>Challenge:</strong> Laravel's default Eloquent <code className="text-accent-green">decimal:8</code> cast serializes geographic coordinates as string primitives in Inertia JSON payloads. When MapLibre GL JS evaluated coordinates on the client, calling <code className="text-accent-green">.toFixed()</code> caused runtime crashes.
              <br />
              <strong>Solution:</strong> Created explicit numeric float transformers and validation schemas ensuring PostGIS coordinates are cleanly passed as standard JavaScript numbers before mapping.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-text-primary dark:text-dark-text-primary text-base">
                3. Heavy Transformer Model Execution in Mobile Browsers
              </h3>
              <span className="text-xs px-2 py-0.5 rounded bg-amber-500/15 text-amber-500 font-mono">Resolved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary leading-relaxed">
              <strong>Challenge:</strong> Running Hugging Face Whisper ONNX on low-end Android mobile devices originally caused noticeable UI stuttering and input lag during questionnaire scrolling.
              <br />
              <strong>Solution:</strong> Offloaded ONNX model instantiation, audio resampling, and tensor execution to a dedicated Web Worker thread. Utilized quantized <code className="text-accent-green">q4f16</code> weights to cut memory consumption while maintaining high Indonesian transcription fidelity.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Testing & Results */}
      <section id="testing-results" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">09.</span>
            Testing and Verification Baseline
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text-primary dark:text-dark-text-primary">
              Automated Test Suite & Browser Verification Baseline
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary dark:text-dark-text-secondary">
              Verified automated test coverage and runtime contract validation recorded in the project repository:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-green">116</p>
              <p className="text-xs font-semibold text-text-secondary dark:text-dark-text-secondary mt-1">Laravel Suite Tests Passing</p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
              <p className="text-2xl sm:text-3xl font-extrabold text-accent-green">1,379</p>
              <p className="text-xs font-semibold text-text-secondary dark:text-dark-text-secondary mt-1">Automated Assertions</p>
            </div>
            <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-500">100%</p>
              <p className="text-xs font-semibold text-text-secondary dark:text-dark-text-secondary mt-1">TypeScript Typecheck PASS</p>
            </div>
            <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
              <p className="text-2xl sm:text-3xl font-extrabold text-purple-500">14/14</p>
              <p className="text-xs font-semibold text-text-secondary dark:text-dark-text-secondary mt-1">Browser Gates Passing</p>
            </div>
          </div>

          {/* Test Breakdown Table */}
          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border dark:border-dark-border text-text-secondary dark:text-dark-text-secondary">
                  <th className="py-2.5 font-semibold">Test Suite</th>
                  <th className="py-2.5 font-semibold">Scope Covered</th>
                  <th className="py-2.5 font-semibold text-right">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 dark:divide-dark-border/60">
                <tr>
                  <td className="py-2 font-mono font-medium text-text-primary dark:text-dark-text-primary">RelawanSyncContractTest</td>
                  <td className="py-2 text-text-secondary dark:text-dark-text-secondary">Offline outbox payload serialization, replay idempotency & duplicate rejection</td>
                  <td className="py-2 text-right text-accent-green font-bold">15 passed / 121 assertions</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono font-medium text-text-primary dark:text-dark-text-primary">RelawanT0SubmissionTest</td>
                  <td className="py-2 text-text-secondary dark:text-dark-text-secondary">T0 Red Flag emergency event dispatch, WebSocket broadcast & hospital routing</td>
                  <td className="py-2 text-right text-accent-green font-bold">11 passed / 68 assertions</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono font-medium text-text-primary dark:text-dark-text-primary">AssessmentLocalShellTest</td>
                  <td className="py-2 text-text-secondary dark:text-dark-text-secondary">Intake session continuity, multi-page state preservation & score calculations</td>
                  <td className="py-2 text-right text-accent-green font-bold">4 passed / 109 assertions</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono font-medium text-text-primary dark:text-dark-text-primary">vue-tsc & Vite Build</td>
                  <td className="py-2 text-text-secondary dark:text-dark-text-secondary">Strict frontend type safety & production bundle optimization</td>
                  <td className="py-2 text-right text-accent-green font-bold">Clean Build PASS</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 10. Repository and Demo Links */}
      <section id="links-section" className="space-y-6">
        <div className="border-b border-border dark:border-dark-border pb-3">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary dark:text-dark-text-primary flex items-center">
            <span className="text-accent-green mr-3 text-xl font-mono">10.</span>
            Repository & Demonstration Links
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-text-primary dark:text-dark-text-primary font-bold text-base">
                <GithubIcon className="w-5 h-5" />
                <span>Source Code Repository</span>
              </div>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Explore the complete application source code including Docker topology, Laravel business logic, Inertia-Vue components, and Web Worker ML pipelines.
              </p>
            </div>

            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-button-primary-bg dark:bg-dark-button-primary-bg text-button-primary-text dark:text-dark-button-primary-text hover:bg-button-primary-hover dark:hover:bg-dark-button-primary-hover text-xs font-semibold transition-colors group"
              >
                <span>View on GitHub</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <div className="p-3 rounded-lg bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 text-xs font-mono text-text-secondary dark:text-dark-text-secondary border border-dashed border-border dark:border-dark-border text-center">
                [GitHub Repository URL placeholder, configure in constants.ts]
              </div>
            )}
          </div>

          <div className="p-6 rounded-xl bg-card dark:bg-dark-card border border-border dark:border-dark-border space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-text-primary dark:text-dark-text-primary font-bold text-base">
                <FiActivity className="w-5 h-5 text-accent-green" />
                <span>Live Demo & Video Walkthrough</span>
              </div>
              <p className="text-xs text-text-secondary dark:text-dark-text-secondary leading-relaxed">
                Interactive prototype walkthrough demonstrating the complete Relawan offline intake, emergency T0 WebSocket alert, and Healthcare validation sequence.
              </p>
            </div>

            {demoUrl ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-accent-green text-white hover:bg-accent-green/90 text-xs font-semibold transition-colors group"
              >
                <span>Launch Demo Environment</span>
                <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <div className="p-3 rounded-lg bg-button-secondary-bg/50 dark:bg-dark-button-secondary-bg/50 text-xs font-mono text-text-secondary dark:text-dark-text-secondary border border-dashed border-border dark:border-dark-border text-center">
                [Live Demo / Presentation Video placeholder, configure in constants.ts]
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction email={email} setCurrentPage={setCurrentPage} />
    </article>
  );
};
