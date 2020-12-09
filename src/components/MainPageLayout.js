import React from 'react'
import Navs from './Navs'
import Title from './Title'

const MainPageLayout = ({ children }) => (
        <div>
          <Title
          title="Box Office"
          subtitile="Are you looking for a movie or an actor?"
          />

        <Navs/>
        {children}
        
     
      </div>
    )


export default MainPageLayout
