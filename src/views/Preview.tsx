import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion } from 'framer-motion'

import { components } from '../constants'

const Preview = () => {
  const navigate = useNavigate()

  const initializeKeys = () => Array(components.length).fill(0)
  const [animationKeys, setAnimationKeys] = useState(initializeKeys)

  const playAnimation = (idx: number) => {
    setAnimationKeys((prevKeys) => {
      const newKeys = [...prevKeys]
      newKeys[idx]++
      return newKeys
    })
  }

  return (
    <motion.div
      className="text-2xl md:text-4xl lg:text-6xl p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {components.map((component, idx) => (
        <div key={idx} className="border flex flex-col">
          <div className="flex items-center mx-6 my-3 gap-8">
            {!component.hidePlay && (
              <button
                onClick={() => playAnimation(idx)}
                className="text-xs hover:translate-x-1 hover:transition transition tracking-wider"
              >
                <span className="mr-1">▶</span> PLAY
              </button>
            )}
            <button
              onClick={() => navigate(component.href, {})}
              className="text-xs hover:translate-x-1 hover:transition transition tracking-wider flex items-center gap-2 mr-auto"
            >
              VIEW VARIATIONS <RxHamburgerMenu />
            </button>
            <div className="text-xl md:text-2xl lg:text-4xl">
              {idx + 1 > 9 ? idx + 1 : '0' + (idx + 1)}
            </div>
          </div>
          <div className="px-6 py-10">
            <component.name key={animationKeys[idx]} text={component.text} />
          </div>
          <div className="text-xs m-6 font-mono">{component.snippet}</div>
        </div>
      ))}
    </motion.div>
  )
}

export default Preview
