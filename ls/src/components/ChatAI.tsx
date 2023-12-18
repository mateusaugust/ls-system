
import React, { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';

const ChatAI: React.FC = () => {
  const [inputQuestion, setInputQuestion] = useState('');
  const [result, setResult] = useState('');
  const OPENAI_API_KEY = "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";
  const MODEL_NAME = "text-davinci-003";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuestion(e.target.value);
  };

  const sendQuestion = () => {
    if (!inputQuestion.trim()) {
      alert("Por favor, insira uma pergunta válida.");
      return;
    }

    setResult(`Eu: ${inputQuestion}\n\n\n`);

    setInputQuestion("Carregando...");
    // ... Restante do código de envio para o OpenAI

    // Simulando a resposta
    setTimeout(() => {
      setResult((prevResult) => {
        return prevResult + `Agro IA: Simulação de resposta\n\n\n`;
      });
      setInputQuestion('');
    }, 2000); // Simula uma resposta após 2 segundos (substitua pelo seu código real)
  };

  return (
    <Box>
      <TextField
        fullWidth
        id="inputQuestion"
        label="Sua pergunta"
        variant="outlined"
        value={inputQuestion}
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (inputQuestion && e.key === "Enter") sendQuestion();
        }}
      />
      <br />
      <Button variant="contained" onClick={sendQuestion}>
        Enviar
      </Button>
      <br />
      <TextField
        fullWidth
        multiline
        rows={8}
        id="result"
        variant="outlined"
        value={result}
        InputProps={{ readOnly: true }} 
      />
    </Box>
  );
};

export default ChatAI;
