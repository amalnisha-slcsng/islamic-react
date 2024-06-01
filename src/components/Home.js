import HeroImg from '../assets/img24.jpg';

export default function Home() {
    const config = {
        subtitle :'Welcome to the Islamic Knowledge Hub, your source for spiritual enlightenment and comprehensive understanding of Islam. 🕌✨'
    }

    return (
        <section id='home'className='flex flex-col md:flex-row px-5 py-32   bg-green-400 justify-center md:py-28 border rounded-md'>
            <div id='about'className='md:w-1/2 flex flex-col'>
                <h1 id='Home'  className='text-white text-4xl md:text-6xl font-bold'>
                Assalamualaikum,<br className="md:hidden" /> Explore Islam 
                    <p className='text-lg md:text-2xl pt-2 mb-2 mt-4'>{config.subtitle}</p>
                </h1>
            </div>
            <img className='w-full md:w-1/3 border rounded-md shadow-md border-black' src={HeroImg} alt="Developer Illustration" />
        </section>
    );
}
