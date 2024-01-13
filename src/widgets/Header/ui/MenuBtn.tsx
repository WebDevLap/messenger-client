import { Menu } from '@mui/icons-material'
import React from 'react'

export const MenuBtn = ({onClick}: {onClick: () => unknown}) => {
  return (
    <Menu
        onClick={onClick}
        sx={{
          display: {
            sm: "block",
            md: "none",
          },
          ml: 2,
          cursor: "pointer",
        }}
      />
  )
}
