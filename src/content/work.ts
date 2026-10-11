// Roles, projects, education and certifications, straight from Akshay's CV.

export type Role = {
  company: string
  title: string
  period: string
  place: string
  tag: string
  points: string[]
  highlight?: string
}

export const roles: Role[] = [
  {
    company: 'Savson Motors',
    title: 'Business Intelligence Analyst, Sales',
    period: '2025 – Present',
    place: 'Belagavi',
    tag: 'Automobile',
    points: [
      'Translate business problems into data-driven insights through sales trend analysis, forecasting and performance modelling.',
      'Analyse large datasets with Excel and CRM tools to produce actionable BI reports.',
      'Support strategic planning with revenue projections, territory analysis and demand forecasting.',
      'Automated reporting processes to cut manual effort and improve accuracy.',
    ],
  },
  {
    company: 'Ai Variant',
    title: 'Business Analyst Intern',
    period: 'Jan 2025 – Oct 2025',
    place: 'BTM Layout, Bengaluru',
    tag: '9-month internship',
    highlight: '100+ datasets analysed · 15+ dashboards built',
    points: [
      'Analysed complex datasets with SQL and Excel to extract meaningful business insights.',
      'Data cleaning, preprocessing and EDA to keep reports accurate and reliable.',
      'Built interactive Power BI / Tableau dashboards to surface trends and KPIs.',
      'Ran statistical analysis and hypothesis tests to validate business assumptions.',
      'Documented insights and presented findings to mentors in client-style reviews.',
    ],
  },
  {
    company: 'KIDO Enterprises Pvt. Ltd.',
    title: 'Business Operations Analyst',
    period: '2024 – 2025',
    place: 'Belagavi Zone',
    tag: 'Ed-tech · B2B',
    points: [
      'Managed B2B operations across Kreedo schools: teacher training, product demos and client engagement.',
      'Met principals and school management to introduce solutions, generate leads and close deals.',
      'Gathered requirements from school principals and analysed market trends for expansion.',
      'Drove revenue, lead conversion and collections while keeping long-term client relationships.',
    ],
  },
  {
    company: 'Shantesha Motors Pvt. Ltd. · NEXA',
    title: 'Sales Operations Analyst',
    period: '2021 – 2024',
    place: 'Belagavi',
    tag: 'Automobile',
    highlight: 'NEXA RM certified in 3 months, one of the fastest',
    points: [
      'Handled the end-to-end sales process, from enquiry management to closing.',
      'Identified customer needs and recommended the right solutions for a great buying experience.',
      'Coordinated with inventory and stock teams to match customer requirements to availability.',
      'Focused on retention, repeat business and dealership brand value.',
    ],
  },
]

export type Project = {
  title: string
  kind: string
  stack: string[]
  summary: string
  kpis: string[]
  /** decorative mini-chart shape for the card (not real data) */
  chart: 'bars' | 'line' | 'donut' | 'flow'
  accent: string
}

export const projects: Project[] = [
  {
    title: 'E-commerce Analytics',
    kind: 'Sales & customer analysis',
    stack: ['SQL', 'Python', 'Excel', 'Power BI'],
    summary:
      'Identified customer trends, top-performing products and revenue drivers, then built Power BI dashboards to guide marketing, pricing and retention decisions.',
    kpis: ['Customer trends', 'Top products', 'Revenue drivers'],
    chart: 'bars',
    accent: '#a78bfa',
  },
  {
    title: 'Zomato Analytics',
    kind: 'Restaurant market insights',
    stack: ['SQL', 'Python', 'Excel', 'Power BI'],
    summary:
      'Uncovered customer preferences, cuisine trends, pricing patterns and rating distributions; dashboards track average cost, delivery, table booking and restaurant density.',
    kpis: ['Avg. cost', 'Delivery availability', 'Restaurant density'],
    chart: 'donut',
    accent: '#f472b6',
  },
  {
    title: 'Superstore USA Analytics',
    kind: 'Profit & discount impact',
    stack: ['SQL', 'Python', 'Excel', 'Power BI'],
    summary:
      'Analysed profit, discount impact and purchasing behaviour across regions and categories, with dashboards for sales, margin, shipping cost and segment performance.',
    kpis: ['Profit margin', 'Shipping cost', 'Segment performance'],
    chart: 'line',
    accent: '#38bdf8',
  },
  {
    title: 'Multi-Source Data Integration',
    kind: 'ETL & data quality',
    stack: ['SQL', 'Python', 'ETL'],
    summary:
      'Built ETL pipelines that integrate multiple sources, applying cleaning, validation and transformation for consistent, accurate and complete analytics.',
    kpis: ['Consistency', 'Accuracy', 'Completeness'],
    chart: 'flow',
    accent: '#34d399',
  },
]

export const education = [
  { title: 'Bachelor of Engineering', detail: 'Mechanical Engineering, Belagavi', period: '2017 – 2021' },
  { title: 'Diploma', detail: 'Mechanical Engineering, Belagavi', period: '2013 – 2016' },
  { title: 'Matriculation', detail: 'Kendriya Vidyalaya, Chennai', period: '2002 – 2013' },
]

export const certifications = [
  { title: 'Business Analyst', by: 'ExcelR', when: "Jun '25" },
  { title: 'NEXA Certified Relationship Manager', by: 'NEXA', when: 'Within 3 months of joining' },
  { title: 'YSA Silver Sales Manager', by: 'YSA', when: '' },
  { title: 'National-level paper presentations', by: 'Multiple 1st & 2nd places', when: '' },
]
