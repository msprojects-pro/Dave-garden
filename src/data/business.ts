import lawnCareImg from '../assets/images/service_lawn_care_1792526792711.jpg';
import hedgeTrimmingImg from '../assets/images/service_hedge_trimming_1792526793138.jpg';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Sparkles' | 'Scissors' | 'Trees' | 'Shovel' | 'Home' | 'Wrench';
  badge?: string;
  image?: string;
}

export const BUSINESS_INFO = {
  name: "Dave's Garden & Property Maintenance",
  shortName: "Dave's Garden Maintenance",
  tagline: "No Job Too Big or Small",
  category: "Gardening & Property Maintenance",
  location: "Shropshire, United Kingdom",
  areaServed: "Shropshire and surrounding areas",
  phone: "+44 7399 406002",
  phoneDisplay: "07399 406002",
  phoneInternational: "+44 7399 406002",
  phoneTel: "tel:+447399406002",
  email: "Davidsgardenmaintenance1@gmail.com",
  emailMailto: "mailto:Davidsgardenmaintenance1@gmail.com",
  whatsappUrl: "https://wa.me/447399406002",
  tiktokHandle: "@daves_gardens_sy10",
  tiktokUrl: "https://www.tiktok.com/@daves_gardens_sy10",
  availability: "Always open",
  quotesPolicy: "Free quotes available upon message request.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "lawn-care",
    title: "Lawn Care & Grass Cutting",
    description: "Reliable grass cutting, lawn edging, and regular mowing to keep your turf neat, green, and healthy.",
    iconName: "Trees",
    badge: "Popular",
    image: lawnCareImg,
  },
  {
    id: "hedge-trimming",
    title: "Hedge Trimming",
    description: "Precision hedge shaping, reduction, and neat trimming to keep property borders crisp and manageable.",
    iconName: "Scissors",
    image: hedgeTrimmingImg,
  },
  {
    id: "garden-tidy-ups",
    title: "Garden Tidy-Ups",
    description: "Thorough garden clean-ups, clearing seasonal debris, weed management, and restoring untidy beds.",
    iconName: "Sparkles",
    badge: "Seasonal",
  },
  {
    id: "garden-maintenance",
    title: "Garden Maintenance",
    description: "Scheduled or one-off upkeep to preserve flower beds, borders, and overall garden presentation.",
    iconName: "Shovel",
  },
  {
    id: "outdoor-space",
    title: "Outdoor Space Maintenance",
    description: "Sweeping, washing down, and caring for driveways, patios, paths, and outdoor domestic surfaces.",
    iconName: "Home",
  },
  {
    id: "general-upkeep",
    title: "General Property Upkeep",
    description: "Practical exterior repairs, fencing checks, and hands-on maintenance jobs around your property.",
    iconName: "Wrench",
  },
];

export const BENEFITS = [
  {
    id: "flexible",
    title: "Flexible Help",
    description: "Get in touch about the work your garden or property needs, whether a quick visit or a larger project.",
  },
  {
    id: "quotes",
    title: "Straightforward Quotes",
    description: "Request a free quote by message with zero hassle and no obligation.",
  },
  {
    id: "local",
    title: "Local Service",
    description: "Serving Shropshire and surrounding areas where available with prompt, dependable service.",
  },
];
