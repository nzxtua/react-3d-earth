const TopSectionContainer:React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="absolute w-full h-full top-0 left-0 bg-blue-500/10 flex flex-col justify-center items-center z-99">{children}</div>

const Logo = () => <h1 className="font-bold text-6xl mt-12 text-red-600">STOP the WAR</h1>

const Slogan = () => <h4 className="font-semibold text-xl mt-6 uppercase">Help Ukraine in Self-Defence</h4>

const Paragraph = () => 
  <p className="text-md text-center font-light leading-relaxed max-w-md mx-auto">Next time you sip your coffee and see <span className='italic'>‘Careful, it’s hot!’</span> on the cup, remember that somewhere on Earth is really scorching.<br/>Your coffee can make a difference — instead help Ukraine defend itself and protect the world.</p>

const DonateButton = () => 
  <button type="button" className="outline-none border-none text-base font-semibold rounded-lg px-8 py-2 mt-8 mb-8 cursor-pointer transition duration-350 ease-in-out hover:bg-green-500/25 hover:text-green-500 bg-orange-600/25 text-orange-600">Donate</button>

const MadeBy = () => 
  <h3 className="fixed bottom-5 left-1/2 transform -translate-x-1/2 font-light text-xs">Made by <span className='text-sky-500'>NZXT</span><span className='text-yellow-500'>UA</span></h3>

const Card:React.FC<{ children: React.ReactNode }> = ({ children }) => 
  <div className="m-12 p-6 rounded-lg bg-sky-500/15">{children}</div>

export const TopSection: React.FC = () => {
  return (
    <TopSectionContainer>
      <Logo />
      
      <Slogan />
      
      <Card>
        <Paragraph />
      </Card>

      <DonateButton />
      
      <MadeBy/>
    </TopSectionContainer>
  );
}
