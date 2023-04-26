import React from 'react'
import { MDXProvider as Provider } from '@mdx-js/react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/cjs/styles/prism/okaidia'
import { SlidePage } from '@/components/presentation/SlidePage'
import { Cover } from '@/components/presentation/Cover'
import { SpeakerNotes } from '@/components/presentation/SpeakerNotes'
import { Step } from '@/components/presentation/Step'
import { Steps } from '@/components/presentation/Steps'

import { slides } from '@/components/slides'


import { motion } from 'framer-motion'
import { Container } from '../Container'
import Link, { LinkProps } from 'next/link'
import { Stripes } from '../Stripes'

console.log("🚀 ~ slides:", slides)

const mdComponents = {
  h1: (props: React.ComponentProps<'h1'>) => (
    <h1 {...props} className="text-3xl break-all sm:break-normal xs:text-5xl sm:text-6xl mb-8 font-semibold" />
  ),

  h2: (props: React.ComponentProps<'h2'>) => <h2 {...props} className="text-2xl xs:text-4xl sm:text-4xl  mb-6 font-semibold" />,

  h3: (props: React.ComponentProps<'h3'>) => <h3 {...props} className="text-xl sm:text-2xl mb-4 font-semibold" />,

  a: (props: LinkProps) => <Link {...props} className="text-primary-400 hover:underline after:content-['↗'] " />,

  p: (props: React.ComponentProps<'p'>) => <p {...props} className="text-lg mt-4 " />,

  strong: (props: React.ComponentProps<'strong'>) => <strong {...props} className="font-semibold" />,

  img: (props: React.ComponentProps<'img'>) => <img {...props} className="ring-2 ring-slate-300 rounded-xl w-full h-auto" />,

  ul: (props: React.ComponentProps<'ul'>) => <ul {...props} className="list-disc text-base pl-8 py-2" />,

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

  Stripes,
  Cover,
  SlidePage,
  Container,
  SpeakerNotes,
  Step,
  Steps,
  motion,

  ...slides,
}

export const MDXProvider = ({ children }: React.PropsWithChildren) => (
  <div className="bg-gradient-app">
    <Provider components={mdComponents}>{children}</Provider>
  </div>
)

export default MDXProvider
