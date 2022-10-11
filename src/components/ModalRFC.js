import React from 'react'

export default function ModalRFC() {
    const [modal, setModal] = React.useState(false)

    return (
        <div>
            <button onClick={() => setModal(true)}>Open modal</button>
            {modal && (
                <div className="overlay">
                    <div className="modal">
                        <svg onClick={() => setModal(false)} height="200" viewBox="0 0 200 200" width="200">
                            <title />
                            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                        </svg>
                        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
                    </div>
                </div>
            )}
        </div>
    )
}

