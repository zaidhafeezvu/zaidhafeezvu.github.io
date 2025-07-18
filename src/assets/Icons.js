// Icons collection - Single source of truth for all icons
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  Download,
  ChevronDown,
  ChevronRight,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  Layers,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Eye,
  Heart,
  Share2,
  MessageCircle,
  Send,
  ArrowUp
} from 'lucide-react';

// Navigation Icons
export const NavigationIcons = {
  menu: Menu,
  close: X,
  home: Home,
  about: User,
  services: Briefcase,
  contact: Mail,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  arrowUp: ArrowUp
};

// Social Media Icons
export const SocialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  instagram: Instagram,
  mail: Mail,
  phone: Phone
};

// Tech Stack Icons
export const TechIcons = {
  code: Code,
  palette: Palette,
  smartphone: Smartphone,
  globe: Globe,
  database: Database,
  server: Server,
  layers: Layers,
  zap: Zap
};

// Action Icons
export const ActionIcons = {
  download: Download,
  externalLink: ExternalLink,
  star: Star,
  checkCircle: CheckCircle,
  arrowRight: ArrowRight,
  eye: Eye,
  heart: Heart,
  share: Share2,
  message: MessageCircle,
  send: Send
};

// Utility Icons
export const UtilityIcons = {
  mapPin: MapPin,
  calendar: Calendar,
  clock: Clock
};

// Export all icons as a single object for easy access
export const Icons = {
  ...NavigationIcons,
  ...SocialIcons,
  ...TechIcons,
  ...ActionIcons,
  ...UtilityIcons
};

export default Icons;
