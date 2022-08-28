import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div>
        <Link>
          <h2>Axis Dress</h2>
        </Link>
        <img
          src="https://images.squarespace-cdn.com/content/v1/5e0d33d2f2e91c2313801a66/1600861098474-E2D2523OBFIA6BHFWXGE/349A40FD-60C6-44E0-8DA1-6198499DEF4B_1_201_a.jpeg?format=1000w"
          alt="axis dress"
        ></img>
        <p>Category</p>
      </div>
    </div>
  )
}

export default Projects
