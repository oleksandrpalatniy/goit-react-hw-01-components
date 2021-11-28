import styles from './statistics.module.css'

export const Statistics = ({title, stats}) => {
  return (
      <section className={styles.Statistics_container}>
      {title && <h2 className="title">{title}</h2>}
      <ul className={styles.Statlist}>
      {stats.map(el =>
        <li className={styles.Statitem} key={el.id} style={{backgroundColor: randomColor()}}>
       <span>{el.label}</span>
      <span>{el.percentage}%</span>
          </li>
        )}
      </ul>
      </section>
    )
}



const randomColor = () => "#" + Math.floor(Math.random() * 16777215).toString(16);