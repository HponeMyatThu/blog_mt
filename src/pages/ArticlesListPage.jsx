import SingleArticles from 'src/components/Articles/SingleArticles'
import React from 'react'
import LogoArticles from 'src/components/Articles/LogoArticles'
import ReadArticlesList from 'src/components/Articles/ReadArticlesList'

const ArticlesListPage = () => {
  return (
    <>
      <SingleArticles />
      <LogoArticles />
      <ReadArticlesList />
    </>
  )
}

export default ArticlesListPage