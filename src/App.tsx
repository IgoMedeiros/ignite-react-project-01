import styles from './App.module.css';
import './global.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/SideBar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/5392242?v=4',
      name: 'Igo Medeiros',
      role: 'Tech Lead @Sinch'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/5392242?v=4',
      name: 'Igo Paixao',
      role: 'Frontend Specialist @Sinch'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

function App() {
  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => (
            <Post 
              key={post.id} 
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default App
