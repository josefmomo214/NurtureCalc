'use client'
export default function Error({ error }: { error: Error }) {
  return (
    <div className="min-h-screen bg-[#FFFDF9] flex flex-col items-center justify-center p-10 text-center space-y-4">
      <h1 className="text-3xl font-serif text-[#3D2C2C]">Oops! Something went wrong</h1>
      <p className="text-[#3D2C2C]/70">We encountered an issue while loading this article.</p>
      <div className="p-4 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm font-mono max-w-lg overflow-auto">
        {error.message}
      </div>
      <button 
        onClick={() => window.location.reload()}
        className="bg-[#E8A0A8] text-white px-8 py-3 rounded-full font-label uppercase tracking-widest text-xs font-bold transition-all hover:bg-[#D58A92]"
      >
        Try Reloading
      </button>
    </div>
  )
}
