import { Box, Typography, Divider } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import AppShortcutIcon from '@mui/icons-material/AppShortcut'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

const STEPS = [
  { icon: <AppShortcutIcon sx={{ fontSize: '2rem', color: '#418613' }} />, label: '앱 다운로드', desc: '버거퀸 공식 앱 설치' },
  { icon: <TouchAppIcon sx={{ fontSize: '2rem', color: '#418613' }} />, label: '메뉴 선택', desc: '원하는 메뉴를 골라보세요' },
  { icon: <CheckCircleIcon sx={{ fontSize: '2rem', color: '#418613' }} />, label: '주문 완료', desc: '간편하게 결제하세요' },
  { icon: <DeliveryDiningIcon sx={{ fontSize: '2rem', color: '#418613' }} />, label: '픽업 / 배달', desc: '매장 픽업 또는 배달' },
]

const Content2 = () => {
  return (
    <Box sx={{ bgcolor: '#232323', py: 6 }}>
      <Box
        sx={{
          maxWidth: '1400px',
          width: '100%',
          mx: 'auto',
          px: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
        }}
      >
        {/* 주문 방법 */}
        <Box sx={{ flex: 1 }}>
          <Typography sx={{ color: '#418613', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', mb: 1.5 }}>
            HOW TO ORDER
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900, mb: 4 }}>
            간편하게 주문하세요
          </Typography>

          <Box sx={{ display: 'flex', gap: 3 }}>
            {STEPS.map((step, index) => (
              <Box key={step.label} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: '50%',
                      bgcolor: 'rgba(65,134,19,0.15)',
                      border: '1px solid rgba(65,134,19,0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {step.icon}
                  </Box>
                  <Typography sx={{ color: '#fff', fontSize: '0.82rem', fontWeight: 700, textAlign: 'center' }}>
                    {step.label}
                  </Typography>
                  <Typography sx={{ color: '#888', fontSize: '0.72rem', textAlign: 'center', lineHeight: 1.4 }}>
                    {step.desc}
                  </Typography>
                </Box>
                {index < STEPS.length - 1 && (
                  <Box sx={{ color: '#418613', fontSize: '1.2rem', mt: 1.8, flexShrink: 0 }}>→</Box>
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* 구분선 */}
        <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* 전화 주문 */}
        <Box sx={{ flexShrink: 0, textAlign: 'center', minWidth: 240 }}>
          <Typography sx={{ color: '#418613', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em', mb: 1.5 }}>
            CALL ORDER
          </Typography>
          <Typography sx={{ color: '#fff', fontSize: '1.5rem', fontWeight: 900, mb: 3 }}>
            전화로 주문하기
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1.5,
              bgcolor: 'rgba(65,134,19,0.15)',
              border: '1px solid rgba(65,134,19,0.4)',
              borderRadius: '12px',
              px: 3,
              py: 2,
              mb: 2,
            }}
          >
            <PhoneIcon sx={{ color: '#418613', fontSize: '1.8rem' }} />
            <Typography sx={{ color: '#fff', fontSize: '1.7rem', fontWeight: 900, letterSpacing: '0.05em' }}>
              1588-0000
            </Typography>
          </Box>
          <Typography sx={{ color: '#888', fontSize: '0.8rem', lineHeight: 1.6 }}>
            운영시간: 매일 09:00 ~ 22:00<br />
            단체 주문 및 문의 가능
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Content2
