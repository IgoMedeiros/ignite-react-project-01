import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css';
import { Avatar } from './Avatar';

export function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/5392242?v=4" />
                <strong>Igo Medeiros</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit profile
                </a>
            </footer>
        </aside>
    )
}