import enUS from 'date-fns/locale/en-US'
import { format, formatDistanceToNow } from 'date-fns'

import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

type Author = {
    name: string
    role: string
    avatarUrl: string
}

type Content = {
    type: 'paragraph' | 'link'
    content: string
}

export type PostType = {
    id: number
    author: Author
    publishedAt: Date
    content: Content[]
}

type PostProps = {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState(['Thats am awesome post'])
    const [ newCommentText, setNewCommentText ] = useState('')

    const publishedDateFormatted = format(post.publishedAt, "d LLLL 'at' HH:mm'h'", {locale: enUS})
    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, { locale: enUS, addSuffix: true })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('This field is required')
    }

    function deleteComment(commentToBeDeleted: string) {
        const commentListWithoutDeletedOne = comments.filter(comment => comment !== commentToBeDeleted)

        setComments(commentListWithoutDeletedOne)
    }

    const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={post.author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {post.content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Let your feedback</strong>

                <textarea placeholder='Let a comment' value={newCommentText} onChange={handleNewCommentChange} onInvalid={handleNewCommentInvalid} required />

                <footer><button type='submit' disabled={isNewCommentEmpty}>Publish</button></footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
            </div>
        </article>
    )
}
