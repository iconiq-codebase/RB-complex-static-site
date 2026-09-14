import type { ComponentProps } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Bus,
  CarFront,
  CirclePercent,
  Footprints,
  Heart,
  Info,
  MapPin,
  Phone,
  Search,
  ShoppingBag,
  Shirt,
  Sparkles,
  Store,
  Tag,
  Waves,
  Zap,
} from "lucide-react";

const icons = {
  arrow: ArrowRight,
  external: ArrowUpRight,
  fashion: Shirt,
  footwear: Footprints,
  electronics: Zap,
  offer: CirclePercent,
  visit: MapPin,
  search: Search,
  parking: CarFront,
  access: Waves,
  services: Store,
  info: Info,
  phone: Phone,
  save: Heart,
  walk: Footprints,
  drive: CarFront,
  transit: Bus,
  bag: ShoppingBag,
  tag: Tag,
  sparkle: Sparkles,
};

export type IconName = keyof typeof icons;
export default function SiteIcon({
  name,
  ...props
}: { name: IconName } & ComponentProps<typeof ArrowRight>) {
  const Icon = icons[name];
  return (
    <Icon aria-hidden="true" focusable="false" strokeWidth={1.8} {...props} />
  );
}
