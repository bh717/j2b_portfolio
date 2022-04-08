import ThreeD from './layout/ThreeD'

export default function Layout({ children }) {
    return (
        <div className='bg-black min-h-screen'>
            <ThreeD />
            <main className='absolute'>
            </main>
        </div>
    )
}
