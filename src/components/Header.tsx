import { Car } from 'lucide-react'

export const Header = () => {
    return (
        <header className='flex a-center'>
            <span className='tiny-square-icon'>
                <Car style={{ color: 'var(--container-bg)', height: '16px', width: '16px' }} />
            </span>
            <h1>SoftGo</h1>
        </header>
    )
}