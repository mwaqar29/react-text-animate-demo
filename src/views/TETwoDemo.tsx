import { useState } from 'react'
import { TextEffectTwo } from 'react-text-animate'
import {
  PageContainer,
  PageTitle,
  PageBody,
  PageSection,
  SectionTitle,
} from '../components/Containers'
import { PlayButton } from '../components/Buttons'
import { sentences } from '../constants'

const TETwoDemo = () => {
  const COMPONENT_NAME = `<TextEffectTwo />`

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
          <TextEffectTwo
            animateOnce
            key={animationKeys[0]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[0]}
          />
          <PlayButton onClick={() => playAnimation(0)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Removed Filter</SectionTitle>
          <TextEffectTwo
            animateOnce
            key={animationKeys[1]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[1]}
            filter={false}
          />
          <PlayButton onClick={() => playAnimation(1)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Animation Duration (Increased to 2s)</SectionTitle>
          <TextEffectTwo
            animateOnce
            key={animationKeys[2]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[2]}
            animationDuration={2}
          />
          <PlayButton onClick={() => playAnimation(2)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Increased to 0.5s)</SectionTitle>
          <TextEffectTwo
            animateOnce
            key={animationKeys[3]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[3]}
            staggerDuration={0.5}
          />
          <PlayButton onClick={() => playAnimation(3)} />
        </PageSection>
        <PageSection>
          <SectionTitle>Start Delayed (by 3s)</SectionTitle>
          <TextEffectTwo
            animateOnce
            key={animationKeys[4]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[4]}
            initialDelay={3}
          />
          <PlayButton onClick={() => playAnimation(4)} />
        </PageSection>
        <PageSection>
          <SectionTitle>
            Always play the animation when element enters viewport
          </SectionTitle>
          <TextEffectTwo
            key={animationKeys[5]}
            className="text-xl md:text-2xl lg:text-4xl"
            text={sentences[5]}
          />
          <PlayButton onClick={() => playAnimation(5)} />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TETwoDemo
