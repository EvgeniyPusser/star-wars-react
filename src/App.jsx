
import './App.css'
import Headers from './components/Headers.jsx'
import Frame from './components/Frame.jsx'
import Heroes from './components/Heroes.jsx'
import Story from './components/Story.jsx'
import Footer from './components/Footer.jsx'

function App() {
    return (
        <>
            <Headers />

            <main>
                <Frame />
                <Heroes />
                <Story />
            </main>

            <Footer />
        </>
    )
}

export default App

