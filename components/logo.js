import Link from 'next/link'
import styles from 'styles/logo.module.css'
const Logo = ({ boxOn = false }) => (
  <Link href='/'>
    <div className={boxOn ? styles.box : styles.basic}>CUBE</div>
  </Link>
)
export default Logo
