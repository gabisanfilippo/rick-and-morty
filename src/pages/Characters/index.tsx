import React from "react"
import { useMediaQuery } from "react-responsive";
import { HeaderDesktop } from "../../components/global/HeaderDesktop";
import { HeaderMobile } from "../../components/global/HeaderMobile";

export const Characters = () => {
  return (
    <>
      {useMediaQuery({ minWidth: 450 }) ? (
        <HeaderDesktop/>
      ) : (
        <HeaderMobile/>
      )}
    </>
  )
}