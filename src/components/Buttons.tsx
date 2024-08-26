import { useNavigate, useLocation } from 'react-router-dom'
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia'

import { PlayButtonProps } from '../types'

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="text-xs border border-transparent transition tracking-wider px-2 py-1 w-fit"
      >
        <span className="mr-1">▶</span> PLAY
      </button>
    </div>
  )
}

const BackButton = () => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <>
      {location.pathname !== '/' && (
        <button
          onClick={() => navigate('/')}
          className="border fixed ml-4 p-6 z-1"
        >
          <LiaLongArrowAltLeftSolid size="20" />
        </button>
      )}
    </>
  )
}

export { PlayButton, BackButton }
