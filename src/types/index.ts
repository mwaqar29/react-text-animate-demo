interface ContainerProps {
  children: React.ReactNode
}

interface PageTitleProps {
  children: string
}

interface PlayButtonProps {
  onClick: () => void
}

export type { ContainerProps, PageTitleProps, PlayButtonProps }
