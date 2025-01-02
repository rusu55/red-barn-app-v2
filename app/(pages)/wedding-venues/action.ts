'use server'

import { getVenues } from "@/lib/getVenues"

export async function fetchVenues({page=1, search}: {page?:number, search?: string | undefined}){
    const venues = await getVenues({query: search, page})
    
    return venues
}