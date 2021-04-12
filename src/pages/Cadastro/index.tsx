import { Button, Form, Input, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../../components/header";

import api from "../../services/api";

const Cadastro = () => {
  const history = useHistory();
  const [code, setCode] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [images, setImages] = useState<File[]>([]);

  const [form] = useForm();

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }
    const images = Array.from(event.target.files);

    setImages(images);
  }
  async function handleSubmit(event: FormEvent) {
    const data = new FormData();

    data.append("code", code);
    data.append("firstName", firstName.toUpperCase());
    data.append("lastName", lastName.toUpperCase());
    data.append("occupation", occupation.toUpperCase());

    images.map((image) => {
      data.append("images", image);
    });

    if (firstName.length > 0 && lastName.length > 0 && occupation.length > 0) {
      await api.post("users", data);

      message.success({content:"Funcionário cadastrado com sucesso!", style: {position: "fixed", zIndex: 9999}});
      history.push("/");
    } else {
      message.error("Preencha os campos abaixo antes de prosseguir.");
    }
  }
  console.log(images);

  return (
    <>
      <HeaderComponent />

      <div style={{ padding: "0 250px" }}>
        <Form
          onFinish={handleSubmit}
          form={form}
          style={{ width: "80%", marginLeft: "10%", paddingTop: 100 }}
        >
          <h4>Código</h4>
          <Form.Item name="code">
            <Input value={""} onChange={(event)=> setCode(event.target.value)}/>
          </Form.Item>
          <h4>Nome</h4>
          <Form.Item  name="firstName">
            <Input
              
              value={""}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </Form.Item>
          <h4>Sobrenome</h4>
          <Form.Item name="lastName">
            <Input
              
              value={""}
              onChange={(event) => setLastName(event.target.value)}
            />
          </Form.Item>
          <h4>Ocupação</h4>
          <Form.Item name="occupation">
            <Input
              
              value={""}
              onChange={(event) => setOccupation(event.target.value)}
            />
          </Form.Item>
          <h4>Foto</h4>
          <Form.Item name="images">
            {images.length === 0 ? (
              <Button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  width: "100%",
                }}
              >
                <span>Selecione uma imagem</span>
                <Input
                  
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    fontSize: 20,
                    cursor: "pointer",
                    opacity: 0,
                    filter: "alpha(opacity=0)",
                  }}
                  value={""}
                  onChange={handleSelectImages}
                  type="file"
                  id="image[]"
                />
              </Button>
            ) : (
              <Button
                style={{
                  backgroundColor: "green",
                  color: "white",
                  width: "100%",
                }}
              >
                <span>Imagem selecionada</span>
                <Input
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: 0,
                    padding: 0,
                    fontSize: 20,
                    cursor: "pointer",
                    opacity: 0,
                    filter: "alpha(opacity=0)",
                  }}
                  value={""}
                  onChange={handleSelectImages}
                  type="file"
                  id="image[]"
                />
              </Button>
            )}
          </Form.Item>
          <Button style={{ width: "50%", marginLeft: "25%" }} htmlType="submit">
            Cadastrar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Cadastro;
