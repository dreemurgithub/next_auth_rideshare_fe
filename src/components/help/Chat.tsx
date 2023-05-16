import {useState, FormEvent, useEffect} from "react";
import {useSession} from "next-auth/react";
export default function Chat() {
    const {data : session} = useSession()
    const [On_off,setonOFF] = useState(false)
    const [displayButton, setButton] = useState('block')
    const fake_chat_user = [
        {time: 1684157520000, text: 'me hello 8', user: 'me'},
        {time: 1684157510000, text: 'me hello 7', user: 'me'},
        {time: 1684157495000, text: 'me hello 6', user: 'me'},
        {time: 1684157492000, text: 'me hello 5', user: 'me'},
        {time: 1684113691000, text: 'me hello 4', user: 'me'},
        {time: 1684146025000, text: 'me hello 3', user: 'me'},
        {time: 1684145219000, text: 'me hello 2', user: 'me'},
        {time: 1684140394000, text: 'me hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 hello 1 ', user: 'me'},
        {time: 1684138002000, text: 'me hello 0', user: 'me'},
    ]
    const fake_chat_helper = [
        {
            time: 1684134494000,
            text: 'helper hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0 hello 0',
            user: 'helper'
        },
        {time: 1684138114000, text: 'helper hello 1', user: 'helper'},
        {time: 1684141728000, text: 'helper hello 2', user: 'helper'},
        {time: 1684113691000, text: 'helper hello 3', user: 'helper'},
        {time: 1684153292000, text: 'helper hello 4', user: 'helper'},
        {time: 1684153295000, text: 'helper hello 5', user: 'helper'},
        {time: 1684153291000, text: 'helper hello 6', user: 'helper'},
        {time: 1684157560000, text: 'helper hello 7', user: 'helper'},
        {time: 1684157580000, text: 'helper hello 8', user: 'helper'},

    ]
    const [fake_List, setlist] = useState([{time: 1684138114000, text: 'helper hello 1', user: 'helper'}])
    function send_message(){
        const chat_inbox  : HTMLInputElement | null = document.querySelector('input#chat_user')

        if(chat_inbox&&chat_inbox.value!== ''){
            const new_fake_chat = [{time: new Date().getTime() , text:chat_inbox.value , user:'me'},...fake_List]
            new_fake_chat.sort((a : {time: number},b:{time : number} )=> a.time-b.time )
            setlist(new_fake_chat as any)
            chat_inbox.value=''
        }
        const scroll = document.querySelector('#bottom_chat')
        setTimeout(()=>{
            if (scroll) {
                scroll.scrollTop = scroll.scrollHeight
            }
        },100)
    }
    useEffect(() => {

        // const fake_chat  = []
        fake_chat_user.forEach((el) => fake_chat_helper.push(el))
        // fake_chat_helper.forEach((el) => fake_chat.push(el))
        fake_chat_helper.sort((a: { time: number }, b: { time: number }) => a.time - b.time) // 0 is the lowest time, n is the nearest time
        console.log(fake_chat_helper)
        setlist(fake_chat_helper)
        const scroll = document.querySelector('#bottom_chat')
        setTimeout(()=>{
            if (scroll) {
                scroll.scrollTop = scroll.scrollHeight
            }
        },100)
    }, [On_off])
    if(On_off) return <>
        <div style={{
            height: '25em',
            width: '25em',
            backgroundColor: '#708090',
            display: 'grid',
            gridTemplateRows: 'auto 20em auto auto',
            position:'fixed',
            bottom : '1em',
            right:'1em',
            zIndex:'100'
        }} className={'card'}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" style={{backgroundColor: '#3c2f2f', color: 'white',display:'flex',justifyContent:'space-between'}}>
                    <span>{(session&& session.user )? session.user.name : null }</span>
                    <span style={{cursor:'pointer'}} onClick={ ()=>setonOFF(false) }>X</span>
                </li>
            </ul>
            <div style={{overflowY: 'scroll'}} id={'bottom_chat'}>
                {fake_List.map(
                    (el: { time: number, text: string, user: string } | null) => {
                        if (el) return <div>
                            <Chat_box time={el.time} text={el.text} user={el.user}/>
                        </div>
                        else return null
                    }
                )}
            </div>
            <ul className="list-group list-group-flush">
                <div className="list-group-item" style={{backgroundColor: '#3c2f2f', color: 'white'}}>
                    <div className="input-group">
                        <input type='text' id={'chat_user'} className="form-control" onChange={(e: FormEvent<HTMLInputElement>) => {
                            if (e.currentTarget.value !== '') setButton('none')
                            else setButton('block')
                        }} onKeyDown={(e:any)=> {
                            if (e.key === 'Enter') send_message()
                        }}></input>
                        <button className="input-group-text btn btn-primary" onClick={send_message}>Send</button>
                        <button className={'btn btn-success'} style={{display: displayButton}}>
                            {/*Like button*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                <path
                                    d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
                            </svg>
                        </button>
                        <button className={'btn btn-secondary'} style={{display: displayButton}}>
                            {/*Icon button*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                            </svg>
                        </button>
                        <button className={'btn btn-light'} style={{display: displayButton}}>
                            {/*file button*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
                                <path
                                    d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
                            </svg>
                        </button>
                        <button className={'btn btn-dark'} style={{display: displayButton}}>
                            {/*image button*/}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-card-image" viewBox="0 0 16 16">
                                <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                <path
                                    d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </ul>
        </div>
    </>
    else return <>
        <ul className="list-group list-group-flush" style={{
            height: '2em',
            width: '9em',
            backgroundColor: '#708090',
            position:'fixed',
            bottom : '1em',
            right:'1em',
            zIndex:'100',
            cursor : 'pointer'
        }} onClick={()=> {
            setonOFF(true)
            send_message()
        }}>
            <li className="list-group-item" style={{backgroundColor: '#3c2f2f', color: 'white',display:'flex',justifyContent:'space-between'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-chat-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
                </svg>
                Let us help!
            </li>
        </ul>
    </>
}

function Chat_box({time, text, user}: { time: number, text: string, user: string }) {
    // toISOString (test time on server > current time, so maybe there is a bug with toLocaleDate()
    if (user === 'me') return <div style={{float: 'right', width: '90%', textAlign: 'right'}} key={time}>

        <div className="input-group mb-3 list-group list-group-flush"
             style={{display: 'grid', gridTemplateColumns: 'auto 3em', gap: '0.5em',}}>
             <span className="input-group mb-3list-group-item border"
                   style={{backgroundColor: 'whitesmoke', borderRadius: '5px'}}> {text} </span>
            <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>
            </span>
        </div>
        <p style={{fontSize: '0.5em', textAlign: 'center'}}> {new Date(time).toISOString()}</p>


    </div>
    if (user === 'helper') return <div style={{float: 'left', width: '90%', textAlign: 'left'}} key={time}>

        <div className="input-group mb-3 list-group list-group-flush"
             style={{display: 'grid', gridTemplateColumns: '3em auto', gap: '0.5em',}}>
            <span className="input-group-text">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-car-front-fill" viewBox="0 0 16 16">
                    <path
                        d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM3 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM2.906 5.189a.51.51 0 0 0 .497.731c.91-.073 3.35-.17 4.597-.17 1.247 0 3.688.097 4.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 11.691 3H4.309a.5.5 0 0 0-.447.276L2.906 5.19Z"/>
                </svg>
            </span>
            <span className="input-group mb-3list-group-item border"
                  style={{backgroundColor: 'whitesmoke', borderRadius: '5px'}}> {text} </span>
        </div>
        <p style={{fontSize: '0.5em', textAlign: 'center'}}> {new Date(time).toISOString()}</p>
    </div>
    return null
}
