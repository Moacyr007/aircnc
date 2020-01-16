import React, {useEffect, useState} from 'react';
import api from '../../services/api';

export default function Dashboard(){
    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSports(){
            const user_id = localStorage.getItem('user');
            const response = await api.get('/dashboard', {
                headers: {user_id}
            });
            console.log(response.data);
        }  
        loadSports();
    }, []);

    return <h1>Dashboard</h1>
}