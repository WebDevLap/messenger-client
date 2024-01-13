import { TextField } from '@mui/material'
import { useInput } from '@shared/hooks/functional'
import React from 'react'

export const PasswordInput = ({input}: {input: ReturnType<typeof useInput>}) => {
  return (
    <TextField
            {...input.handlers}
            helperText={
              <div style={{ minHeight: 30 }}>{input.errorText}</div>
            }
            error={input.isShowError}
            value={input.value}
            label="Input password"
            fullWidth
          ></TextField>
  )
}
