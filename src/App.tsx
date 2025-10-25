import Header from './components/Header'


function App() {
  return (
    <>
      <Header />

      {/* Default page padding so content doesn't touch the viewport edges */}
      <main className='dark:bg-gray-900 min-h-screen flex justify-center px-6'>
        <h2 className="text-2xl text-zinc-50">Hello World</h2>
      </main>
    </>
  )
}

export default App
