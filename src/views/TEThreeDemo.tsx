import { TextEffectThree } from 'react-text-animate'
import {
  PageContainer,
  PageTitle,
  PageBody,
  PageSection,
  SectionTitle,
} from '../components/Containers'
import { useTextGenerator } from '../hooks/useTextGenerator'

const TEThreeDemo = () => {
  const COMPONENT_NAME = `<TextEffectThree />`
  const { getNextWord } = useTextGenerator(18)

  return (
    <PageContainer>
      <PageTitle>{COMPONENT_NAME}</PageTitle>
      <PageBody>
        <PageSection>
          <SectionTitle>Default</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord()}
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord()}
            fromTop
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Right</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord() + '🌙'}
            fromLast
            lineHeight={1}
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top-Right</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord()}
            fromTop
            fromLast
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Increased to 0.06s)</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord()}
            staggerDuration={0.06}
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Animation Duration (Decreased to 0.1s)</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={getNextWord()}
            animationDuration={0.1}
          />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TEThreeDemo
