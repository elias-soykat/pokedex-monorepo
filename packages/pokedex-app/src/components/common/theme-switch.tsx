import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton, useMediaQuery } from '@mui/material'
import { useTheme } from 'next-themes'

export default function ThemeSwitchComponent() {
  const { theme, setTheme } = useTheme()
  const isSM = useMediaQuery('(min-width:640px)')

  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <IconButton onClick={handleSwitch} style={{ marginRight: isSM ? '1rem' : '0rem' }} type="button">
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}
