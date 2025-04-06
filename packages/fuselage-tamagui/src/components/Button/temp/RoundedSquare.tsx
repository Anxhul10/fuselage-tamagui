import { View, styled } from '@tamagui/core'

export const RoundedSquare = styled(View, {
  borderRadius: 20,

  variants: {
    pin: {
      top: {
        position: 'absolute',
        top: 0,
      },
    },

    centered: {
      true: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  } as const,
})