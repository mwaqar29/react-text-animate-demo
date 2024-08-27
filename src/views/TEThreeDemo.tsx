import { TextEffectThree } from 'react-text-animate'
import {
  PageContainer,
  PageTitle,
  PageBody,
  PageSection,
  SectionTitle,
} from '../components/Containers'
import { words } from '../constants'

const TEThreeDemo = () => {
  const COMPONENT_NAME = `<TextEffectThree />`

  return (
    <PageContainer>
      <PageTitle>{COMPONENT_NAME}</PageTitle>
      <PageBody>
        <PageSection>
          <SectionTitle>Default</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[12]}
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[13]}
            fromTop
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Right</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[14]}
            fromLast
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Start from the Top-Right</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[15]}
            fromTop
            fromLast
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Stagger Duration (Increased to 0.06s)</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[16]}
            staggerDuration={0.06}
          />
        </PageSection>
        <PageSection>
          <SectionTitle>Animation Duration (Decreased to 0.1s)</SectionTitle>
          <TextEffectThree
            className="text-2xl md:text-4xl lg:text-6xl uppercase"
            text={words[17]}
            animationDuration={0.1}
          />
        </PageSection>
      </PageBody>
    </PageContainer>
  )
}

export default TEThreeDemo
