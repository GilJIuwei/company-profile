"use client"
import React, { useState, useEffect } from 'react';

interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    phone: string;
    picture: {
        large: string;
    };
    
}

const RandomUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchRandomUsers = async () => {
            try {
                const response = await fetch('https://randomuser.me/api/?results=2'); // Ganti 5 dengan jumlah pengguna yang diinginkan
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUsers(data.results);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchRandomUsers();
    }, []);

    return (
        <div className='container mx-auto px-4 pt-48 grid grid-cols-2 text-xl font-bold'>
            {users.map((user, index) => (
                <div key={index}>
                    <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
                    <p className='pt-4'>Name: {user.name.first} {user.name.last}</p>
                    <p className='pt-4'>Email: {user.email}</p>
                    <p className='pt-4'>Phone: {user.phone}</p>
                </div>
            ))}
        </div>
    );
};

export default RandomUsers;
