import styles from './Avatar.module.css';

type AvatarProps = {
    hasBordered?: boolean
    src: string
    alt?: string
}

export function Avatar({ hasBordered= true, src, alt }: AvatarProps ) {
    return (
        <img 
            className={hasBordered ? styles.avatarWithBorder : styles.avatar}
            src={src} 
            alt={alt}
        />
    )
}