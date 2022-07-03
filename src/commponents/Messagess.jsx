import {React ,useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Messangess.css';

const localUser = "alice"

const messzgesData = [
        {
            autor : localUser,
            text : "hey"
        }, 
        {
            autor : "bob",
            text : "how you doing?"
        }, 
    ]

export default function Messagess() {

    const [message , setMessage] = useState("")
    const [conversation , setConversation] = useState(messzgesData)

    const addMessageToConversation = () => {
      console.log(message);
      setConversation(conversation => 
        [...conversation, { autor: localUser, text: message }]
      )
      console.log(conversation);
    }

    const ConvMessages = conversation.map((element) =>
      <p class={element.autor == "alice" ? "from-me" : "from-them"}>
              {element.text}
      </p>
    );
    
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        console.log(event.target.value)
        setConversation(conversation => 
          [...conversation, { autor: localUser, text: event.target.value }]
        )
        event.target.value = ""
      }
    }

    return (
      <Box sx={{ flexGrow: 1 }} class="box" >      
        <div class="imessage">
            {ConvMessages}
        </div>
        <TextField style={{width: "100%"}}
                   id="outlined-basic"
                   placeholder="message"
                   variant="outlined"
                   onKeyDown={handleKeyDown}/>
      </Box>
    );
  }