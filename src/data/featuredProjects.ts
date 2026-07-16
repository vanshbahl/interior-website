export type FeaturedProject = {
  id: string
  slug: string
  title: string
  category: string
  location: string
  year: string
  area: string
  status: string
  coverImage: string
  shortDescription: string
}

export const featuredProjects: FeaturedProject[] = [
  { id: '01', slug: 'house-on-courtyard', title: 'House on Courtyard', category: 'Residential', location: 'Copenhagen, Denmark', year: '2025', area: '420 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A calm family home centred on light, limestone, and moments of gathering.' },
  { id: '02', slug: 'montauk-retreat', title: 'Montauk Retreat', category: 'Coastal Residence', location: 'Montauk, New York', year: '2024', area: '310 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Soft coastal tones and hand-finished timber shape a retreat made for long summers.' },
  { id: '03', slug: 'marlow-townhouse', title: 'Marlow Townhouse', category: 'Residential', location: 'London, England', year: '2025', area: '285 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A restrained renovation that lets the original rhythm of the townhouse lead.' },
  { id: '04', slug: 'casa-oliva', title: 'Casa Oliva', category: 'Private Residence', location: 'Puglia, Italy', year: '2024', area: '365 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Sun-washed plaster, antique stone, and quiet rooms looking toward the olive groves.' },
  { id: '05', slug: 'the-library-room', title: 'The Library Room', category: 'Hospitality', location: 'Melbourne, Australia', year: '2025', area: '180 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=88', shortDescription: 'An intimate members’ space composed for conversation, reading, and evening light.' },
  { id: '06', slug: 'via-san-nicolo', title: 'Via San Nicolò', category: 'Apartment', location: 'Milan, Italy', year: '2023', area: '210 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A historic apartment distilled to a palette of walnut, bronze, and warm white.' },
  { id: '07', slug: 'pied-a-terre-no-7', title: 'Pied-à-Terre No. 7', category: 'Apartment', location: 'Paris, France', year: '2025', area: '145 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Tailored rooms where collected pieces and custom joinery create an easy elegance.' },
  { id: '08', slug: 'the-oak-house', title: 'The Oak House', category: 'Residential', location: 'Kent, England', year: '2024', area: '510 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A new rural home, grounded by oak, wool, and the changing landscape beyond.' },
  { id: '09', slug: 'sable-gallery', title: 'Sable Gallery', category: 'Commercial', location: 'New York, USA', year: '2025', area: '240 m²', status: 'In progress', coverImage: 'https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A spare, tactile setting designed to let contemporary art take the lead.' },
  { id: '10', slug: 'palma-house', title: 'Palma House', category: 'Private Residence', location: 'Mallorca, Spain', year: '2024', area: '390 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1800&q=88', shortDescription: 'Soft stone, deep shade, and a dialogue between the home and its garden.' },
  { id: '11', slug: 'aurelia-suite', title: 'Aurelia Suite', category: 'Hospitality', location: 'Rome, Italy', year: '2025', area: '125 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A layered suite balancing Roman grandeur with a deeply residential softness.' },
  { id: '12', slug: 'northwood-studio', title: 'Northwood Studio', category: 'Creative Workspace', location: 'Toronto, Canada', year: '2024', area: '195 m²', status: 'Completed', coverImage: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=88', shortDescription: 'A focused workspace made tactile and warm through natural timber and linen.' },
]
