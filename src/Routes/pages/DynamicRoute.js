import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import StyleDynamicRoute from './styles/StyleDynamicRoute.style'
import { useStore } from '../../stores/subdomainStore'
import DynamicallyGenCollectionPage from './collections/DynamicallyGenCollectionPage'
import { useLazyQuery } from '@apollo/client';
import { GET_DETAILS } from '../../graphQL/NFTDetails'

export default function DynamicRoute() {
    const address = window?.location?.pathname?.split('/')[1]

    console.log({ address })

    const [ get, { loading, error, data }] = useLazyQuery(GET_DETAILS, {
      variables: { address },
    });
  
    console.log({ get, loading, error, data })

    const { pathname } = useLocation()
    const setSubdomain = useStore(state => state.setSubdomain)
    const subdomain = useStore(state => state.subdomain)

    useEffect(() => {
        if (subdomain !== pathname) {
          setSubdomain(pathname)
          console.log('UPDATING SUBDOMAIN to', pathname)
          get()
        }
    }, [ get, pathname, setSubdomain, subdomain ])

    console.log('subdomain ->', subdomain)

  return (
      <StyleDynamicRoute>
        <div className='dynamicRouteContainer'>
          <div className='subdomainText'>{`subdomain is - ${subdomain}`}</div>
          <DynamicallyGenCollectionPage/>
        </div>
    </StyleDynamicRoute>
  )
}
