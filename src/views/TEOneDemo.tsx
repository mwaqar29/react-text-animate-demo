import { useState } from 'react'
import { TextEffectOne } from 'react-text-animate'
import {
  PageContainer,
  PageTitle,
  PageBody,
  PageSection,
  SectionTitle,
} from '../components/Containers'
import { PlayButton } from '../components/Buttons'
import { useTextGenerator } from '../hooks/useTextGenerator'

const TEOneDemo = () => {
  const COMPONENT_NAME = `<TextEffectOne />`

  const initializeKeys = () => Array(15).fill(0)
  const [animationKeys, setAnimationKeys] = useState(initializeKeys)
  const { getNextWord } = useTextGenerator()

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
          <TextEffectOne
            animateOnce
            key={animationKeys[0]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider uppercase"
            text={`${getNextWord()} ${getNextWord()} ${getNextWord()}`}
          />
          <PlayButton onClick={() => playAnimation(0)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Multi-line</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[1]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={[getNextWord(), getNextWord(), getNextWord()]}
          />
          <PlayButton onClick={() => playAnimation(1)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Adding Rotation</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[2]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            rotation={67.5}
          />
          <PlayButton onClick={() => playAnimation(2)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Increased to 0.3s)</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[3]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            staggerDuration={0.3}
          />
          <PlayButton onClick={() => playAnimation(3)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Decreased to 0s)</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[4]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            staggerDuration={0}
          />
          <PlayButton onClick={() => playAnimation(4)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[5]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            fromTop
          />
          <PlayButton onClick={() => playAnimation(5)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Right</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[6]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            fromLast
          />
          <PlayButton onClick={() => playAnimation(6)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top-Right</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[7]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            fromTop
            fromLast
          />
          <PlayButton onClick={() => playAnimation(7)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Animate Word-by-word</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[8]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={`${getNextWord()} ${getNextWord()} ${getNextWord()}`}
            staggerDuration={0.35}
            wordByWord
          />
          <PlayButton onClick={() => playAnimation(8)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Emojis (because, they are cool! 😎)</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[9]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord() + '💎🌟✨'}
          />
          <PlayButton onClick={() => playAnimation(9)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start Delayed (by 3s)</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[10]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
            initialDelay={3}
          />
          <PlayButton onClick={() => playAnimation(10)} />
        </PageSection>
        <PageSection>
          <SectionTitle>
            Always play the animation when element enters viewport
          </SectionTitle>
          <TextEffectOne
            key={animationKeys[11]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={getNextWord()}
          />
          <PlayButton onClick={() => playAnimation(11)} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TEOneDemo
