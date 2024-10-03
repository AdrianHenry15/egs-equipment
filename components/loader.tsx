"use client"

import { CSSProperties } from "react"
import { BarLoader } from "react-spinners"

const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

export const Loader = () => {
  return <BarLoader color="#1770e4" cssOverride={override} />
}
