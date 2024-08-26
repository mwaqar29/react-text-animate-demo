import { useNavigate, useLocation } from 'react-router-dom'
import { LiaLongArrowAltLeftSolid } from 'react-icons/lia'

import { PlayButtonProps } from '../types'

const PlayButton: React.FC<PlayButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="play-button text-xs transition tracking-wider px-2 py-1 w-fit"
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
          className="back-button border fixed ml-4 p-3 z-1"
        >
          <LiaLongArrowAltLeftSolid size="44" />
        </button>
      )}
    </>
  )
}

export { PlayButton, BackButton }
