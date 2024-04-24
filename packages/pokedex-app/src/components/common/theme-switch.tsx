import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { IconButton } from '@mui/material'
import { useTheme } from 'next-themes'

export default function ThemeSwitchComponent() {
  const { theme, setTheme } = useTheme()
  const handleSwitch = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <IconButton aria-label="button" onClick={handleSwitch} type="button">
      {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}
