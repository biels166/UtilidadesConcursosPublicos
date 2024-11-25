import React, { useState } from "react";
import { Box, TextField, IconButton, Tooltip } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  BotaoFormatar,
  CopiarTextoIcon,
  Container,
  BotaoLimpar
} from './styles';

export const Login = () => {

  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  function formatarEVerticalizar() {
    if (inputText.trim() !== "") {
      let resultadoFinal = ""
      let maisDeUmaMateria = inputText.includes("_")

      if (!maisDeUmaMateria) {
        let materia = inputText.split(": ")[0];
        let sanitizedText = inputText.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();

        const regex = /(?<!\S)\d+(\.\d{1,2}){0,2}(?!\S)/g;
        let items = [...sanitizedText.matchAll(regex)];

        if (items.length > 0) {
          let resultado = `MATÉRIA -> ${materia}:\n\n`;

          for (let i = 0; i < items.length; i++) {
            let currentItem = items[i][0];
            let nextItem = items[i + 1]?.[0] || null;

            let startIndex = sanitizedText.indexOf(currentItem);
            let endIndex = nextItem
              ? sanitizedText.indexOf(nextItem, startIndex + currentItem.length)
              : sanitizedText.length;

            let description = sanitizedText.slice(startIndex + currentItem.length, endIndex).trim();

            resultado += `${currentItem} ${description}\n`;
          }

          setOutputText(resultado);
        }
      }
      else {
        inputText.split("_").forEach(mat => {
          let materia = mat.split(": ")[0];
          let sanitizedText = mat.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();

          const regex = /(?<!\S)\d+(\.\d{1,2}){0,2}(?!\S)/g;
          let items = [...sanitizedText.matchAll(regex)];

          if (items.length > 0) {
            let resultado = `MATÉRIA -> ${materia}:\n\n`;

            for (let i = 0; i < items.length; i++) {
              let currentItem = items[i][0];
              let nextItem = items[i + 1]?.[0] || null;

              let startIndex = sanitizedText.indexOf(currentItem);
              let endIndex = nextItem
                ? sanitizedText.indexOf(nextItem, startIndex + currentItem.length)
                : sanitizedText.length

              let description = sanitizedText.slice(startIndex + currentItem.length, endIndex).trim();

              resultado += `${currentItem} ${description}\n`
            }

            resultadoFinal += `\n\n${resultado}`
          }
        })

        setOutputText(resultadoFinal)
      }
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText).then(() => {
      alert("Texto copiado para a área de transferência!")
    })
  }

  return (
    <Container>
      <Box width='100%'>
        <h2>Verticalizador de Editais</h2>
        <h6>Para verticalizar mais de uma matéria por vez, separe-as com "_"</h6>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <TextField
            label="Texto de entrada"
            multiline
            rows={10}
            fullWidth
            value={inputText}
            onChange={(e) => { setInputText(e.target.value) }}
            sx={{
              whiteSpace: "pre-line",
              wordWrap: "break-word",
              wrap: "off"
            }}
          />

          <Box
            display="flex"
            justifyContent="center"
            gap="16px"
          >
            <Tooltip title="Formatar">
              <BotaoFormatar
                variant="contained"
                type='submit'
                onClick={formatarEVerticalizar}
              >
                Formatar
              </BotaoFormatar>
            </Tooltip>

            <Tooltip title="Limpar">
              <BotaoLimpar
                variant="contained"
                type='submit'
                onClick={() => {
                  setInputText("")
                  setOutputText("")
                }}
              >
                Limpar
              </BotaoLimpar>
            </Tooltip>
          </Box>

          <TextField
            label="Texto formatado"
            multiline
            rows={10}
            fullWidth
            value={outputText}
            disabled
            sx={{
              whiteSpace: "pre-line",
              wordWrap: "break-word",
              wrap: "off"
            }}
          />

          <Tooltip title="Copiar texto">
            <IconButton color="primary" onClick={copyToClipboard}>
              <CopiarTextoIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Container>

  );
}