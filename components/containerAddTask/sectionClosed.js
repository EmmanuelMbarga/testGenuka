import React from 'react'

export default function SectionClosed(props) {
  return (
    <section className={props.tableau.length ? "overflow-y-scroll h-80" : "h-80"}>

    </section>
  )
}
