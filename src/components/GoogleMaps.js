import React, { useEffect, useRef } from "react"

export default function GoogleMaps({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)
    onMount && onMount(map)
  }

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDlya5LfSnyHWu2TiDOY7YkFCCd1MR-fWE`
      // +
      // process.env.GOOGLE_MAPS_API_KEY
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })

  return <div {...props} style={{ height: `70vh` }} />
}

Map.defaultProps = {
  options: {
    center: { lat: 0, lng: 0 },
    zoom: 8,
  },
}
