import './TextScroller.scss'

const TextScroller = ({scrollDirection}) => {
    return (
        <>
            <div className="scroll">
                {scrollDirection === "left" ? 
                    <div className="scroll-left">
                            <span className='scroll-text'>ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 •&nbsp;</span>
                            <span className='scroll-text'>ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 •&nbsp;</span>
                    
                    </div>
                    :
                    <div className="scroll-right">
                            <span className='scroll-text'>ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 •&nbsp;</span>
                            <span className='scroll-text'>ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 • ATK-YTP JOENSUU 11.-13.10.2023 •&nbsp;</span>
                    </div>
            }
            </div>
        </>
    )
}

export default TextScroller