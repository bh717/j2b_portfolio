import { forwardRef } from 'react'

export const Loader = () => {
    return <div className="lds-ring absolute flex w-full justify-center items-center">
        <div/><div/><div/><div/>
    </div>
}

export const LoaderContainer = forwardRef(({ children }, ref) => (
    <div ref={ref} className='fixed flex justify-center items-center w-screen h-screen' >
        {children}
    </div>
))