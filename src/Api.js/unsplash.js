import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 3670cc309079825e24e1f14b76c4dc520b50eeb8c37ca3aee601ab5305b120c4'
    }
});

