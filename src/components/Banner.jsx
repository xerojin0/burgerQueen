import { useState, useEffect, useRef } from 'react'
import { Box, Typography, Button, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SearchIcon from '@mui/icons-material/Search'
import StorefrontIcon from '@mui/icons-material/Storefront'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const SLIDES = [
  {
    id: 1,
    bg: 'linear-gradient(135deg, #1a2e0a 0%, #418613 100%)',
    tag: 'NEW ARRIVAL',
    title: '신선함이\n살아있는 맛',
    subtitle: '100% 국내산 신선 재료로 만든\n프리미엄 수제 버거',
    cta: '지금 주문하기',
    deco: '🍔',
  },
  {
    id: 2,
    bg: 'linear-gradient(135deg, #232323 0%, #418613 60%, #2d5e0e 100%)',
    tag: 'LIMITED',
    title: '더블 스모키\n버거 출시',
    subtitle: '스모키 소스와 더블 패티의\n완벽한 조화를 경험하세요',
    cta: '메뉴 보기',
    deco: '🔥',
  },
  {
    id: 3,
    bg: 'linear-gradient(135deg, #418613 0%, #232323 100%)',
    tag: 'APP ONLY',
    title: '버거퀸 앱\n첫 주문 20% 할인',
    subtitle: '앱을 다운로드하고\n특별한 혜택을 받아보세요',
    cta: '앱 다운로드',
    deco: '📱',
  },
  {
    id: 4,
    bg: 'linear-gradient(135deg, #0d1f05 0%, #418613 50%, #232323 100%)',
    tag: 'ESG',
    title: '자연을 생각하는\n버거퀸',
    subtitle: '친환경 포장재 사용과\n탄소중립 매장 운영',
    cta: '자세히 보기',
    deco: '🌿',
  },
  {
    id: 5,
    bg: 'linear-gradient(135deg, #232323 0%, #3a3a3a 50%, #418613 100%)',
    tag: 'EVENT',
    title: '멤버십 가입하고\n무료 버거 받기',
    subtitle: '버거퀸 멤버십 혜택을\n지금 바로 시작하세요',
    cta: '이벤트 참여',
    deco: '🎉',
  },
]

const Banner = () => {
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)

  useEffect(() => {
    if (!playing) return
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [playing])

  const handleDotClick = (index) => {
    setCurrent(index)
  }

  return (
    <Box sx={{ padding: '20px', bgcolor: '#f5f5f5' }}>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          height: '480px',
        }}
      >
      {/* 슬라이더 70% */}
      <Box
        sx={{
          width: '70%',
          position: 'relative',
          borderRadius: '12px',
          overflow: 'hidden',
          height: '100%',
          flexShrink: 0,
        }}
      >
        {/* 슬라이드 목록 */}
        {SLIDES.map((slide, index) => (
          <Box
            key={slide.id}
            sx={{
              position: 'absolute',
              inset: 0,
              background: slide.bg,
              opacity: index === current ? 1 : 0,
              transition: 'opacity 0.8s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: 7,
            }}
          >
            {/* 텍스트 영역 */}
            <Box>
              <Typography
                sx={{
                  color: '#418613',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  mb: 2,
                  bgcolor: 'rgba(255,255,255,0.1)',
                  display: 'inline-block',
                  px: 1.5,
                  py: 0.5,
                  borderRadius: '4px',
                }}
              >
                {slide.tag}
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontSize: '2.6rem',
                  fontWeight: 900,
                  lineHeight: 1.2,
                  whiteSpace: 'pre-line',
                  mb: 2.5,
                  textShadow: '0 2px 12px rgba(0,0,0,0.3)',
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                  mb: 4,
                }}
              >
                {slide.subtitle}
              </Typography>
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
                  fontSize: '0.9rem',
                  '&:hover': { bgcolor: '#2d5e0e' },
                  boxShadow: '0 4px 20px rgba(65,134,19,0.4)',
                }}
              >
                {slide.cta}
              </Button>
            </Box>

            {/* 데코 이모지 */}
            <Box
              sx={{
                fontSize: '9rem',
                opacity: 0.6,
                userSelect: 'none',
                filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.3))',
              }}
            >
              {slide.deco}
            </Box>
          </Box>
        ))}

        {/* 페이지네이션 + 플레이/정지 */}
        <Box
          sx={{
            position: 'absolute',
            bottom: 24,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* 점 */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {SLIDES.map((_, index) => (
              <Box
                key={index}
                onClick={() => handleDotClick(index)}
                sx={{
                  width: index === current ? 28 : 8,
                  height: 8,
                  borderRadius: '4px',
                  bgcolor: index === current ? '#418613' : 'rgba(255,255,255,0.45)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: index === current ? '#418613' : 'rgba(255,255,255,0.8)' },
                }}
              />
            ))}
          </Box>

          {/* 플레이/정지 - 점에서 50px 오른쪽 */}
          <IconButton
            onClick={() => setPlaying((p) => !p)}
            sx={{
              ml: '50px',
              color: '#fff',
              bgcolor: 'rgba(0,0,0,0.45)',
              width: 34,
              height: 34,
              '&:hover': { bgcolor: '#418613' },
              transition: 'all 0.3s ease',
            }}
          >
            {playing ? (
              <PauseIcon sx={{ fontSize: 18 }} />
            ) : (
              <PlayArrowIcon sx={{ fontSize: 18 }} />
            )}
          </IconButton>
        </Box>

        {/* 슬라이드 번호 */}
        <Box
          sx={{
            position: 'absolute',
            top: 20,
            right: 20,
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.8rem',
            fontWeight: 600,
          }}
        >
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </Box>
      </Box>

      {/* 사이드 30% */}
      <Box
        sx={{
          width: '30%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        {/* 가맹점 및 창업안내 */}
        <Box
          sx={{
            flex: 1,
            bgcolor: '#232323',
            borderRadius: '12px',
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            border: 'none',
            outline: 'none',
            boxShadow: 'none',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 32px rgba(0,0,0,0.3)',
            },
          }}
        >
          <StorefrontIcon sx={{ color: '#418613', fontSize: '1.7rem', mb: 1 }} />
          <Typography
            sx={{
              color: '#418613',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              mb: 0.5,
            }}
          >
            FRANCHISE
          </Typography>
          <Typography
            sx={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.3, mb: 0.8 }}
          >
            가맹점 및 창업안내
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: 1.5, mb: 1.5 }}>
            버거퀸과 함께 성공적인<br />창업을 시작해보세요
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: '#418613',
              fontSize: '0.82rem',
              fontWeight: 700,
              gap: 0.5,
            }}
          >
            자세히 보기 <ArrowForwardIcon sx={{ fontSize: '0.9rem' }} />
          </Box>
        </Box>

        {/* 내 주변 매장 찾기 */}
        <Box
          sx={{
            flex: 1,
            bgcolor: '#418613',
            borderRadius: '12px',
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            cursor: 'pointer',
            overflow: 'hidden',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            '&:hover': {
              transform: 'translateY(-3px)',
              boxShadow: '0 12px 32px rgba(65,134,19,0.4)',
            },
          }}
        >
          <LocationOnIcon sx={{ color: '#fff', fontSize: '1.7rem', mb: 1 }} />
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              mb: 0.5,
            }}
          >
            STORE FINDER
          </Typography>
          <Typography
            sx={{ color: '#fff', fontWeight: 800, fontSize: '1.05rem', lineHeight: 1.3, mb: 0.8 }}
          >
            내 주변 버거퀸 찾기
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.8rem', lineHeight: 1.5, mb: 1.5 }}>
            가까운 버거퀸 매장을<br />지금 바로 찾아보세요
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              bgcolor: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              px: 1.5,
              py: 0.7,
              width: 'fit-content',
            }}
          >
            <SearchIcon sx={{ color: '#fff', fontSize: '1rem' }} />
            <Typography sx={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600 }}>
              매장 검색
            </Typography>
          </Box>
        </Box>
      </Box>
      </Box>
    </Box>
  )
}

export default Banner
