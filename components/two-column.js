import styles from 'styles/two-column.module.css'

export const TwoColmn = ({ children }) => (
  <div className={styles.flexContainer}>{children}</div>
)

export const TwoColmnMain = ({ children }) => (
  <div className={styles.main}>{children}</div>
)

export const TwoColmnSidebar = ({ children }) => (
  <div className={styles.sidebar}>{children}</div>
)
