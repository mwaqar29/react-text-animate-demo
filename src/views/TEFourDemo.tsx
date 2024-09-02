import { useState } from 'react'
import { TextEffectFour } from 'react-text-animate'
import {
  PageContainer,
  PageTitle,
  PageBody,
  PageSection,
  SectionTitle,
} from '../components/Containers'
import { PlayButton } from '../components/Buttons'
import { useTextGenerator } from '../hooks/useTextGenerator'

const TEFourDemo = () => {
  const COMPONENT_NAME = `<TextEffectFour />`

  const initializeKeys = () => Array(15).fill(0)
  const [animationKeys, setAnimationKeys] = useState(initializeKeys)
  const { getNextWord } = useTextGenerator(24)

  const playAnimation = (idx: number) => {
    setAnimationKeys((prevKeys) => {
      const newKeys = [...prevKeys]
      newKeys[idx]++
      return newKeys
    })
  }

  return (
    <PageContainer>
      <PageTitle>{COMPONENT_NAME}</PageTitle>
      <PageBody>
        <PageSection>
          <SectionTitle>Default</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[0]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={`${getNextWord()} ${getNextWord()}`}
          />
          <PlayButton onClick={() => playAnimation(0)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from Center</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[1]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            fromCenter
          />
          <PlayButton onClick={() => playAnimation(1)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Horizontal Cursor</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[2]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            cursorConfig={{
              type: 'horizontal',
            }}
          />
          <PlayButton onClick={() => playAnimation(2)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Custom Color, Margin & Width</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[3]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            cursorConfig={{
              color: 'tomato',
              width: '4px',
              marginLeft: '8px',
            }}
          />
          <PlayButton onClick={() => playAnimation(3)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Cursor Hidden</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[4]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            cursorConfig={{ type: 'hidden' }}
          />
          <PlayButton onClick={() => playAnimation(4)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Cursor Blink Rate (Increased to 0.15s)</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[5]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            cursorConfig={{ blinkRate: 0.15 }}
          />
          <PlayButton onClick={() => playAnimation(5)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Emojis (because, they are cool! 😎)</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[6]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord() + ' 💯✨💖'}
          />
          <PlayButton onClick={() => playAnimation(6)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Decreased to 0.05s)</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[7]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            staggerDuration={0.05}
          />
          <PlayButton onClick={() => playAnimation(7)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start Delayed (by 3s)</SectionTitle>
          <TextEffectFour
            animateOnce
            key={animationKeys[8]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
            initialDelay={3}
          />
          <PlayButton onClick={() => playAnimation(8)} />
        </PageSection>
        <PageSection>
          <SectionTitle>
            Always play the animation when element enters viewport
          </SectionTitle>
          <TextEffectFour
            key={animationKeys[9]}
            className="text-2xl md:text-4xl lg:text-6xl"
            text={getNextWord()}
          />
          <PlayButton onClick={() => playAnimation(9)} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TEFourDemo
