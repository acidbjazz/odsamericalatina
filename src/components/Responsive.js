import { useState, useEffect } from "react"

const maxPhone = `screen and (max-width: 1200px)`

export default ({ mobile, desktop }) => {
  if (typeof window !== `undefined`) {
    const query = window.matchMedia(maxPhone)
    const [match, setMatch] = useState(query.matches)
    useEffect(() => {
      const handleMatch = q => setMatch(q.matches)
      query.addListener(handleMatch)
      return () => query.removeListener(handleMatch)
    })
    // return match ? <Mobile {...props} /> : <Desktop {...props} />
    return match ? mobile : desktop
  } else return null
}
