import React from 'react'
import { MDXProvider as Provider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import SlidePage from '@/components/presentation/SlidePage'
import Cover from '@/components/presentation/Cover'
import SpeakerNotes from '@/components/presentation/SpeakerNotes'
import Step from '@/components/presentation/Step'
import Steps from '@/components/presentation/Steps'

import Slides from '@/components/slides'

import { motion } from 'framer-motion'
import { Container } from '../Container'
import Link, { LinkProps } from 'next/link'

const mdComponents = {
  h1: (props: React.ComponentProps<'h1'>) => <h1 {...props} className="text-6xl font-semibold" />,
  h2: (props: React.ComponentProps<'h2'>) => <h2 {...props} className="text-4xl font-semibold" />,
  h3: (props: React.ComponentProps<'h3'>) => <h3 {...props} className="text-3xl font-semibold" />,

  a: (props: LinkProps) => <Link {...props} className="text-primary-500 hover:underline" />,

  ul: (props: React.ComponentProps<'ul'>) => <ul {...props} className="list-disc pl-8 py-2" />,

  pre: (props: React.ComponentProps<'pre'>) => props.children,

  code: (props: React.ComponentProps<'code'>) => {
    const { className } = props

    const language = className?.replace('language-', '')

    return <SyntaxHighlighter className={className} language={language} style={okaidia} {...props} />
  },

  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <div className="container mx-auto max-w-screen-lg">
      <blockquote {...props} />
    </div>
  ),

  Cover,
  SlidePage,
  Container,
  SpeakerNotes,
  Step,
  Steps,
  motion,
  ...Slides,
}

export const MDXProvider = ({ children }: React.PropsWithChildren) => (
  <div className="bg-gradient-app">
    <Provider components={mdComponents}>{children}</Provider>
  </div>
)

export default MDXProvider
