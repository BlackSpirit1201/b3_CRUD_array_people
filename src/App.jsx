import React from 'react'
import './App.css'
import { useState } from 'react'
import { People } from './components/People1'

function App () {
  const [people, setPeople] = useState ([
    {
      id:1,
      name: 'Wilson Pedraza',
      role: 'Backend',
      img: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      id:2,
      name: 'Andres Rojas',
      role: 'Frontend',
      img: 'https://bootdey.com/img/Content/avatar/avatar2.png'
    },
    {
      id:3,
      name: 'Juana Gonzalez',
      role: 'QA',
      img: 'https://bootdey.com/img/Content/avatar/avatar8.png'
    }
  ])
  return (
    <div>
      <People
      people={people}
      setPeople={setPeople}
      />
      
    </div>
  )
}

export default App
