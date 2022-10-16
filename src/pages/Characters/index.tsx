import React from "react"
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";

export const Characters = () => {
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? (
        <HeaderDesktop/>
      ) : (
        <>olá</>
      )}
    </>
  )
}