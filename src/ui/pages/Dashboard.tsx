"use client"
import { usePathname } from 'next/navigation';
import Card from '../molecules/card/Card';

const Dashboard: React.FC = () => {
    const nums = [1, 2, 3, 4, 5, 6]; 
    const pathname = usePathname(); 
    
    return (
        <div className='cards'>
            {nums.map((num) => (
                <Card key={num} /> 
            ))}
        </div>
    );
}

export default Dashboard;
