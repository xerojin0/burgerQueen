import { Box, Typography, Button, Chip } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import EcoIcon from '@mui/icons-material/Nature'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import StorefrontIcon from '@mui/icons-material/Storefront'

const CARDS = [
  {
    id: 1,
    category: 'BRAND',
    icon: <StorefrontIcon sx={{ fontSize: '2.5rem', color: '#fff' }} />,
    bg: 'linear-gradient(135deg, #232323 0%, #3a3a3a 100%)',
    title: '버거퀸 브랜드 스토리',
    desc: '건강하고 신선한 재료로 만드는 프리미엄 버거. 버거퀸이 걸어온 길을 소개합니다.',
    tags: ['브랜드', 'WHY 버거퀸', '광고영상'],
    link: '브랜드 알아보기',
  },
  {
    id: 2,
    category: 'ESG',
    icon: <EcoIcon sx={{ fontSize: '2.5rem', color: '#fff' }} />,
    bg: 'linear-gradient(135deg, #1a3a0a 0%, #418613 100%)',
    title: '지속가능한 미래를 위한 ESG 경영',
    desc: '환경 보호와 사회적 책임을 다하는 버거퀸의 ESG 경영 철학을 확인하세요.',
    tags: ['친환경 포장', '탄소중립', '지역 상생'],
    link: 'ESG 경영 보기',
  },
  {
    id: 3,
    category: 'NEWS',
    icon: <NewspaperIcon sx={{ fontSize: '2.5rem', color: '#fff' }} />,
    bg: 'linear-gradient(135deg, #0a1f2e 0%, #1a3a5e 100%)',
    title: '버거퀸 최신 소식',
    desc: '신메뉴 출시, 이벤트, 공지사항 등 버거퀸의 다양한 소식을 가장 먼저 만나보세요.',
    tags: ['이벤트', '신메뉴', '공지사항'],
    link: '뉴스 보기',
  },
]

const Content3 = () => {
  return (
    <Box sx={{ bgcolor: '#f8f8f8', py: 8 }}>
      <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', px: '20px' }}>

        {/* 섹션 헤더 */}
        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', mb: 5 }}>
          <Box>
            <Typography sx={{ color: '#418613', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.2em', mb: 1 }}>
              ABOUT US
            </Typography>
            <Typography sx={{ fontSize: '2rem', fontWeight: 900, color: '#232323' }}>
              브랜드 · ESG경영 · 뉴스
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{ color: '#418613', fontWeight: 700, fontSize: '0.85rem' }}
          >
            전체 보기
          </Button>
        </Box>

        {/* 카드 그리드 */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }}>
          {CARDS.map((card) => (
            <Box
              key={card.id}
              sx={{
                borderRadius: '20px',
                overflow: 'hidden',
                bgcolor: '#fff',
                boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
                cursor: 'pointer',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': {
                  transform: 'translateY(-8px)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.13)',
                },
              }}
            >
              {/* 상단 비주얼 */}
              <Box
                sx={{
                  height: 200,
                  background: card.bg,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  p: 3,
                }}
              >
                <Chip
                  label={card.category}
                  size="small"
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                  }}
                />
                <Box>{card.icon}</Box>
              </Box>

              {/* 하단 텍스트 */}
              <Box sx={{ p: 3 }}>
                <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#232323', lineHeight: 1.4, mb: 1.2 }}>
                  {card.title}
                </Typography>
                <Typography sx={{ fontSize: '0.83rem', color: '#888', lineHeight: 1.7, mb: 2.5 }}>
                  {card.desc}
                </Typography>

                {/* 태그 */}
                <Box sx={{ display: 'flex', gap: 0.8, flexWrap: 'wrap', mb: 2.5 }}>
                  {card.tags.map((tag) => (
                    <Box
                      key={tag}
                      sx={{
                        px: 1.2,
                        py: 0.4,
                        bgcolor: '#f0f7eb',
                        color: '#418613',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        borderRadius: '6px',
                      }}
                    >
                      #{tag}
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    color: '#418613',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                  }}
                >
                  {card.link} <ArrowForwardIcon sx={{ fontSize: '0.95rem' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Content3
