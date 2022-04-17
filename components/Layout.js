import ThreeD from './layout/ThreeD'
import Footer from './layout/Footer'
import Nav from './layout/Nav'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className='min-h-screen w-full'>
                <ThreeD />
                <main className='absolute w-full bg-black'>
                    {children}
                    <Footer />
                </main>
            </div>
        </>
    )
}
