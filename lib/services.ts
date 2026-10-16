import { photos, type Photo } from '@/lib/images'

export type Service = {
  id: string
  num: string
  title: string
  /** Jump-link label on /services. */
  navLabel: string
  /** One-line version used in the homepage list. */
  short: string
  /** Full description on /services. */
  body: string
  points: string[]
  photo: Photo
  fill: 'pink' | 'mauve' | 'sky'
}

export const services: Service[] = [
  {
    id: 'nursing',
    num: '01',
    title: 'Skilled nursing & personal care',
    navLabel: 'Nursing & personal care',
    short:
      'Medically supervised personal care delivered with dignity, in the comfort of your own home.',
    body: 'Medically supervised personal care delivered with dignity and professionalism, in the comfort of your own home — including round-the-clock, two-carer complex care packages.',
    points: [
      'Bathing, dressing and grooming',
      'Medication management',
      'Health monitoring',
      'Post-hospital recovery support',
    ],
    photo: photos.home,
    fill: 'pink',
  },
  {
    id: 'household',
    num: '02',
    title: 'Household & daily living',
    navLabel: 'Household & daily living',
    short:
      'Hands-on help with household tasks, meal planning and budgeting for a safe, independent life.',
    body: 'Hands-on help with the practical side of life, so home stays safe, comfortable and running smoothly.',
    points: [
      'Meal preparation',
      'Cleaning and laundry',
      'Shopping and errands',
      'Budgeting support',
    ],
    photo: photos.services,
    fill: 'mauve',
  },
  {
    id: 'social',
    num: '03',
    title: 'Emotional & social support',
    navLabel: 'Emotional & social',
    short:
      'Companionship, wellbeing and community connection — thriving means more than physical care.',
    body: 'Thriving means more than physical care. We nurture wellbeing, friendship and a sense of belonging.',
    points: [
      'Companionship',
      'Accompanying to social activities',
      'Wellbeing check-ins',
      'Regular family updates',
    ],
    photo: photos.about,
    fill: 'sky',
  },
  {
    id: 'skills',
    num: '04',
    title: 'Independent living skills',
    navLabel: 'Independent living skills',
    short:
      'Building confidence in everyday routines, so each person can live life on their own terms.',
    body: 'Building confidence and capability in everyday routines, so each person can live life on their own terms.',
    points: [
      'Cooking and self-care',
      'Public transport and getting around',
      'Building routines',
      'Support with decision-making',
    ],
    photo: photos.team,
    fill: 'pink',
  },
  {
    id: 'education',
    num: '05',
    title: 'Education, employment & volunteering',
    navLabel: 'Education & employment',
    short: 'Support to access meaningful opportunities in learning, work and the community.',
    body: 'Support to access meaningful opportunities in learning, work and the wider community.',
    points: [
      'CVs and job applications',
      'College and course enrolment',
      'Volunteering placements',
      'Settling in at work',
    ],
    photo: photos.services,
    fill: 'mauve',
  },
  {
    id: 'transport',
    num: '06',
    title: 'Transport & community access',
    navLabel: 'Transport & community access',
    short: 'Safe, accompanied travel to appointments, activities and errands — door to door.',
    body: 'Safe, reliable travel support so appointments, activities and everyday errands are never out of reach. Our caregivers accompany each person door to door, building familiarity and confidence with every journey.',
    points: [
      'Accompanied travel to medical appointments',
      'Transport to social and community activities',
      'Support with shopping and errand trips',
      'Door-to-door assistance and journey planning',
    ],
    photo: photos.about,
    fill: 'sky',
  },
]
