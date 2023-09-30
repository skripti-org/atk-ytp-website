import './Counter.scss';

const EMBED_ID = 'hgZ-FrfIFG4?si=H6NJr62mRobvDZdm';

const YoutubeEmbed = () => {
  return (
    <div className='relative h-0 overflow-hidden pb-[56.25%] shadow' id='traileri'>
      <iframe
        width='853'
        height='480'
        src={`https://www.youtube.com/embed/${EMBED_ID}&origin=https://atk-ytp.org`}
        frameBorder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        title='Embedded youtube'
        className='absolute inset-0 h-full w-full'
        loading='lazy'
      />
    </div>
  );
};

export default YoutubeEmbed;
