import { forwardRef } from 'react'

export const Loader = () => {
    return (
        <div className='absolute z-50 flex justify-center items-center h-screen w-screen bg-black'>
            <div className='lds-ring absolute'>
                <div/><div/><div/><div/>
            </div>
        </div>
    )

}

export const LoaderContainer = forwardRef(({ children }, ref) => (
    <div ref={ref} className='fixed z-[100] flex justify-center items-center w-screen h-screen' >
        {children}
    </div>
))