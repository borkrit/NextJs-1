'use client'
import Link from "next/link"
import styled from "styled-components"

  const HeaderWrapper = styled.header`
    width:100vw;
    padding-block:10px;
    background: yellow;

  `

 const Menu = styled.menu`
  display:flex;
  gap: 30px;
  max-width:1200px;
  justify-content: center;
`

export default function Header() {
  return (
    <HeaderWrapper>
      <Menu>
            <Link href={'/'} > Home</Link>
            <Link href={'/about'} > About</Link>
            <Link href={'/contact'} > Contact</Link>
        </Menu>
    </HeaderWrapper>
   
  )
}