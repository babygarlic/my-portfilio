"use client"

import { useEffect, useState } from "react"
import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"

interface ParticlesBackgroundProps {
  turnOn?: boolean;
}

export default function ParticlesBackground({ turnOn }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  if (!init || !turnOn) return null
  return (
    <Particles
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          move: { enable: true, speed: 1 },
          links: {
            enable: true,
            color: "#06B6D4",
            distance: 150,
            opacity: 0.5
          },
        },
        background: {
          color: "#050505"
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              quantity: 1
            },
          },
        },
      }}
    />
  )
}