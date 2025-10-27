import Link from 'next/link';
import { usePathname } from 'next/navigation';

const services = [
  {
    id: 'song',
    title: 'Создание песни на заказ',
    description: 'Уникальные песни под ваш проект',
    href: '/services/song'
  },
  {
    id: 'advertising',
    title: 'Песни для рекламы',
    description: 'Рекламные джинглы и саундтреки',
    href: '/services/advertising'
  },
  {
    id: 'youtube',
    title: 'Музыка для YouTube',
    description: 'Саундтреки для видеоблогов',
    href: '/services/youtube'
  },
  {
    id: 'podcast',
    title: 'Джинглы для подкастов',
    description: 'Музыкальное оформление подкастов',
    href: '/services/podcast'
  }
];

export default function ServicesNav() {
  const pathname = usePathname();
  
  return (
    <nav className="bg-slate-800/50 backdrop-blur-sm border-t border-b border-slate-700">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service) => {
            const isActive = pathname === service.href;
            return (
              <Link
                key={service.id}
                href={service.href}
                className={\`relative px-4 py-2 rounded-lg transition-colors 
                  \${isActive 
                    ? 'bg-sky-500/20 text-sky-300 hover:bg-sky-500/30' 
                    : 'hover:bg-slate-700/50 text-slate-300 hover:text-white'
                  }
                \`}
              >
                <div className="text-sm font-medium">{service.title}</div>
                <div className="text-xs opacity-75">{service.description}</div>
                {isActive && (
                  <div className="absolute -bottom-[1px] left-1/2 w-12 h-0.5 bg-sky-400 -translate-x-1/2" />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}