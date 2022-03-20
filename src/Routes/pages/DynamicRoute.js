import React, { useEffect } from 'react'
import { useLocation } from "react-router-dom";
import StyleDynamicRoute from './styles/StyleDynamicRoute.style'
import { useStore } from '../../stores/subdomainStore'
import DynamicallyGenCollectionPage from './collections/DynamicallyGenCollectionPage'

export default function DynamicRoute() {
    const { pathname } = useLocation()
    const setSubdomain = useStore(state => state.setSubdomain)
    const subdomain = useStore(state => state.subdomain)

    useEffect(() => {
        if (subdomain !== pathname) setSubdomain(pathname)
    }, [pathname, setSubdomain, subdomain])

  return (
      <StyleDynamicRoute>
        <div>{`subdomain is - ${subdomain}`}</div>
        <DynamicallyGenCollectionPage/>
    </StyleDynamicRoute>
  )
}
