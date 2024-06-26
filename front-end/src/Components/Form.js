import { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from 'axios';
import { toast } from "react-toastify";

const FormContainer = styled.form`
display:  flex;
align-items: flex-end;
gap: 10px;
flex-wrap: wrap;
background-color: #fff;
padding: 20px;
box-shadow: 0px 0px 5px #ccc;
border-radius: 5px;
`;

const InputArea = styled.div`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``; 

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

function Form({ getUsers, onEdit, setOnEdit }){

    const ref = useRef();

    useEffect(() => {
        if(onEdit) {
            const user = ref.current;

            user.nameUsers.value = onEdit.nameUser
            user.emailUsers.value = onEdit.emailUsers
            user.fone.value = onEdit.fone
            user.date_nasc.value = onEdit.date_nasc
        }
    }, [onEdit])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (
            !user.nameUsers.value ||
            !user.emailUsers.value ||
            !user.fone.value ||
            !user.date_nasc.value
          ){
            return toast.warn("preencha todos os campos!");
          } 
         
        if(onEdit){
            await axios
            .put(`http://localhost:8800/${onEdit.id}`, {
                nome: user.nameUsers.value,
                email: user.emailUsers.value,
                fone: user.fone.value,
                data_nascimento: user.date_nasc.value,
            })
            .then(({data}) => toast.success(data))
            .catch(({data}) => toast.error(data))
        }  

        user.nameUsers.value = "";
        user.emailUsers.value = "";
        user.fone.value = "";
        user.date_nasc.value = "";
    
        setOnEdit(null);
        getUsers();
    }

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name='nameUsers'/>
            </InputArea>

            <InputArea>
                <Label>Email</Label>
                <Input name='emailUsers' type="email"/>
            </InputArea>

            <InputArea>
                <Label>Telefone</Label>
                <Input name='fone'/>
            </InputArea>

            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name='data_nasc' type="date"/>
            </InputArea>

            <Button type='submit'>SALVAR</Button>
        </FormContainer>
    )
}

export default Form;