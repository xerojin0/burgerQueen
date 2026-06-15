import { useState } from 'react'
import { AppBar, Box, Button, Typography, Paper } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutlined'

const NAV_ITEMS = [
  { label: 'MENU' },
  {
    label: 'BRAND',
    children: ['브랜드', 'WHY 버거퀸', 'ESG 경영', '광고영상'],
  },
  {
    label: 'NEWS',
    children: ['이벤트', '공지사항'],
  },
  { label: 'STORE' },
  { label: 'NOTICE' },
  { label: '가맹창업·임대문의' },
]

const NavItem = ({ item }) => {
  const [open, setOpen] = useState(false)

  return (
    <Box
      sx={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Button
        sx={{
          color: '#fff',
          fontWeight: 600,
          fontSize: '0.85rem',
          letterSpacing: '0.05em',
          px: 1.5,
          py: 1,
          transition: 'color 0.3s ease',
          '&:hover': { color: '#418613', bgcolor: 'transparent' },
        }}
      >
        {item.label}
      </Button>

      {item.children && open && (
        <Paper
          elevation={4}
          sx={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            minWidth: 140,
            bgcolor: '#232323',
            border: '1px solid #418613',
            borderTop: '2px solid #418613',
            borderRadius: '0 0 6px 6px',
            overflow: 'hidden',
            zIndex: 9999,
          }}
        >
          {item.children.map((child) => (
            <Box
              key={child}
              sx={{
                px: 2.5,
                py: 1.2,
                color: '#ccc',
                fontSize: '0.82rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                '&:hover': {
                  color: '#fff',
                  bgcolor: '#418613',
                  pl: 3,
                },
              }}
            >
              {child}
            </Box>
          ))}
        </Paper>
      )}
    </Box>
  )
}

const Header = () => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: '#232323',
        borderBottom: '1px solid #333',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          px: 4,
          py: 1.5,
          width: '100%',
        }}
      >
        {/* 로고 */}
        <Box
          component="a"
          href="/"
          sx={{
            textDecoration: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: 1,
          }}
        >
          <Typography
            sx={{
              color: '#418613',
              fontWeight: 900,
              fontSize: '1.4rem',
              letterSpacing: '0.12em',
              fontFamily: '"Georgia", serif',
            }}
          >
            BURGER
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontWeight: 900,
              fontSize: '1.4rem',
              letterSpacing: '0.12em',
              fontFamily: '"Georgia", serif',
            }}
          >
            QUEEN
          </Typography>
        </Box>

        {/* 메뉴바 */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} item={item} />
          ))}
        </Box>

        {/* 채용사이트 버튼 */}
        <Button
          variant="outlined"
          startIcon={<WorkOutlineIcon sx={{ fontSize: '1rem' }} />}
          sx={{
            color: '#418613',
            borderColor: '#418613',
            fontWeight: 600,
            fontSize: '0.8rem',
            letterSpacing: '0.03em',
            px: 2,
            py: 0.8,
            borderRadius: '20px',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: '#418613',
              borderColor: '#418613',
              color: '#fff',
            },
          }}
        >
          채용사이트 바로가기
        </Button>
      </Box>
    </AppBar>
  )
}

export default Header
