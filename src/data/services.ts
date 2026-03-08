export interface Project {
  title: string;
  imageUrl: string;
  caption: string;
}

export interface ServiceData {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string;
  coverImage?: string;
  subServices: string[];
  projects: Project[];
}

export const SERVICES: ServiceData[] = [
  {
    id: 'signage',
    title: 'Signage Structures',
    slug: 'signage-structures',
    description: 'Specialized structural analysis and design for commercial signage installations. We ensure stability against wind loads, seismic forces, and environmental conditions for all signage types.',
    iconName: 'Layout',
    coverImage: '/interiorSigns.jpg',
    subServices: ['Blade Signs', 'Channel Letters', 'Light Boxes', 'Wayfinding Signs', 'Interior Signs', 'Temporary Sign Structures', 'Monuments', 'Pylons', 'Billboards'],
    projects: [
      { title: 'Blade Sign Design', imageUrl: '/bladeSign.png', caption: 'Cantilevered blade sign for mixed-use building.' },
      { title: 'Channel Letter Installation', imageUrl: '/channelLetters.jpg', caption: 'Mounting analysis for illuminated channel letters.' },
      { title: 'Light Box Signage', imageUrl: '/lightBoxes.png', caption: 'Structural support and mounting for illuminated light box displays.' },
      { title: 'Wayfinding Sign System', imageUrl: '/wayfindingSign.png', caption: 'Multi-sign campus wayfinding structural package.' },
      { title: 'Interior Signs', imageUrl: '/interiorSigns.jpg', caption: 'Interior signage mounting and structural support design.' },
      { title: 'Monument Sign', imageUrl: '/monumentSign.jpg', caption: 'Foundation and wind load analysis for retail monument sign.' },
      { title: 'Billboard Sign', imageUrl: '/billboardSign.png', caption: 'Structural design for large-format billboard installation.' },
      { title: 'Pylon Signs', imageUrl: '/pylonSigns.png', caption: 'Engineered steel pylon sign for commercial property.' },
      { title: 'Cantilevered Signs', imageUrl: '/cantileveredSigns.png', caption: 'Structural analysis for cantilevered signage systems.' },
      { title: 'Temporary Sign Structures', imageUrl: '/temporarySigns.png', caption: 'Temporary signage structural support and anchoring design.' },
    ],
  },
  {
    id: 'shade',
    title: 'Shade Cover Structures',
    slug: 'shade-cover-structures',
    description: 'Engineering for shade and cover structures that combine function with architectural appeal. From simple carports to complex playground canopies, we design for durability and code compliance.',
    iconName: 'Tent',
    coverImage: '/carports.png',
    subServices: ['Pergolas', 'Canopies', 'Carports', 'Playground Shade Structures'],
    projects: [
      { title: 'Commercial Pergola', imageUrl: '/pergolas.png', caption: 'Steel pergola for an outdoor dining area.' },
      { title: 'Playground Shade Canopy', imageUrl: '/playgroundShade.png', caption: 'Fabric tensile shade structure for a public park.' },
      { title: 'Residential Carport', imageUrl: '/carports.png', caption: 'Freestanding aluminum carport design.' },
      { title: 'Walkway Canopy', imageUrl: '/canopies.png', caption: 'Covered walkway connecting commercial buildings.' },
    ],
  },
  {
    id: 'pools',
    title: 'Swimming Pools & Spas',
    slug: 'swimming-pools-spas',
    description: 'Structural engineering for in-ground pools, elevated spas, and associated deck structures. We handle soil interaction, hydrostatic pressure, and code-required barrier systems.',
    iconName: 'Waves',
    coverImage: '/spa.png',
    subServices: [],
    projects: [
      { title: 'Swimming Pool', imageUrl: '/swimmingPool.png', caption: 'Structural engineering for in-ground swimming pool installation.' },
      { title: 'Spa', imageUrl: '/spa.png', caption: 'Structural design and support for spa installation.' },
    ],
  },
  {
    id: 'cmu',
    title: 'Exterior CMU Walls & Fences',
    slug: 'exterior-cmu-walls-fences',
    description: 'Design and analysis of concrete masonry unit walls, retaining walls, and fence systems. We ensure structural adequacy for lateral loads, soil pressure, and seismic requirements.',
    iconName: 'BrickWall',
    coverImage: '/fences.png',
    subServices: ['CMU Walls and Extensions', 'Retaining Walls', 'Fences'],
    projects: [
      { title: 'CMU Walls', imageUrl: '/cmuWalls.png', caption: 'CMU block wall design with pilaster reinforcement.' },
      { title: 'Retaining Wall System With Fences', imageUrl: '/fencesRetaining.png', caption: 'Tiered retaining wall for hillside residential lot.' },
      { title: 'Fences', imageUrl: '/fences.png', caption: 'Steel and masonry fence structural design.' },
    ],
  },
  {
    id: 'staircases',
    title: 'Staircase Systems',
    slug: 'staircase-systems',
    description: 'Precision engineering for complex staircase geometries. We specialize in floating treads, spiral systems, and architectural stairs using steel, glass, and timber.',
    iconName: 'Layers',
    coverImage: '/staircase.png',
    subServices: [],
    projects: [
      { title: 'Staircase', imageUrl: '/staircase.png', caption: 'Structural engineering for residential staircase system.' },
      { title: 'Stair System', imageUrl: '/stairSystem.png', caption: 'Complete stair system structural design and analysis.' },
    ],
  },
];
