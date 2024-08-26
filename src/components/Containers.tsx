import { ContainerProps, PageTitleProps } from '../types'
import { LiaLongArrowAltRightSolid } from 'react-icons/lia'

const PageContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="m-4 page-border">{children}</div>
}

const PageTitle: React.FC<PageTitleProps> = ({ children }) => {
  return (
    <div className="border-b p-5 text-sm font-mono flex justify-center">
      {children}
    </div>
  )
}

const PageBody: React.FC<ContainerProps> = ({ children }) => {
  return <div className="px-4 py-8 flex flex-col gap-16">{children}</div>
}

const PageSection: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-col gap-4">{children}</div>
}

const SectionTitle: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="text-md md:text-lg lg:text-xl border-b pb-1 mb-2 flex items-center gap-2">
      <LiaLongArrowAltRightSolid size="20" /> {children}
    </div>
  )
}

export { PageContainer, PageTitle, PageBody, PageSection, SectionTitle }
