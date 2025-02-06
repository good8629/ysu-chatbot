import Talk from '@/app/(chatAI)/_component/Talk'
import styles from '@/app/(chatAI)/_component/talk.module.css';

export default async function Home() {
    return(
        <div className={styles.body}>
            <Talk></Talk>
        </div>
    )
}