import React from 'react'
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
    <div>About</div>
    <Link to={'contact'}>Contact</Link>
    </>
  )
}
