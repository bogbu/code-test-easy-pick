import ky from 'ky';

export const api = ky.create({
    headers: {
        'content-type': 'application/json',
    },
});

export const instance = api.extend({
    prefixUrl: import.meta.env.VITE_URL,
});

