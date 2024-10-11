import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
export const actions: Actions = {
    default: async ({ request, fetch }) => {
        const formData = await request.formData();
        const username = formData.get('username') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const password2 = formData.get('password2') as string;
        if (!username || !email || !password || !password2) {
            return { error: 'All fields are required' };
        }
        if (password !== password2) {
            return { error: 'Passwords do not match' };
        }
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password, password2 })
        });

        if (!response.ok) {
            const error = await response.json();
            return { error: error.message };
        }

        throw redirect(303, '/');
    }
};