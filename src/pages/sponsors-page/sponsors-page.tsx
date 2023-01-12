import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './sponsors-page.module.scss';
import { Container } from '../../components/container';
import Masonry from "react-masonry-css"
import { GlitchedText } from '../../components/glitched-text';
import { Background } from '../../components/background';
import { SponsorData } from '../../assets/data/sponsor-data';
import { SponsorCard } from '../../components/sponsor-card';

export const SponsorsPage = () => {
  const [sponsors, setSponsors] = useState(SponsorData);

  const springProps = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 30px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  });

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1
  }
  return (
    <div className="shit">
      <Background />
      <Container className={styles['main-container']}>
      <div className={styles.heading}>
        <GlitchedText label='OUR SPONSORS' />
      </div>
        <Masonry  className={styles['sponsors-masonry-grid']} breakpointCols={breakpoints} columnClassName={styles['sponsors-masonry-column']}>
          {sponsors.map((sponsor) => (
            <animated.div style={springProps} className={styles.sponsorCard} key={sponsor.name}>
              <SponsorCard image={sponsor.logo} alt={sponsor.name} label={sponsor.name} />
            </animated.div>
          ))}
        </Masonry>
    </Container>
    </div>
  );
};