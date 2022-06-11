import React from 'react'
import { useStore } from '../../../stores/subdomainStore'
            


/*
Sends request to try and find colleciton from url provided in
*/
export default function DynamicallyGenCollectionPage() {
    const subdomain = useStore(state => state.subdomain)

    return (
        <div>

        </div>
        
    )
}
