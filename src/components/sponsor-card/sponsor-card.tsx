import React from 'react'
import { ISponsorCardProps } from './sponsor-card.types';

export const SponsorCard = ({image, alt, label}: ISponsorCardProps) => {
    return (
      <div className="sponsor-card">
          <img src={image} alt={alt} />
          <h2>{label}</h2>
      </div>
  )
}
