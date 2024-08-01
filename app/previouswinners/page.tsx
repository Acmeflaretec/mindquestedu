import React from 'react';
import Image from 'next/image';
import styles from './PreviousWinners.module.css';

const winners = [
  { id: 1, name: 'Jane Doe', year: 2023, image: '/jane-doe.jpg', achievement: 'Groundbreaking research in renewable energy', university: 'MIT', field: 'Environmental Engineering' },
  { id: 2, name: 'John Smith', year: 2022, image: '/john-smith.jpg', achievement: 'Innovative AI algorithm for medical diagnoses', university: 'Stanford', field: 'Computer Science' },
  { id: 3, name: 'Alice Johnson', year: 2021, image: '/alice-johnson.jpg', achievement: 'Revolutionary approach to urban planning', university: 'Harvard', field: 'Urban Studies' },
  // Add more winners as needed
];

const PreviousWinners = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Previous Scholarship Recipients</h1>
      <p className={styles.subtitle}>Celebrating Excellence and Innovation</p>
      <div className={styles.winnerGrid}>
        {winners.map((winner) => (
          <div key={winner.id} className={styles.winnerCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={winner.image}
                alt={winner.name}
                width={300}
                height={300}
                className={styles.winnerImage}
              />
            </div>
            <div className={styles.winnerInfo}>
              <h2 className={styles.winnerName}>{winner.name}</h2>
              <p className={styles.year}>{winner.year} Recipient</p>
              <p className={styles.university}>{winner.university}</p>
              <p className={styles.field}>{winner.field}</p>
              <p className={styles.achievement}>{winner.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreviousWinners;