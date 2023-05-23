// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Profile from './views/componets/Profile'
import TableOfContent from './views/componets/TableOfContent'
import StateMemory from './views/componets/StateMemory'
import StateAsSnapshot from './views/componets/From'
import UpdatingObjectState from './views/componets/UpdatingObjectState'
import DeclarativeUi from './views/componets/DeclarativeUi'
import Sharing from './views/componets/Sharing'
import PassingDataContext from './views/componets/PassingDataContext'
import TaskApp from './views/componets/TaskApp'
import Ref from './views/componets/Ref'
import EffectCleanUp from './views/componets/EffectCleanUp'
import Effect from './views/componets/Effect'
import CustomHooks from './views/componets/CustomHooks'
function App() {
 

  return (
    <>
      <section>
        <TableOfContent />
        <Profile />
        <StateMemory />
        <StateAsSnapshot />
        <UpdatingObjectState />
          <DeclarativeUi />
          <Sharing />
          <TaskApp />
         <PassingDataContext></PassingDataContext>
        <Ref />
        <Effect />
        <EffectCleanUp></EffectCleanUp>
        <CustomHooks></CustomHooks>

      </section>
    
    </>
  )
}

export default App
