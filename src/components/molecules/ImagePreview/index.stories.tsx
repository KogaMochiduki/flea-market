import { Meta, StoryObj } from '@storybook/react'
import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import ImagePreview, { ImagePreviewProps } from './'
import Dropzone from '@/components/molecules/Dropzone'

const meta: Meta<typeof ImagePreview> = {
  title: 'Molecules/ImagePreview',
  component: ImagePreview,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: { type: 'text' },
      description: '画像URL',
      table: {
        type: { summary: 'string' },
      },
    },
    alt: {
      control: { type: 'text' },
      description: '代替テキスト',
      table: {
        type: { summary: 'string' },
      },
    },
    height: {
      control: { type: 'number' },
      description: '縦幅',
      table: {
        type: { summary: 'number' },
      },
    },
    width: {
      control: { type: 'number' },
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    onRemove: {
      description: '削除ボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

const Container = styled.div`
  width: 288px;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`

interface Image {
  file?: File
  src?: string
}

const Template = (args: ImagePreviewProps) => {
  const [files, setFiles] = useState<File[]>([])
  const [images, setImages] = useState<Image[]>([])

  useEffect(() => {
    const newImages = [...images]

    for (const f of files) {
      const index = newImages.findIndex((img: Image) => img.file === f)

      if (index === -1) {
        newImages.push({
          file: f,
          src: URL.createObjectURL(f),
        })
      }
    }
    setImages(newImages)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files])

  const handleRemove = (src: string) => {
    const image = images.find((img: Image) => img.src === src)

    if (image !== undefined) {
      setImages((images) => images.filter((img) => img.src !== image.src))
      setFiles((files) => files.filter((file: File) => file !== image.file))
    }

    if (args && args.onRemove) {
      args.onRemove(src)
    }
  }

  return (
    <Container>
      <Dropzone value={files} onDrop={(fileList) => setFiles(fileList)} />
      {images.map((image, i) => (
        <ImagePreview
          key={i}
          src={image.src}
          width="100px"
          {...args}
          onRemove={handleRemove}
        />
      ))}
    </Container>
  )
}

export const WithDropzone: Story = {
  render: (args) => <Template {...args} />,
}
