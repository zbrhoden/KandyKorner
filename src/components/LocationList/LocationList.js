import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, setlocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then((locationArray) => {
                    setlocations(locationArray)
                })
        },
        []
    )

    return (
        <>
            {
                locations.slice(0, 5).map(
                    (locationObject) => {
                        return <h2 key={`location--${locationObject.id}`}>{locationObject.address}</h2>
                    }
                )
            }
        </>
    )
}