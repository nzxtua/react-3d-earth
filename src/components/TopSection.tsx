import { DonateButton } from './DonateButton'

const TopSectionContainer:React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="absolute w-full h-full top-0 left-0 bg-blue-500/10 flex flex-col justify-center items-center z-99">{children}</div>

const Card:React.FC<{ children: React.ReactNode }> = ({ children }) => <div className="m-12 p-6 rounded-md bg-[#435730]/25 border-[2px]">{children}</div>

const Logo = () => <h1 className="font-black text-8xl bg-clip-text text-transparent bg-gradient-to-r from-orange-500/50 to-red-500/50">STOP the WAR</h1>

const Slogan = () => <h2 className="font-semibold text-2xl mt-6 uppercase">Help Ukraine in Self-Defence</h2>

const Paragraph = () => 
  <p className="text-md text-center font-extralight leading-relaxed max-w-md mx-auto">Next time you sip your coffee and see <span className='italic'>‘Careful, it’s hot!’</span> on the cup, remember that somewhere on Earth is really scorching.<br/>Your coffee can make a difference — instead help Ukraine defend itself and protect the civilized world.</p>
  
const MadeBy = () => 
  <h3 className="fixed bottom-5 left-1/2 transform -translate-x-1/2 font-light text-xs">Made by <span className='text-sky-500'>NZXT</span><span className='text-yellow-500'>UA</span></h3>


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
