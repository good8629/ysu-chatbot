import styles from '@/app/(chatAI)/_component/talk.module.css';
import Image from 'next/image';
import Talk from '@/app/(chatAI)/_component/Talk';

export default async function Home() {
    return(
        <>
            <div className={styles.pc_body}>
                <div className={styles.pc_container}>
                    <div className={styles.pc_left}>
                        <Image src="/images/demo_info.png" alt="Chat AI Demo Version infomation" width={800} height={852}></Image>
                    </div>
                    <div className={styles.pc_right}>
                        {/* <div className={styles.pc_body}>
                        <header>
                            <div className={styles.header_inner}>
                                <a>
                                    <Image src="/images/img-logo.svg" alt="logo" width={77} height={36}></Image>
                                </a>
                            </div>
                        </header>
                        </div> */}
                        <iframe src="http://localhost:3000" width="393" height="852" className={styles.pc_background}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}