import styles from 'styles/two-column.module.css'

export const TwoColumn = ({ children }) => (
  <div className={styles.flexContainer}>{children}</div>
)

export const TwoColumnMain = ({ children }) => (
  <div className={styles.main}>{children}</div>
)

export const TwoColumnSidebar = ({ children }) => (
  <div className={styles.sidebar}>{children}</div>
)
