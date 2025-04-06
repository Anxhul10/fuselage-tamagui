import { Text, createStyledContext, styled } from '@tamagui/core'

export const TypographyContext = createStyledContext({
  size: 'p2m',
})

export const Typography = styled(Text, {
  name: 'Typography',
  context: TypographyContext,

  color: '$color',
  fontFamily: '$body',
  selectable: false,

  variants: {
    size: {
      h1: {
        fontSize: 32,
        lineHeight: 40,
        fontWeight: '700',
      },
      h2: {
        fontSize: 28,
        lineHeight: 36,
        fontWeight: '700',
      },
      h3: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: '700',
      },
      h4: {
        fontSize: 20,
        lineHeight: 28,
        fontWeight: '700',
      },
      p1: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '400',
      },
      p2m: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '500',
      },
      p2s: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
      },
      caption: {
        fontSize: 12,
        lineHeight: 18,
        fontWeight: '400',
      },
    },
    weight: {
      regular: {
        fontWeight: '400',
      },
      medium: {
        fontWeight: '500',
      },
      bold: {
        fontWeight: '700',
      },
    },
  },

  defaultVariants: {
    size: 'p2m',
    weight: 'medium',
  },
})
