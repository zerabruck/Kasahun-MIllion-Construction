import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"

import React,{useMemo} from 'react'

import "./map_container.css"

function Map_container() {
  const {isLoaded}=useLoadScript({googleMapsApiKey:"AIzaSyDpXmy4QFVM0u3ZCjWSSwNFn9tlxN6dRs8"})
  if(!isLoaded){
    return <div>loading...</div>
  }
  return (
    <div>
      <Map></Map>
    </div>
  )
}

export default Map_container

function Map(){
  return <GoogleMap zoom={10} center={{lat:44,lng:-80}} mapContainerClassName="map_container">
    <Marker position={{lat:24,lng:-80}}></Marker>
  </GoogleMap>
}

