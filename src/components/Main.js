import React from 'react'
import Cities from '../containers/Cities'
import { Link } from 'react-router'

const Main = () => {
  return (
    <section className="Main">
      <Link to="/settings" className="settings-link">Manage Cities</Link>
      <Cities />
    </section>
  )
}

export default Main
