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
import { words } from '../constants'

const TEOneDemo = () => {
  const COMPONENT_NAME = `<TextEffectOne />`
  const textMultiline = [words[3], words[4], words[5]]

  const initializeKeys = () => Array(10).fill(0)
  const [animationKeys, setAnimationKeys] = useState(initializeKeys)

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
            text={words.slice(0, 3).join(' ')}
          />
          <PlayButton onClick={() => playAnimation(0)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Multi-line</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[1]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={textMultiline}
          />
          <PlayButton onClick={() => playAnimation(1)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Adding Rotation</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[2]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={words[6]}
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
            text={words[7]}
            staggerDuration={0.3}
          />
          <PlayButton onClick={() => playAnimation(3)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[4]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={words[8]}
            fromTop
          />
          <PlayButton onClick={() => playAnimation(4)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the End</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[5]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={words[9]}
            fromLast
          />
          <PlayButton onClick={() => playAnimation(5)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start Delayed (by 3s)</SectionTitle>
          <TextEffectOne
            animateOnce
            key={animationKeys[6]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={words[10]}
            initialDelay={3}
          />
          <PlayButton onClick={() => playAnimation(6)} />
        </PageSection>
        <PageSection>
          <SectionTitle>
            Always play the animation when element enters viewport
          </SectionTitle>
          <TextEffectOne
            key={animationKeys[7]}
            className="text-2xl md:text-4xl lg:text-6xl tracking-wider"
            text={words[11]}
          />
          <PlayButton onClick={() => playAnimation(7)} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TEOneDemo
