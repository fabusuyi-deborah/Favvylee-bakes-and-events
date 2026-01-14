import {
  Cake,
  Sandwich,
  Wheat,
  GlassWater,
  Utensils,
  PartyPopper,
} from 'lucide-react';

export const services = [
  {
    title: 'Cakes & Desserts',
    description:
      'Custom cakes, cupcakes, cookies, doughnuts & parfaits for every celebration.',
    href: '/menu#desserts',
    icon: Cake,
  },
  {
    title: 'Small Chops & Savouries',
    description:
      'Perfect party bites including puff-puff, spring rolls, samosas & more.',
    href: '/menu#small-chops',
    icon: Sandwich,
  },
  {
    title: 'Breads & Baked Goods',
    description:
      'Freshly baked white bread, wheat bread, banana bread and more.',
    href: '/menu#breads',
    icon: Wheat,
  },
  {
    title: 'Drinks',
    description: 'Refreshing fruity zobo made for all occasions.',
    href: '/menu#drinks',
    icon: GlassWater,
  },
  {
    title: 'Catering Services',
    description:
      'Event catering, food trays, soup bowls & full-service food delivery.',
    href: '/menu#catering-events',
    icon: Utensils,
  },
  {
    title: 'Event Services',
    description:
      'Event planning, décor, dessert tables, vendor sourcing & party packs.',
    href: '/menu#catering-events',
    icon: PartyPopper,
  },
]