import { Trash, ThumbsUp } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

type CommentProps = {
    content: string
    onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment() {
        setLikeCount((previousState) => previousState + 1) 
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBordered={false} src="https://avatars.githubusercontent.com/u/5392242?v=4" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igo Medeiros</strong>
                            <time title='May, 11th at 04:37pm' dateTime='2023-06-04 16:37:00'>Published 1 hour ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{ content }</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20} />
                        Applaud <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}