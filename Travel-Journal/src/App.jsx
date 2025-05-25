import './App.css'
import Header from './components/header'  
import Entry from './components/entry'
import data from './data'

function App() {
  const entry_list = data.map(item =>
      <Entry 
        img={item.img.src}
        alt={item.alt}
        location={item.country}
        title={item.title}
        mapLink={item.googleMapsLink}
        dates={item.dates}
        text={item.text}
      />
    )
  return (
    <>
    <Header/>
    {entry_list}
    </>
  )
}

export default App
