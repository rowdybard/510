import React from 'react'

interface Feature {
  title: string
  description: string
  icon?: string
}

interface FeatureListProps {
  features: Feature[]
  columns?: 2 | 3 | 4
}

export default function FeatureList({ features, columns = 3 }: FeatureListProps) {
  const gridCols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }

  return (
    <div className={`grid grid-cols-1 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-500 transition-colors bg-white dark:bg-gray-800"
        >
          {feature.icon && (
            <div className="mb-4 text-3xl" aria-hidden="true">
              {feature.icon}
            </div>
          )}
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
