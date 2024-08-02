import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  const [length, setlength] = useState(0)
  const [number, setNumber] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordgenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTVUWSYZabcdefghijklmnopqrstvuwxyz'
    if (number) str += "0123456789"
    if (characters) str += "!@#$%^&*-_+=~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      // const element = array[i];

    }
    setPassword(pass)


  }, [length, number, characters, setPassword])

  const copypassword = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordgenerator()
  }, [length, number, characters, passwordgenerator])


  return (
    <>
      <div className='w-full  h-screen duration-200 ' style={{ backgroundColor: color }}>
        {/* <h1 className='text-white  text-5xl text-center'>Password Generator</h1> */}
        <br />
        <br />
        <div className='  px-6 bg-slate-900 w-1/2 mx-auto  text-orange-600  rounded-2xl'>
          <h1 className=' text-xl py-3 text-center'>Password Generator</h1>
          <div className='flex shadow rounded-2xl  overflow-hidden mb-5'>

            <input type="text" value={password} className='outline-none w-full py-2 px-3  ' placeholder='Password' readOnly ref={passwordRef} />
            <button onClick={copypassword} className=' bg-blue-700 text-white px-3  shrink-0 '>Copy</button>
          </div>

          <div className='flex gap-x-6'>
            <div className='flex items-center py-1 gap-x-3'>
              <input type="range" min={8} max={15} value={length}
                className='cursor-pointer'
                onChange={(e) => { setlength(e.target.value) }} />
              <label >Length : {length}</label>
            </div>

            <div className='flex items-center py-1 gap-x-3'>
              <input type="checkbox" id='characterinput' defaultChecked={characters}
                className='cursor-pointer'
                onChange={() => { setCharacters((prev) => !prev) }} />
              <label >  Add : Special Character</label>
            </div>


            <div className='flex items-center py-1 gap-x-3'>
              <input type="checkbox" id='characterinput' defaultChecked={characters}
                className='cursor-pointer'
                onChange={() => { setCharacters((prev) => !prev) }} />
              <label >   Add : Numbers</label>
            </div>
          </div>

        </div>
      </div>


      <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className=' flex flex-wrap justify-center px-3 py-2  gap-5 bg-white  rounded-xl shadow-xls'>

          <button onClick={() => setColor('red')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'red' }}>red</button>
          <button onClick={() => setColor('orange')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'orange' }}>orange</button>
          <button onClick={() => setColor('yellow')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'yellow' }}>yellow</button>
          <button onClick={() => setColor('pink')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'pink' }}>light-Pink</button>
          <button onClick={() => setColor('green')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'green' }}>Green</button>
          <button onClick={() => setColor('blue')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'blue' }}>Blue</button>
          <button onClick={() => setColor('cyan')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'cyan' }}>cyan</button>
          <button onClick={() => setColor('purple')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'purple' }}>Purple</button>
          <button onClick={() => setColor('#ff006f')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: '#ff006f' }}>Marjenda</button>
          <button onClick={() => setColor('brown')} className=' px-4 py-1 rounded-xl' style={{ backgroundColor: 'brown' }}>Brown</button>

        </div>
      </div>


    </>
  )
}

export default App

