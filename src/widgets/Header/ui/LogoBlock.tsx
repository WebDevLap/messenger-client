import { Box } from '@mui/material'
import { Logo } from '@shared/ui/Logo'
import React from 'react'

export const LogoBlock = () => {
  return (
    <Box
        sx={{
          flexGrow: 1,
          display: {
            sm: "block",
            xs: "none",
          },
        }}
      >
        <Logo />
      </Box>
  )
}
