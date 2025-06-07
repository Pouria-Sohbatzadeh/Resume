import React from 'react'

export default function SiteName({
  siteName = "./img/siteName.png",
  siteNameSize = "lg:w-[62px]",
}) {
  return (
    <div className={siteNameSize}><img src={siteName} alt="Namedan" className="w-full" /></div>
  )
}
