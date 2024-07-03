'use client'

import Link from 'next/link'
import styles from './SideItems.module.css'
import { usePathname } from 'next/navigation'

interface SideItemsProps {
    text: string
    link: string
    icon: React.ReactNode
}

const SideItems = ({ text, link, icon }: SideItemsProps) => {

    const pathName = usePathname()

    return (
        <li className={styles.container}>
            <Link href={link} className={`${pathName === link ? styles.selected : styles.option}`}>
                {icon}
                <span className={`${pathName === link ? styles.selectedText : styles.optionText}`}>{text}</span>
            </Link>
        </li>
    )
}

export default SideItems