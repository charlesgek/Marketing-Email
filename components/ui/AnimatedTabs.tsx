'use client';
import { motion } from 'framer-motion';

export function AnimatedTabs({ tabs }: { tabs: string[] }) {
  const [selected, setSelected] = useState(tabs[0]);

  return (
    <div className="flex gap-2 p-1 bg-gray-100 rounded-lg">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className="relative px-4 py-2"
        >
          {tab}
          {selected === tab && (
            <motion.div
              layoutId="tab-underline"
              className="absolute bottom-0 left-0 w-full h-1 bg-blue-500"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}