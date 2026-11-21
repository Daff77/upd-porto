# Daffa Danendra Fairuzza — Developer Portfolio

Personal developer portfolio for **Daffa Danendra Fairuzza**: Information Systems student at UIN Sunan Ampel Surabaya, aspiring Software Engineer focused on Full-Stack Development with an interest in AI/ML.

## Project Structure

```text
├── content/                  # Editable profile, skills, experience & project data
│   ├── profile.ts            # Identity, bio, direction, approach & languages
│   ├── skills.ts             # Categorized technical skills ("used" vs "explored")
│   ├── experience.ts         # Organizational involvement & education
│   └── projects.ts           # Featured projects & learning experiments
├── components/               # Pages and layout components
│   ├── ui/                   # Reusable UI primitives (Button, Reveal, SectionHeading, Tag)
│   ├── navigation.tsx        # AppLink & NavigationContext
│   └── ...
├── hooks/                    # Custom hooks (usePageMeta)
├── assets/                   # Fonts, audio, GitHub snapshot, static assets
├── constants.ts              # Central re-export hub + nav/social config
├── types.ts                  # TypeScript definitions
└── App.tsx                   # Routing, theme toggling & smooth scroll shell
```

## Updating Content

### Profile, Email & LinkedIn
Edit `content/profile.ts` to populate `email`, `linkedinUrl`, or `photoUrl` when available.

### Project Screenshots
1. Place image files inside `assets/projects/`.
2. Import them in `content/projects.ts`.
3. Add entries to the project's `media` array (`{ src, alt, caption }`). The first item automatically replaces the architectural diagram cover.

### Optional Contact Form
Copy `.env.example` to `.env` and set `VITE_WEB3FORMS_ACCESS_KEY` with a [Web3Forms](https://web3forms.com) access key to enable the message form on the Contact page.

## Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

## Credits & Attribution
- Portfolio of **Daffa Danendra Fairuzza**
- Adapted from open-source developer portfolio template by [Anand Krishna (@krishhnahere)](https://instagram.com/krishhnahere)
- UI inspiration: [Subtle Folio](https://dribbble.com/shots/22110108-Subtle-Folio-Portfolio-Framer-Template) by Nur Praditya
