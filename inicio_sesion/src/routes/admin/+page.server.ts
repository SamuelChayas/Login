import { redirect } from '@sveltejs/kit'
//import type { PageServerLoad } from './$types'

export const load = async ({ locals }: {locals: App.Locals}) => {
    // redirect user if not logged in
    if (!locals.user) {
        redirect(302, '/')
    }
}
