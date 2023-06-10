import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBordered?: boolean;
}

export function Avatar({ hasBordered= true, ...props }: AvatarProps ) {
    return (
        <img 
            className={hasBordered ? styles.avatarWithBorder : styles.avatar}
            { ...props }
        />
    )
}