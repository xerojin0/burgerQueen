import { Box, Typography, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import AccessTimeIcon from '@mui/icons-material/AccessTime'

const NAV_SECTIONS = [
  {
    title: 'MENU',
    links: ['버거', '사이드', '음료', '세트메뉴', '신메뉴'],
  },
  {
    title: 'BRAND',
    links: ['브랜드', 'WHY 버거퀸', 'ESG 경영', '광고영상'],
  },
  {
    title: 'NEWS',
    links: ['이벤트', '공지사항'],
  },
  {
    title: 'STORE',
    links: ['매장 찾기', '신규 매장'],
  },
  {
    title: 'NOTICE',
    links: ['자주 묻는 질문', '1:1 문의', '가맹창업·임대문의'],
  },
]

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#111', pt: 7, pb: 4 }}>
      <Box sx={{ maxWidth: '1400px', width: '100%', mx: 'auto', px: '20px' }}>

        {/* 상단 영역 */}
        <Box sx={{ display: 'flex', gap: 8, mb: 6 }}>

          {/* 로고 + 고객센터 */}
          <Box sx={{ flexShrink: 0, minWidth: 220 }}>
            {/* 로고 */}
            <Box
              component="a"
              href="/"
              sx={{ textDecoration: 'none', display: 'inline-block', mb: 4 }}
            >
              <Typography
                sx={{
                  color: '#418613',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  letterSpacing: '0.12em',
                  fontFamily: '"Georgia", serif',
                  lineHeight: 1,
                }}
              >
                BURGER
              </Typography>
              <Typography
                sx={{
                  color: '#fff',
                  fontWeight: 900,
                  fontSize: '1.3rem',
                  letterSpacing: '0.12em',
                  fontFamily: '"Georgia", serif',
                  lineHeight: 1,
                }}
              >
                QUEEN
              </Typography>
            </Box>

            {/* 고객센터 */}
            <Typography
              sx={{ color: '#418613', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.15em', mb: 2 }}
            >
              CUSTOMER SERVICE
            </Typography>
            <Typography sx={{ color: '#fff', fontWeight: 900, fontSize: '1.6rem', mb: 0.5 }}>
              고객센터
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5, mt: 2 }}>
              <PhoneIcon sx={{ color: '#418613', fontSize: '1rem' }} />
              <Typography sx={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem', letterSpacing: '0.05em' }}>
                1588-0000
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <AccessTimeIcon sx={{ color: '#555', fontSize: '0.85rem' }} />
              <Typography sx={{ color: '#888', fontSize: '0.78rem' }}>
                평일 09:00 ~ 18:00 (주말·공휴일 휴무)
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ color: '#555', fontSize: '0.85rem' }} />
              <Typography sx={{ color: '#888', fontSize: '0.78rem' }}>
                support@burgerqueen.co.kr
              </Typography>
            </Box>
          </Box>

          {/* 구분선 */}
          <Divider orientation="vertical" flexItem sx={{ borderColor: '#2a2a2a' }} />

          {/* 메뉴 링크 */}
          <Box sx={{ display: 'flex', gap: 6, flex: 1 }}>
            {NAV_SECTIONS.map((section) => (
              <Box key={section.title}>
                <Typography
                  sx={{
                    color: '#fff',
                    fontWeight: 800,
                    fontSize: '0.88rem',
                    letterSpacing: '0.08em',
                    mb: 2.5,
                  }}
                >
                  {section.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
                  {section.links.map((link) => (
                    <Typography
                      key={link}
                      component="a"
                      href="#"
                      sx={{
                        color: '#777',
                        fontSize: '0.82rem',
                        textDecoration: 'none',
                        transition: 'color 0.2s',
                        '&:hover': { color: '#418613' },
                      }}
                    >
                      {link}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* 하단 구분선 */}
        <Divider sx={{ borderColor: '#2a2a2a', mb: 3 }} />

        {/* 하단 법인정보 */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography sx={{ color: '#444', fontSize: '0.75rem', lineHeight: 1.8 }}>
            (주)버거퀸코리아 · 대표이사 홍길동 · 사업자등록번호 000-00-00000<br />
            서울특별시 강남구 테헤란로 123 버거퀸빌딩 · 통신판매업신고번호 제2024-서울강남-0000호
          </Typography>
          <Typography sx={{ color: '#333', fontSize: '0.75rem' }}>
            © 2024 BURGER QUEEN. All Rights Reserved.
          </Typography>
        </Box>

      </Box>
    </Box>
  )
}

export default Footer
