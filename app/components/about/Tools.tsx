import React from 'react'
import type { AboutProps } from '~/type'

const Tools = ({tools}:{tools:AboutProps[]}) => {
  return (
          <div className="rounded-2xl bg-gray-900/40 p-6">
              <h3 className="text-base font-bold text-white">
                Daily Toolchain
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {tools.map((tool) => (
                  <li key={tool.id} className="flex flex-col">
                    <span className="font-medium text-white">{tool.name}</span>
                    <span className="text-xs text-gray-500">{tool.role}</span>
                  </li>
                ))}
              </ul>
            </div>
  )
}

export default Tools
