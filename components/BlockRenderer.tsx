'use client'

import React from 'react'
import { NotionBlock, Render } from '@9gustin/react-notion-render'
import '@9gustin/react-notion-render/dist/index.css'

type props = {
    blocks: NotionBlock[]
}

export default function BlockRenderer({ blocks }: props) {
    return (
        <Render blocks={blocks} useStyles />
    )
}
