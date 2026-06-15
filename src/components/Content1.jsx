import { useState } from 'react'
import { Box, Typography, Button, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import StorefrontIcon from '@mui/icons-material/Storefront'

const MENUS = [
  { id: 1, name: '클래식 버거퀸', desc: '정통 수제 패티의 클래식', price: '9,500원', tag: 'BEST', emoji: '🍔', bg: '#2d1f0a' },
  { id: 2, name: '더블 스모키', desc: '더블 패티 + 스모키 소스', price: '12,900원', tag: 'NEW', emoji: '🔥', bg: '#1a2e0a' },
  { id: 3, name: '쉬림프 버거', desc: '통새우 튀김 버거', price: '10,500원', tag: 'HOT', emoji: '🦐', bg: '#0a1f2e' },
  { id: 4, name: '베지 퀸', desc: '100% 채소 프레쉬 버거', price: '9,900원', tag: 'ECO', emoji: '🥬', bg: '#0a2e1a' },
]

const STORE_INFO = [
  { label: '운영시간', value: '매일 10:00 ~ 22:00' },
  { label: '매장 수', value: '전국 350+ 매장' },
  { label: '주차', value: '매장별 무료 주차 가능' },
  { label: '예약', value: '단체 예약 가능 (10인 이상)' },
]

const Content1 = () => {
  const [tab, setTab] = useState('menu')

  return (
    <Box sx={{ bgcolor: '#fff', py: 8 }}>
      <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', px: '20px' }}>

        {/* 탭 헤더 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: 5 }}>
          <Box>
            <Typography sx={{ color: '#418613', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', mb: 1 }}>
              BURGER QUEEN
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {['menu', 'store'].map((t) => (
                <Box
                  key={t}
                  onClick={() => setTab(t)}
                  sx={{
                    cursor: 'pointer',
                    pb: 1,
                    borderBottom: tab === t ? '3px solid #418613' : '3px solid transparent',
                    mr: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.8rem',
                      fontWeight: 900,
                      color: tab === t ? '#232323' : '#bbb',
                      transition: 'color 0.2s',
                    }}
                  >
                    {t === 'menu' ? '메뉴' : '매장소개'}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{ color: '#418613', fontWeight: 700, fontSize: '0.85rem' }}
          >
            {tab === 'menu' ? '전체 메뉴 보기' : '매장 찾기'}
          </Button>
        </Box>

        {/* 메뉴 탭 */}
        {tab === 'menu' && (
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2.5 }}>
            {MENUS.map((item) => (
              <Box
                key={item.id}
                sx={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 40px rgba(0,0,0,0.15)',
                  },
                }}
              >
                {/* 이미지 영역 */}
                <Box
                  sx={{
                    height: 200,
                    bgcolor: item.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '5rem',
                    position: 'relative',
                  }}
                >
                  {item.emoji}
                  <Chip
                    label={item.tag}
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      bgcolor: '#418613',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.7rem',
                    }}
                  />
                </Box>
                {/* 텍스트 영역 */}
                <Box sx={{ p: 2.5, bgcolor: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '1rem', color: '#232323', mb: 0.5 }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: '#888', mb: 1.5 }}>
                    {item.desc}
                  </Typography>
                  <Typography sx={{ fontWeight: 900, fontSize: '1.05rem', color: '#418613' }}>
                    {item.price}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        )}

        {/* 매장소개 탭 */}
        {tab === 'store' && (
          <Box sx={{ display: 'flex', gap: 5, alignItems: 'center' }}>
            {/* 매장 이미지 */}
            <Box
              sx={{
                width: '50%',
                height: 380,
                borderRadius: '16px',
                bgcolor: '#1a2e0a',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 2,
                flexShrink: 0,
              }}
            >
              <StorefrontIcon sx={{ fontSize: '5rem', color: '#418613' }} />
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem' }}>
                버거퀸 매장
              </Typography>
            </Box>

            {/* 매장 정보 */}
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ color: '#418613', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', mb: 1.5 }}>
                STORE INFO
              </Typography>
              <Typography sx={{ fontSize: '2rem', fontWeight: 900, color: '#232323', lineHeight: 1.2, mb: 2 }}>
                신선함이 살아있는<br />버거퀸 매장을 만나보세요
              </Typography>
              <Typography sx={{ color: '#888', fontSize: '0.95rem', lineHeight: 1.8, mb: 4 }}>
                버거퀸은 전국 350개 이상의 매장에서<br />
                최상의 식재료와 정성으로 만든 버거를 제공합니다.
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                {STORE_INFO.map((info) => (
                  <Box key={info.label} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#418613', flexShrink: 0 }} />
                    <Typography sx={{ color: '#aaa', fontSize: '0.85rem', width: 80 }}>{info.label}</Typography>
                    <Typography sx={{ color: '#232323', fontSize: '0.9rem', fontWeight: 600 }}>{info.value}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  bgcolor: '#418613',
                  color: '#fff',
                  fontWeight: 700,
                  px: 3.5,
                  py: 1.2,
                  borderRadius: '30px',
                  '&:hover': { bgcolor: '#2d5e0e' },
                }}
              >
                매장 찾기
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Content1
