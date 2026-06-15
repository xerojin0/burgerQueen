import Header from './components/Header'
import Banner from './components/Banner'
import Content1 from './components/Content1'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Footer from './components/Footer'
import { Box } from '@mui/material'

function App() {
  return (
    <Box sx={{ minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Content1 />
      <Content2 />
      <Content3 />
      <Footer />
    </Box>
  )
}

export default App
