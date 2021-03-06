import React, { useState, useEffect } from "react"
import useActiveHash from "./use-active-hash"

const TableOfContents = ({ html }) => {
  const getHeaderIds = () => {
    const dummyDOM = document.createElement("html")
    dummyDOM.innerHTML = html
    const anchors = dummyDOM.querySelectorAll("a")

    const val = []
    anchors.forEach(a => {
      val.push(a.hash.replace("#", ""))
    })

    if (val.length <= 0) {
      return null
    }

    return val
  }

  const [headerIds, setHeaderIds] = useState([]);
  const activeHash = useActiveHash(headerIds)

  useEffect(() => {
    if (headerIds !== null && !headerIds.length) {
      setHeaderIds(getHeaderIds);
    }

    const tableOfContentLinks = document.querySelectorAll(".table-of-contents a")

    tableOfContentLinks.forEach(a => {
      a.classList.remove("active")
    })

    const activeLink = document.querySelectorAll(
      `.table-of-contents a[href$="${"/#" + activeHash}"]`
    )

    if (activeLink.length) {
      activeLink[0].classList.add("active")
    }
  }, [activeHash])

  return (
    <div
      className="table-of-contents"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default TableOfContents
