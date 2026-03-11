
import { Container } from './Components/Container'
import { CurrentWeather } from './Components/CurrentWeather'
import { HourlyForecast } from './Components/HourlyForecast'
import { SevenDayForecast } from './Components/SevenDayForecast'

function App() {


  return (
    <Container>
      <CurrentWeather />
      <SevenDayForecast />
      <HourlyForecast />
    </Container>
  )
}

export default App
