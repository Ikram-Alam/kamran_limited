import { Product, Brand, CementType, ProductUsage } from '@/types';

export const products: Product[] = [
  // Falcon Cement Products
  {
    id: 'falcon-opc',
    name: 'Falcon OPC Cement',
    brand: Brand.FALCON,
    type: CementType.OPC,
    usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL],
    strength: 'Grade 53',
    description: 'Premium quality Ordinary Portland Cement for all types of construction work',
    features: [
      'High strength and durability',
      'Consistent quality',
      'Fast setting time',
      'Suitable for RCC work',
      'Approved by international standards'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry place',
        'Keep away from moisture',
        'Use within 3 months of manufacturing',
        'Stack maximum 10 bags high'
      ]
    },
    image: '/images/falcon-opc.jpg'
  },
  {
    id: 'falcon-src',
    name: 'Falcon SRC Cement',
    brand: Brand.FALCON,
    type: CementType.SRC,
    usage: [ProductUsage.MARINE, ProductUsage.INFRASTRUCTURE],
    strength: 'Sulfate Resistant',
    description: 'Specialized cement for marine and sulfate-prone environments',
    features: [
      'Excellent sulfate resistance',
      'Ideal for marine structures',
      'Long-term durability',
      'Chemical resistant',
      'Premium quality'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry place',
        'Keep away from moisture',
        'Use within 3 months of manufacturing',
        'Stack maximum 10 bags high'
      ]
    },
    image: '/images/falcon-src.jpg'
  },

  // Lucky Cement Products
  {
    id: 'lucky-opc',
    name: 'Lucky OPC Cement',
    brand: Brand.LUCKY,
    type: CementType.OPC,
    usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL, ProductUsage.INFRASTRUCTURE],
    strength: 'Grade 53',
    description: 'Pakistan\'s leading cement brand for superior construction quality',
    features: [
      'Highest compressive strength',
      'Excellent workability',
      'Low heat of hydration',
      'Consistent quality control',
      'Eco-friendly production'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry covered area',
        'Avoid direct contact with ground',
        'Use FIFO method',
        'Maximum storage: 3 months'
      ]
    },
    image: '/images/lucky-opc.jpg'
  },
  {
    id: 'lucky-composite',
    name: 'Lucky Composite Cement',
    brand: Brand.LUCKY,
    type: CementType.COMPOSITE,
    usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL],
    strength: 'Grade 43',
    description: 'Cost-effective cement with excellent performance',
    features: [
      'Good workability',
      'Lower heat of hydration',
      'Economical solution',
      'Suitable for plastering',
      'Environmentally friendly'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry place',
        'Keep away from moisture',
        'Use within 3 months',
        'Proper ventilation required'
      ]
    },
    image: '/images/lucky-composite.jpg'
  },

  // Thatta Cement Products
  {
    id: 'thatta-opc',
    name: 'Thatta OPC Cement',
    brand: Brand.THATTA,
    type: CementType.OPC,
    usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL],
    strength: 'Grade 53',
    description: 'Trusted cement brand for reliable construction',
    features: [
      'High early strength',
      'Consistent quality',
      'Good fineness',
      'Competitive pricing',
      'Wide availability'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry warehouse',
        'Avoid moisture exposure',
        'Use within 90 days',
        'Stack carefully'
      ]
    },
    image: '/images/thatta-opc.jpg'
  },

  // DG Cement Products
  {
    id: 'dg-opc',
    name: 'DG OPC Cement',
    brand: Brand.DG,
    type: CementType.OPC,
    usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL, ProductUsage.INFRASTRUCTURE],
    strength: 'Grade 53',
    description: 'Premium cement for demanding construction projects',
    features: [
      'Superior strength',
      'Excellent durability',
      'Low shrinkage',
      'High quality standards',
      'Proven performance'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry covered area',
        'Keep away from moisture',
        'Use within 3 months',
        'Maximum 10 bags height'
      ]
    },
    image: '/images/dg-opc.jpg'
  },

  // Block Cement
  {
    id: 'block-cement',
    name: 'Block Cement',
    brand: Brand.FALCON,
    type: CementType.BLOCK,
    usage: [ProductUsage.PRECAST],
    strength: 'Specialized',
    description: 'Specially formulated for block and precast manufacturing',
    features: [
      'Fast setting',
      'High early strength',
      'Excellent molding properties',
      'Cost-effective',
      'Consistent performance'
    ],
    specifications: {
      packingSizes: ['50 kg bags', 'Bulk supply available'],
      storageGuidelines: [
        'Store in dry place',
        'Avoid moisture',
        'Use within 2 months',
        'Proper handling required'
      ]
    },
    image: '/images/block-cement.jpg'
  },

  // White Cement
//   {
//     id: 'white-cement',
//     name: 'Premium White Cement',
//     brand: Brand.WHITE,
//     type: CementType.WHITE,
//     usage: [ProductUsage.RESIDENTIAL, ProductUsage.COMMERCIAL],
//     strength: 'Premium Grade',
//     description: 'High-quality white cement for finishing and decorative work',
//     features: [
//       'Pure white color',
//       'Excellent workability',
//       'Smooth finish',
//       'High reflectivity',
//       'Perfect for tiles and finishing'
//     ],
//     specifications: {
//       packingSizes: ['25 kg bags', '50 kg bags'],
//       storageGuidelines: [
//         'Store in completely dry area',
//         'Avoid any moisture contact',
//         'Use within 2 months',
//         'Careful handling required'
//       ]
//     },
//     image: '/images/white-cement.jpg'
//   }
];

export const getProductsByBrand = (brand: string): Product[] => {
  return products.filter(p => p.brand.toLowerCase().includes(brand.toLowerCase()));
};

export const getProductsByType = (type: string): Product[] => {
  return products.filter(p => p.type.toLowerCase().includes(type.toLowerCase()));
};

export const getProductsByUsage = (usage: ProductUsage): Product[] => {
  return products.filter(p => p.usage.includes(usage));
};
