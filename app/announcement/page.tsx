// pages/announcement.js
import Head from 'next/head';
import styles from './Announcement.module.css';

export default function Announcement() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Scholarship Announcement 2024</title>
        <meta name="description" content="Announcing our Excellence Scholarship Program for 2024" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Scholarship Announcement</h1>
        
        <div className={styles.announcement}>
          <p className={styles.lead}>
            We are pleased to announce the Excellence Scholarship Program for the academic year 2024-2025.
          </p>
          
          <h2 className={styles.sectionHeading}>About the Scholarship</h2>
          <p>
            The Excellence Scholarship is designed to recognize and support outstanding students 
            who demonstrate exceptional academic achievement and leadership potential. This 
            prestigious award offers a unique opportunity for talented individuals to pursue 
            their educational goals at our institution.
          </p>

          <h2 className={styles.sectionHeading}>Key Information</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Scholarship covers full tuition for the 2024-2025 academic year</li>
            <li className={styles.listItem}>Open to both incoming and current undergraduate students</li>
            <li className={styles.listItem}>Merit-based selection process</li>
            <li className={styles.listItem}>Emphasis on academic excellence and leadership qualities</li>
          </ul>

          <h2 className={styles.sectionHeading}>Important Dates</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Application Opening: January 15, 2024</li>
            <li className={styles.listItem}>Application Deadline: March 31, 2024</li>
            <li className={styles.listItem}>Results Announcement: May 15, 2024</li>
          </ul>

          <p className={styles.note}>
            Detailed information about eligibility criteria and the application process will be 
            available on our website starting January 15, 2024. We encourage all qualified 
            students to apply for this exceptional opportunity.
          </p>
        </div>
      </main>
    </div>
  );
}