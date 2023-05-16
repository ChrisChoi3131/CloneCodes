import styles from './TodoHeader.module.css'
import Button from '../buttons/Button'
import Tab from '../Tabs/Tab'
import { useState } from 'react';


export default function TodoHeader({ filters, onChangeFilter }) {
  // const [selectedFilter, setSelectedFilter] = useState(filters[0]);
  return (
    <header className={styles.header}>
      <Button text='light'></Button>
      <Tab>
        <ul className={styles.tab}>
          {filters.map((filter) => <li onClick={() => onChangeFilter(filter)}>{filter}</li>)}
        </ul>
      </Tab>
    </header >
  )
}