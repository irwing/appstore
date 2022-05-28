import styles from '../styles/Home.module.css'

const TITLE:string = 'AppStore'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {TITLE}
        </h1>
      </main>
    </div>
  )
}
