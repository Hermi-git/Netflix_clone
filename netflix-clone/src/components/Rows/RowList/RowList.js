import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests';

const RowList = () => {
  return (
    <>
    <Row 
    title = "Netflix ORIGINALS"
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow={true}/>

    <Row
      title="trending now"
      fetchUrl={requests.fetchTrending}
      />

      <Row
      title="top rated"
      fetchUrl={requests.fetchTopRated}
      />

    <Row
      title="action movies"
      fetchUrl={requests.fetchActionMovies}
      />

<Row
      title="comedy movies"
      fetchUrl={requests.fetchComedyMovies}
      />
    
    <Row
      title="horror movies"
      fetchUrl={requests.fetchHorrorMovies}
      />
    <Row
      title="romance movies"
      fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
      title="tv shows"
      fetchUrl={requests.fetchPopularTVShows}
      />
      <Row
      title="documentaries"
      fetchUrl={requests.fetchDocumentaries}
      />
    
    </>
  )
}

export default RowList