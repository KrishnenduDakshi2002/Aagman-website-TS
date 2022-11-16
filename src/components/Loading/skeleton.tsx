import React from 'react'
import './skeleton.css'

interface Props {
    className? : string;
}
export const SkeletonComponent:React.FC<Props> = ({className = ''}) => {
  return (
    <div
className={'skeleton__wrapper '.concat(className)}
    ></div>
  )
}
