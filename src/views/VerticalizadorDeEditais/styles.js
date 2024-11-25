import styled from "styled-components";
import { Box } from '@mui/material'
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

export const CopiarTextoIcon = styled(FileCopyOutlinedIcon)({
    color: '#8B0000'
})

export const Container = styled("div")({
    minHeight: '100%',
    minWidth: '100%',
    display: "flex",
    padding: "0px 20px 20px 20px",
    flexDirection: "column",
    backgroundColor: "#F9F9F9",
    borderRadius: "10px",
    boxShadow: '2px 2px 5px grey',
});


export const BotaoFormatar = styled("button")({
    backgroundColor: '#8B0000',
    minHeight: '40px',
    width: '100px',
    borderRadius: '10px',
    borderWidth: '0px',
    WebkitTextFillColor: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '20px 0px 0px 0px',
    '&:hover': {
        backgroundColor: '#DB0000',
        boxShadow: '2px 2px 5px grey',
    }
});

export const BotaoLimpar = styled("button")({
    backgroundColor:'#FFFFFF',
    minHeight: '40px',
    width: '100px',
    borderRadius: '10px',
    borderWidth: '1px',
    borderColor:'#8B0000',
    WebkitTextFillColor: '#8B0000',
    fontSize: 16,
    fontWeight: 'bold',
    cursor: 'pointer',
    margin: '20px 0px 0px 0px',
    '&:hover': {
        borderColor:'#DB0000',
        WebkitTextFillColor: '#DB0000',
        backgroundColor: '#FFFDFD',
        boxShadow: '2px 2px 5px grey',
    }
});

export const LoginBox = styled(Box)({
    '& .MuiTextField-root': {
        m: 1,
        width: '40ch',
        margin: '10px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#DB0000',
                borderRadius: '10px',  

            },
            '&:hover fieldset': {
                borderColor: '#DB0000',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#DB0000',
            }
        },

    },
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
})
