// Tools and skills from the "Core Skills & Tools" section of the CV.

export type Tool = { name: string; icon?: string; mono?: string; color: string }

export const tools: Tool[] = [
  { name: 'SQL', mono: 'SQL', color: '#60a5fa' },
  { name: 'Power BI', mono: 'BI', color: '#f2c811' },
  { name: 'Advanced Excel', mono: 'X', color: '#21a366' },
  { name: 'Python', icon: '/icons/python.svg', color: '#3776ab' },
  { name: 'Tableau', mono: '+', color: '#e97627' },
  { name: 'MS Office', mono: 'O', color: '#d83b01' },
  { name: 'SolidWorks', mono: 'SW', color: '#da291c' },
]

export const skillGroups = [
  {
    title: 'Techniques',
    items: ['Data Cleaning', 'EDA', 'Dashboarding', 'KPI Tracking', 'Reporting', 'Statistical Analysis', 'Hypothesis Testing', 'Forecasting', 'ETL'],
  },
  {
    title: 'Business',
    items: ['Requirement Gathering', 'Stakeholder Communication', 'Problem Solving', 'Process Improvement', 'B2B Sales', 'Client Relationships'],
  },
]
