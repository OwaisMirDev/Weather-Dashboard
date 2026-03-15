import { CloudSun } from 'lucide-react'

export function Header() {
    return <div className='flex items-center gap-3'>
        <CloudSun className='w-8 h-8' />
        <h1 className='text-2xl font-bold tracking-tight'>Weather Dashboard</h1>
    </div>
}