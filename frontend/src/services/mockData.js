export const initialMenuItems = [
  {
    id: 'm1',
    name: '焦糖玛奇朵',
    category: '咖啡',
    price: 5.49,
    description: '新鲜蒸奶，配以香草味糖浆，点缀浓缩咖啡，再撒上焦糖粉.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    availability: true,
    isPopular: true,
    prepTime: '4-6 mins'
  },
  {
    id: 'm2',
    name: '匠意浓缩双份',
    category: '咖啡',
    price: 3.99,
    description: '浓郁醇厚的深烘焙埃塞俄比亚咖啡豆，带有厚重的金色克丽玛.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    availability: true,
    isPopular: true,
    prepTime: '2-3 mins'
  },
  {
    id: 'm3',
    name: '丝绒馥芮白',
    category: '咖啡',
    price: 4.99,
    description: '将细腻的微泡全脂牛奶倾倒在双份浓缩咖啡上，再以丝滑的拿铁图案装饰.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    availability: true,
    isPopular: false,
    prepTime: '3-5 mins'
  },
  {
    id: 'm4',
    name: '抹茶拿铁',
    category: '茶',
    price: 5.29,
    description: '用燕麦奶和微妙的龙舌兰甜味将日本宇治抹茶的仪式感完美呈现.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    availability: true,
    isPopular: true,
    prepTime: '4-5 mins'
  },
  {
    id: 'm5',
    name: '伯爵红茶薰衣草典藏版',
    category: '茶',
    price: 4.29,
    description: '有机锡兰红茶，融合了天然的意大利佛手柑和法国薰衣草花蕾.',
    image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    availability: true,
    isPopular: false,
    prepTime: '3-4 mins'
  },
  {
    id: 'm6',
    name: '冰萃香草泡沫咖啡',
    category: '冷饮',
    price: 5.79,
    description: '24小时慢泡的冷萃咖啡，加冰块饮用，上面再撒上丝滑甜美的奶油冷泡沫.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    availability: true,
    isPopular: true,
    prepTime: '3 mins'
  },
  {
    id: 'm7',
    name: '比利时巧克力可颂',
    category: '零食',
    price: 4.49,
    description: '酥脆、黄油般的多层千层酥，内馅是融化的比利时黑巧克力块.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    availability: true,
    isPopular: true,
    prepTime: '2 mins'
  },
  {
    id: 'm8',
    name: '牛油果酸面包吐司',
    category: '零食',
    price: 8.99,
    description: '压碎的有机牛油果、辣椒片、微型蔬菜，以及水煮荷包蛋，配以手工烤制的酸面包.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    availability: true,
    isPopular: false,
    prepTime: '8-10 mins'
  },
  {
    id: 'm9',
    name: '经典提拉米苏',
    category: '甜点',
    price: 6.99,
    description: '传统的意大利浓缩咖啡浸泡过的手指饼干，层层叠叠地涂上浓郁的马斯卡彭芝士和可可粉.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    availability: true,
    isPopular: true,
    prepTime: '3 mins'
  },
  {
    id: 'm10',
    name: '纽约蓝莓芝士蛋糕',
    category: '甜点',
    price: 6.49,
    description: '浓郁丝滑的芝士蛋糕，配以黄油全麦饼干底和野生蓝莓果酱.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    availability: true,
    isPopular: false,
    prepTime: '3 mins'
  }
];

export const initialTablesList = [
  { tableNumber: 1, capacity: 2, status: 'Occupied', section: 'Window View' },
  { tableNumber: 2, capacity: 2, status: 'Available', section: 'Window View' },
  { tableNumber: 3, capacity: 4, status: 'Reserved', section: 'Main Lounge' },
  { tableNumber: 4, capacity: 4, status: 'Occupied', section: 'Main Lounge' },
  { tableNumber: 5, capacity: 6, status: 'Available', section: 'VIP Terrace' },
  { tableNumber: 6, capacity: 2, status: 'Cleaning', section: 'Cozy Nook' },
  { tableNumber: 7, capacity: 4, status: 'Available', section: 'Garden Patio' },
  { tableNumber: 8, capacity: 8, status: 'Reserved', section: 'Executive Suite' }
];

export const initialOrdersList = [
  {
    orderId: 'BB-9041',
    customerName: 'Sophia Reynolds',
    customerEmail: 'sophia@example.com',
    customerPhone: '+1 555-0192',
    orderType: 'Dine-in',
    tableNumber: 1,
    items: [
      { menuItemId: 'm1', name: 'Caramel Macchiato', price: 5.49, quantity: 2, image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80' },
      { menuItemId: 'm7', name: 'Belgian Chocolate Croissant', price: 4.49, quantity: 1, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80' }
    ],
    subtotal: 15.47,
    tax: 0.77,
    discount: 0,
    totalAmount: 16.24,
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    orderStatus: 'Preparing',
    createdAt: new Date(Date.now() - 15 * 60000).toISOString()
  },
  {
    orderId: 'BB-9042',
    customerName: 'Alexander Wright',
    customerEmail: 'alex@example.com',
    customerPhone: '+1 555-0821',
    orderType: 'Takeaway',
    tableNumber: null,
    items: [
      { menuItemId: 'm6', name: 'Iced Cold Brew Vanilla Foam', price: 5.79, quantity: 1, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80' },
      { menuItemId: 'm9', name: 'Tiramisu Classico', price: 6.99, quantity: 1, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=600&q=80' }
    ],
    subtotal: 12.78,
    tax: 0.64,
    discount: 1.00,
    totalAmount: 12.42,
    paymentStatus: 'Paid',
    paymentMethod: 'UPI / QR',
    orderStatus: 'Ready',
    createdAt: new Date(Date.now() - 28 * 60000).toISOString()
  },
  {
    orderId: 'BB-9043',
    customerName: 'Elena Rostova',
    customerEmail: 'elena@example.com',
    customerPhone: '+1 555-0433',
    orderType: 'Dine-in',
    tableNumber: 4,
    items: [
      { menuItemId: 'm3', name: 'Velvet Flat White', price: 4.99, quantity: 2, image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80' },
      { menuItemId: 'm8', name: 'Avocado Sourdough Toast', price: 8.99, quantity: 2, image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80' }
    ],
    subtotal: 27.96,
    tax: 1.40,
    discount: 2.00,
    totalAmount: 27.36,
    paymentStatus: 'Paid',
    paymentMethod: 'Apple Pay',
    orderStatus: 'Confirmed',
    createdAt: new Date(Date.now() - 5 * 60000).toISOString()
  }
];

export const initialReservationsList = [
  {
    id: 'res-101',
    customerName: 'Dr. Michael Vance',
    customerEmail: 'vance@clinic.org',
    customerPhone: '+1 555-4920',
    tableNumber: 3,
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: 4,
    status: 'Confirmed',
    specialRequests: 'Anniversary celebration with flowers on table'
  },
  {
    id: 'res-102',
    customerName: 'Jessica Alba',
    customerEmail: 'jessica@studio.com',
    customerPhone: '+1 555-7721',
    tableNumber: 8,
    date: new Date().toISOString().split('T')[0],
    time: '20:00',
    guests: 6,
    status: 'Confirmed',
    specialRequests: 'Quiet area for business dinner'
  }
];
