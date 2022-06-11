import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import StyleDynamicRoute from './styles/StyleDynamicRoute.style'
import { useStore } from '../../stores/subdomainStore'
import DynamicallyGenCollectionPage from './collections/DynamicallyGenCollectionPage'
import { useLazyQuery } from '@apollo/client';
import { GET_PRICE } from '../../graphQL/NFTDetails'
// import { getNFTDetails } from '../../Actions/Addresses/Addresses'


export default function DynamicRoute() {
    const [ get, { loading, error, data }] = useLazyQuery(GET_PRICE)
    console.log({ loading, error, data })

    const { pathname } = useLocation()
    const setSubdomain = useStore(state => state.setSubdomain)
    const subdomain = useStore(state => state.subdomain)

    useEffect(() => {
        if (subdomain !== pathname) {
          setSubdomain(pathname)
          console.log('UPDATING SUBDOMAIN to', pathname)
          get()
        }
    }, [pathname, setSubdomain, subdomain])

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
