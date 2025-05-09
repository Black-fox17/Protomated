
import { Header } from '../home/header.tsx'
import { Footer } from '../home/footer.tsx'
import { Body } from '../home/body.tsx'

const Home = () => {
    return(
        <>
            <div className="section-style">
                <Header/>
                <Body/>
            </div>
            <Footer/>
        </>
    )
}
export default Home;