export type ProjectSector = 'Residential' | 'Commercial' | 'Hospitality'

export type Project = {
  id: string
  slug: string
  title: string
  category: string
  sector: ProjectSector
  location: string
  year: string
  area: string
  status: string
  coverImage: string
  shortDescription: string
  story: string
  gallery: string[]
  highlights: string[]
  materials: string[]
  challenge: string
  outcome: string
}

type ProjectSeed = Omit<Project, 'story' | 'gallery' | 'highlights' | 'materials' | 'challenge' | 'outcome'>

const galleryImages = [
  'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88',
  'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88',
  'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1800&q=88',
]

const categoryProfiles: Record<ProjectSector, Pick<Project, 'highlights' | 'materials' | 'challenge' | 'outcome'>> = {
  Residential: {
    highlights: ['A circulation plan softened around daily rituals', 'Bespoke joinery that gives each room its own quiet function', 'A measured palette that changes beautifully with the light'],
    materials: ['Honed travertine', 'Brushed walnut', 'Hand-finished plaster', 'Wool bouclé'],
    challenge: 'The existing plan held generous rooms but little connection between them. The work was to create a sense of flow without disturbing the building’s original character.',
    outcome: 'The completed home feels calm and deeply personal—built around the pace of everyday life rather than a single dramatic moment.',
  },
  Commercial: {
    highlights: ['A clear arrival sequence with a sense of pause', 'Layered lighting that shifts from day to evening', 'Custom display and work surfaces resolved as architecture'],
    materials: ['Smoked oak', 'Aged brass', 'Limestone', 'Natural linen'],
    challenge: 'The brief asked for a distinctive public identity while preserving enough quiet for focused work and considered conversation.',
    outcome: 'The result offers a recognisable point of view without competing with the people, objects, and ideas it was designed to host.',
  },
  Hospitality: {
    highlights: ['A guest journey composed through texture and light', 'Durable finishes with a residential sense of warmth', 'Furniture chosen for lingering, not simply looking'],
    materials: ['Veined marble', 'Oiled timber', 'Textured mohair', 'Patinated bronze'],
    challenge: 'The space needed to feel memorable from the first step in, yet remain comfortable enough to reward return visits.',
    outcome: 'An atmosphere of easy ritual: polished, tactile, and generous in the small moments that make guests want to stay longer.',
  },
}

const seeds: ProjectSeed[] = [
  { id: '01', slug: 'house-on-courtyard', title: 'House on Courtyard', category: 'Apartments', sector: 'Residential', location: 'Copenhagen, Denmark', year: '2025', area: '420 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A calm family home centred on light, limestone, and moments of gathering.' },
  { id: '02', slug: 'montauk-retreat', title: 'Montauk Retreat', category: 'Luxury Villas', sector: 'Residential', location: 'Montauk, New York', year: '2024', area: '310 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Soft coastal tones and hand-finished timber shape a retreat made for long summers.' },
  { id: '03', slug: 'marlow-townhouse', title: 'Marlow Townhouse', category: 'Apartments', sector: 'Residential', location: 'London, England', year: '2025', area: '285 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A restrained renovation that lets the original rhythm of the townhouse lead.' },
  { id: '04', slug: 'casa-oliva', title: 'Casa Oliva', category: 'Luxury Villas', sector: 'Residential', location: 'Puglia, Italy', year: '2024', area: '365 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Sun-washed plaster, antique stone, and quiet rooms looking toward olive groves.' },
  { id: '05', slug: 'the-library-room', title: 'The Library Room', category: 'Hospitality', sector: 'Hospitality', location: 'Melbourne, Australia', year: '2025', area: '180 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88', shortDescription: 'An intimate members’ space composed for conversation, reading, and evening light.' },
  { id: '06', slug: 'via-san-nicolo', title: 'Via San Nicolò', category: 'Apartments', sector: 'Residential', location: 'Milan, Italy', year: '2023', area: '210 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A historic apartment distilled to walnut, bronze, and warm white.' },
  { id: '07', slug: 'pied-a-terre-no-7', title: 'Pied-à-Terre No. 7', category: 'Apartments', sector: 'Residential', location: 'Paris, France', year: '2025', area: '145 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Tailored rooms where collected pieces and custom joinery create easy elegance.' },
  { id: '08', slug: 'the-oak-house', title: 'The Oak House', category: 'Luxury Villas', sector: 'Residential', location: 'Kent, England', year: '2024', area: '510 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A rural home grounded by oak, wool, and the changing landscape beyond.' },
  { id: '09', slug: 'sable-gallery', title: 'Sable Gallery', category: 'Retail', sector: 'Commercial', location: 'New York, USA', year: '2025', area: '240 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A spare, tactile setting designed to let contemporary art take the lead.' },
  { id: '10', slug: 'palma-house', title: 'Palma House', category: 'Luxury Villas', sector: 'Residential', location: 'Mallorca, Spain', year: '2024', area: '390 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Soft stone, deep shade, and a dialogue between the home and its garden.' },
  { id: '11', slug: 'aurelia-suite', title: 'Aurelia Suite', category: 'Hospitality', sector: 'Hospitality', location: 'Rome, Italy', year: '2025', area: '125 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A layered suite balancing Roman grandeur with residential softness.' },
  { id: '12', slug: 'northwood-studio', title: 'Northwood Studio', category: 'Offices', sector: 'Commercial', location: 'Toronto, Canada', year: '2024', area: '195 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A focused workspace made warm through natural timber and linen.' },
  { id: '13', slug: 'belmont-residence', title: 'Belmont Residence', category: 'Luxury Villas', sector: 'Residential', location: 'Los Angeles, USA', year: '2025', area: '460 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A hillside residence of pale stone, shadow, and long views.' },
  { id: '14', slug: 'atelier-no-4', title: 'Atelier No. 4', category: 'Offices', sector: 'Commercial', location: 'Berlin, Germany', year: '2024', area: '165 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A creative studio where restraint leaves room for concentration.' },
  { id: '15', slug: 'la-brasserie', title: 'La Brasserie', category: 'Restaurants', sector: 'Hospitality', location: 'Lyon, France', year: '2024', area: '230 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1800&q=88', shortDescription: 'An all-day dining room with amber light and generous rhythm.' },
  { id: '16', slug: 'cypress-cabin', title: 'Cypress Cabin', category: 'Luxury Villas', sector: 'Residential', location: 'Vancouver, Canada', year: '2023', area: '275 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A grounded escape with cedar, stone, and a close relationship to the forest.' },
  { id: '17', slug: 'mercer-apartment', title: 'Mercer Apartment', category: 'Apartments', sector: 'Residential', location: 'New York, USA', year: '2025', area: '170 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A measured city home for a life of art, work, and quiet evenings.' },
  { id: '18', slug: 'linden-house', title: 'Linden House', category: 'Renovations', sector: 'Residential', location: 'Amsterdam, Netherlands', year: '2024', area: '340 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A canal house renewed with tactile materials and an unforced calm.' },
  { id: '19', slug: 'flora-boutique', title: 'Flora Boutique', category: 'Retail', sector: 'Commercial', location: 'Sydney, Australia', year: '2025', area: '95 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A quietly expressive retail setting built around colour, texture, and pause.' },
  { id: '20', slug: 'casa-de-luz', title: 'Casa de Luz', category: 'Luxury Villas', sector: 'Residential', location: 'Ibiza, Spain', year: '2023', area: '430 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A whitewashed refuge where the rooms follow the sun from morning to dusk.' },
  { id: '21', slug: 'nomad-hotel-lobby', title: 'Nomad Hotel Lobby', category: 'Hospitality', sector: 'Hospitality', location: 'Lisbon, Portugal', year: '2025', area: '320 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A lobby made to slow the arrival and extend the feeling of welcome.' },
  { id: '22', slug: 'rothko-rooms', title: 'Rothko Rooms', category: 'Hospitality', sector: 'Hospitality', location: 'Copenhagen, Denmark', year: '2024', area: '270 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Guest rooms composed through softly layered colour and crafted restraint.' },
  { id: '23', slug: 'southbank-office', title: 'Southbank Office', category: 'Offices', sector: 'Commercial', location: 'London, England', year: '2023', area: '620 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A workplace that makes space for shared thinking and individual focus.' },
  { id: '24', slug: 'terra-restaurant', title: 'Terra Restaurant', category: 'Restaurants', sector: 'Hospitality', location: 'Melbourne, Australia', year: '2025', area: '185 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A dining room of earthen tones, hand-touched finishes, and low evening glow.' },
]

export const projects: Project[] = seeds.map((project, index) => {
  const profile = categoryProfiles[project.sector]
  return {
    ...project,
    story: `${project.title} began with a desire to make ${project.location} feel less like a destination and more like a natural extension of the people who use it. We worked from the existing architecture outward, balancing atmosphere with an everyday practicality that will deepen over time.`,
    gallery: [project.coverImage, galleryImages[index % galleryImages.length], galleryImages[(index + 1) % galleryImages.length]],
    ...profile,
  }
})

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
