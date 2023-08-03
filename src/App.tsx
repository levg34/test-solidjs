import { Button, Card, TextField } from '@suid/material'
import { createSignal } from 'solid-js'
import { génèreRéponse, détecteGH, génèreGH } from './générateur-réponse'

export default function App() {
    const [texte, setTexte] = createSignal('Luc')
    const [messages, setMessages] = createSignal<
        { message: string; right?: boolean }[]
    >([])

    const envoyerMessage = () => {
        const message = texte()
        const réponse = génèreRéponse(texte())
        setTexte('')
        setMessages([
            ...messages(),
            { message, right: true },
            { message: réponse },
        ])
    }

    return (
        <>
            <TextField
                label="Texte"
                variant="outlined"
                fullWidth
                onChange={(e) => setTexte(e.target.value)}
                value={texte()}
                onKeyPress={(e) => {
                    if (e.code === 'Enter') {
                        envoyerMessage()
                    }
                }}
            />
            <Button
                variant="contained"
                onclick={envoyerMessage}
                disabled={!texte()}
            >
                Envoyer
            </Button>
            <Button
                variant="outlined"
                color="warning"
                onclick={() => {
                    setMessages([])
                    setTexte('Luc')
                }}
            >
                Réinitialiser
            </Button>
            {messages().map((message) => (
                <Card
                    sx={{ m: 1 }}
                    style={
                        message.right
                            ? {
                                  'text-align': 'right',
                                  'background-color': 'lightgray',
                              }
                            : {
                                  'background-color': 'lightgoldenrodyellow',
                              }
                    }
                >
                    {message.message}
                </Card>
            ))}
        </>
    )
}
