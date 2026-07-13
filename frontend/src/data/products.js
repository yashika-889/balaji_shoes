import sandals from '../assets/sandals.webp'
import skechon1 from '../assets/skechon_1.webp'
import skechon2 from '../assets/skechon_2.webp'
import skechon111 from '../assets/skechon_111.webp'
import skechon121 from '../assets/skechon_121.webp'
import tprShocker2 from '../assets/tpr_shocker_2.webp'
import mrIndia from '../assets/mr_india.webp'
import kidsAstronaut from '../assets/kids_astronaut.webp'
import nexa4 from '../assets/nexa_4.webp'
import kidsUltraman from '../assets/kids_ultraman.webp'
import defender from '../assets/defender.webp'
import bullRider from '../assets/bull_rider.webp'

export const PRODUCTS = [
  // Men's Sneakers (Skech-On Series & Shocker Series)
  {
    id: 'skechon-1',
    slug: 'skechon-1',
    category: 'Men',
    name: 'SKECHON-1',
    series: 'Skech-On Series',
    brand: 'HYCROSS',
    description: 'High-comfort slip-on sports sneakers designed for active daily movement, featuring a lightweight phylon sole and breathable knit mesh upper.',
    material: 'Breathable Knit & Phylon Cushioned Sole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['Navy/Orange', 'D Grey/F Green', 'Full Black/Red'],
    mrp: '999',
    moq: '500 Pairs',
    image: skechon1,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },
  {
    id: 'skechon-2',
    slug: 'skechon-2',
    category: 'Men',
    name: 'SKECHON-2',
    series: 'Skech-On Series',
    brand: 'HYCROSS',
    description: 'Elegant slip-on trainers engineered with dynamic heel support and a responsive textured outsole for exceptional grip and shock absorption.',
    material: 'Premium Mesh Knit & Ultra-Light Phylon Sole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['Navy/Orange', 'D Grey/F Green', 'Black/Red'],
    mrp: '999',
    moq: '500 Pairs',
    image: skechon2,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },
  {
    id: 'skechon-111',
    slug: 'skechon-111',
    category: 'Men',
    name: 'SKECHON-111',
    series: 'Skech-On Series',
    brand: 'HYCROSS',
    description: 'Premium casual slip-on sneakers with an engineered wave-pattern sole offering responsive rebound and an adaptive mesh collar for a snug fit.',
    material: 'Flexible Engineered Knit & Wave Phylon Sole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['D Grey/F Green', 'Navy/Orange', 'Black/Red'],
    mrp: '1149',
    moq: '500 Pairs',
    image: skechon111,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },
  {
    id: 'skechon-121',
    slug: 'skechon-121',
    category: 'Men',
    name: 'SKECHON-121',
    series: 'Skech-On Series',
    brand: 'HYCROSS',
    description: 'Advanced sports lifestyle shoes featuring a honeycomb hollow-midsole design for maximum impact absorption and side-stabilizing panels.',
    material: 'Knit Mesh Upper & Hollow Core Resilient Sole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['Navy/Orange', 'Black/Red', 'D Grey/F Green'],
    mrp: '1349',
    moq: '500 Pairs',
    image: skechon121,
    features: ['Comfy Fit', 'Honeycomb Cushioning', 'Light Weight', 'Flexible']
  },
  {
    id: 'tpr-shocker-2',
    slug: 'tpr-shocker-2',
    category: 'Men',
    name: 'TPR-SHOCKER-2',
    series: 'Shocker Series',
    brand: 'HYCROSS',
    description: 'High-traction outdoor trainers featuring a heavy-duty lugged TPR outsole and a stretch-to-fit knit collar for excellent durability and performance.',
    material: 'Stretch Knit & Rugged TPR Traction Sole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['Mehandi/Yellow', 'Navy/Orange', 'Olive/Yellow', 'Black/Red', 'D Grey/P Green'],
    mrp: '949',
    moq: '500 Pairs',
    image: tprShocker2,
    features: ['Heavy Traction', 'Comfy Soft', 'Lugged Sole', 'Flexible']
  },
  {
    id: 'mr-india',
    slug: 'mr-india',
    category: 'Men',
    name: 'MR. INDIA',
    series: 'Special Edition',
    brand: 'HYCROSS',
    description: 'Featuring a specialized cup-insole design for unparalleled arch support, these slip-on shoes deliver all-day comfort for walking and commuting.',
    material: 'Double-Knit Mesh & Special Cup Insole',
    sizes: 'UK 6x9 | 7x10',
    colors: ['Black'],
    mrp: '1149',
    moq: '500 Pairs',
    image: mrIndia,
    features: ['Cup Insole Inside', 'Comfy Soft', 'Light Weight', 'Arch Support']
  },

  // Kids' Sandals & Cartoon Slides
  {
    id: 'kids-astronaut',
    slug: 'kids-astronaut',
    category: 'Kids',
    name: 'ASTRONAUT',
    series: 'Kids Cartoon Sandals',
    brand: 'HYCROSS',
    description: 'Adventure-themed kids sandals with 3D space astronaut charms, designed with a textured footbed to prevent slipping during playtime.',
    material: 'Flexible Cushioning EVA',
    sizes: 'Kids 15x19',
    colors: ['White', 'L.Grey', 'Violet', 'Navy'],
    mrp: '215',
    moq: '600 Pairs',
    image: kidsAstronaut,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },
  {
    id: 'kids-ultraman',
    slug: 'kids-ultraman',
    category: 'Kids',
    name: 'ULTRAMAN',
    series: 'Kids Cartoon Sandals',
    brand: 'HYCROSS',
    description: 'A character-themed kids\' sandal featuring a prominent 3D cartoon "Ultraman" action-hero graphic badge fixed onto the front upper strap.',
    material: 'Soft Cushioned EVA & Synthetic Straps',
    sizes: 'Kids 16x20',
    colors: ['Navy', 'Black', 'D.Grey', 'R.Blue'],
    mrp: '315',
    moq: '600 Pairs',
    image: kidsUltraman,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },
  {
    id: 'nexa-4',
    slug: 'nexa-4',
    category: 'Kids',
    name: 'NEXA-4',
    series: 'Nexa Sandals Series',
    brand: 'HYCROSS',
    description: 'A sporty, dual-strap adjustable sandal styled with a distinctive "CAPTION" text branding design along the side panels.',
    material: 'Synthetic Straps & Cushioned EVA Sole',
    sizes: 'UK 6x9',
    colors: ['Grey/Red', 'Grey/Yellow', 'Grey/Orange'],
    mrp: '399',
    moq: '500 Pairs',
    image: nexa4,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },

  // Men's & Boys' Sandals (Grip & Cruiser Series)
  {
    id: 'jump-1',
    slug: 'jump-1',
    category: 'Sandals',
    name: 'JUMP-1',
    series: 'Jump Sandals Series',
    brand: 'HYCROSS',
    description: 'High-comfort sandals with double straps and thick cushion soles, designed specifically for growing feet and active boys.',
    material: 'Eva Foam Core & High-Grip Rubber Outsole',
    sizes: 'UK 11x1 | 2x5',
    colors: ['Mehandi/Black', 'N Blue/Orange', 'N Blue/Red'],
    mrp: '329 / 359',
    moq: '600 Pairs',
    image: sandals,
    features: ['Thick Cushioning', 'Durable Velcro', 'Arch Support', 'Lightweight']
  },
  {
    id: 'defender',
    slug: 'defender',
    category: 'Sandals',
    name: 'DEFENDER',
    series: 'Slides Collection',
    brand: 'HYCROSS',
    description: 'A clean, solid-colored lightweight slide featuring small side drainage/breathing ports near the sole line.',
    material: 'Industrial-grade Waterproof EVA',
    sizes: 'UK 40x44',
    colors: ['D.Grey', 'Black', 'White', 'N.Blue', 'Mehandi'],
    mrp: '299',
    moq: '500 Pairs',
    image: defender,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  },


  // Clogs & Slides (Defender & Bull Rider)

  {
    id: 'bull-rider',
    slug: 'bull-rider',
    category: 'Crocs',
    name: 'BULL RIDER',
    series: 'Slides Collection',
    brand: 'HYCROSS',
    description: 'A rugged, textured slide featuring a distinct 3D colored emblem of a cartoon "BULLS" or bull head graphic centered on the upper strap.',
    material: 'Contoured Resilient EVA',
    sizes: 'UK 11x1 | 2x5 | 6x9',
    colors: ['Mehandi', 'Black', 'White', 'Navy', 'L.Grey'],
    mrp: '299',
    moq: '500 Pairs',
    image: bullRider,
    features: ['Comfy Fit', 'Comfy Soft', 'Light Weight', 'Flexible']
  }
]

export const getProductBySlug = (slug) => {
  return PRODUCTS.find(p => p.slug === slug)
}

export const getRelatedProducts = (category, currentId, limit = 3) => {
  return PRODUCTS
    .filter(p => p.category === category && p.id !== currentId)
    .slice(0, limit)
}
