// Every fact here comes from Akshay's CV (Akshay_Hosamani_Business_analyst_cv.pdf).
// Anything not on the CV is marked TODO rather than invented.

export const profile = {
  first: 'Akshay',
  last: 'Hosamani',
  role: 'Business Analyst',
  kicker: 'Business Analyst · BI & Reporting',
  headline: ['Turning raw data', 'into decisions.', 'On repeat.'],
  intro:
    'Results-driven Business Analyst with hands-on experience in data analysis, visualisation and business reporting, backed by 3+ years in the automobile and ed-tech industries.',
  location: 'Belagavi, Karnataka',
  email: 'akshayh25@gmail.com',
  phone: '+91 73531 08897',
  phoneHref: 'tel:+917353108897',
  linkedin: 'https://www.linkedin.com/in/akshay-hosamani-86b566107',
  images: {
    // Drop the real photos here (webp). The hero falls back to a live dashboard until then.
    hero: '/img/akshay-hero.webp',
    about: '/img/akshay-about.webp',
  },
  summary: [
    'I translate business problems into actionable insights: cleaning messy data, finding the story in it, and putting it on a dashboard people actually use.',
    'Before analytics, I spent years in front of customers: selling cars at NEXA and running B2B school partnerships at KIDO. That is where I learnt what a decision-maker really needs from a report.',
  ],
  interests: ['Data Science & AI', 'Playing instruments', 'Listening to music', 'Travel', 'Sports'],
}

export const nav = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

/** Floating KPI cards around the hero portrait. All numbers are from the CV. */
export const heroKpis = [
  { label: 'Datasets analysed', value: 100, suffix: '+', delta: 'Ai Variant internship' },
  { label: 'Dashboards built', value: 15, suffix: '+', delta: 'Power BI · Tableau' },
  { label: 'Industry experience', value: 3, suffix: '+ yrs', delta: 'Auto · Ed-tech' },
]

export const pillars = [
  {
    icon: 'query',
    title: 'Data Analysis',
    text: 'SQL, Excel and Python to clean, explore and model complex datasets.',
  },
  {
    icon: 'dash',
    title: 'Dashboards & KPIs',
    text: 'Interactive Power BI and Tableau dashboards that track what matters.',
  },
  {
    icon: 'stats',
    title: 'Statistics & Forecasting',
    text: 'Hypothesis testing, trend analysis, revenue projections and demand forecasting.',
  },
  {
    icon: 'people',
    title: 'Stakeholder Focus',
    text: 'Requirement gathering and clear communication, from principals to showroom floors.',
  },
]
