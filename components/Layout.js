import ThreeD from './layout/ThreeD'

export default function Layout({ children }) {
    return (
        <div className='min-h-screen w-full'>
            <ThreeD />
            <main className='absolute w-full bg-black'>
                {children}
            </main>
        </div>
    )
}
