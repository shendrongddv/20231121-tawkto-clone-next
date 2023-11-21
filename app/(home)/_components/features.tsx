import { fakerFeatures } from "@/config/faker";
import { Item } from "@radix-ui/react-dropdown-menu";
import { LucideIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="px-4 pt-24">
      <div className="container flex flex-col items-center gap-12">
        {/* Row */}
        <div className="flex flex-col items-center gap-3 text-center md:w-2/3">
          <h2 className="h2">All the Features, without the price tag</h2>
          <p className="lead">
            A truly customizable live chat and customer communication platform
            packed with premium features
          </p>
        </div>

        {/* Row */}
        <ul className="grid w-full grid-cols-2 gap-1 gap-y-4 sm:grid-cols-3 md:grid-cols-4 md:gap-x-8">
          {fakerFeatures?.map((item) => (
            <FeatureItem
              key={item.id}
              title={item.title}
              isStable={item.isStable}
              icon={item.icon}
            />
          ))}
        </ul>

        {/* Row */}
        <p className="opacity-80">..and much, much more.</p>
      </div>
    </section>
  );
};

export default Features;

// Components
type FeatureItemProps = {
  title: string;
  isStable: boolean;
  icon: LucideIcon;
};
const FeatureItem = ({ title, isStable, icon: Icon }: FeatureItemProps) => {
  return (
    <li className="group flex items-center justify-start gap-1 md:gap-2">
      <Icon className="h-4 w-4 text-primary md:h-5 md:w-5" />
      <span className="text-xs font-medium opacity-80 group-hover:opacity-100 md:text-base">
        {title}
      </span>
      {!isStable && (
        <span className="rounded bg-destructive p-0.5 px-1 text-[10px] leading-none text-white">
          BETA
        </span>
      )}
    </li>
  );
};
