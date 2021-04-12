import { Alert, Button, Table, message } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/header";
import jsPDF from "jspdf";
import api from "../../services/api";
import logo from "../../images/logo.png";

const Listagem = () => {
  let dataSource: any[] = [];

  let data: Object;

  interface User {
    id: string;
    code: string;
    firstName: string;
    lastName: string;
    occupation: string;
    images?: Array<{
      url: string;
      id: number;
    }>;
  }

  const [user, setUser] = useState<User[]>([]);

  useEffect(() => {
    api.get(`/users`).then((response) => {
      setUser(response.data);
    });
  }, []);

  const [rows, setRows] = useState<any>([]);
  const columns = [
    {
      title: "Código",
      dataIndex: "code",
      key: "code"
    },
    {
      title: "Nome",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Sobrenome",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Ocupação",
      dataIndex: "occupation",
      key: "occupation",
    },
    {
      title: "#",
      dataIndex: "options",
      key: "options",
      render: () => (
        <a>
          <EditOutlined></EditOutlined>
        </a>
      ),
    },
  ];

  user.map((user) => {
    data = {
      key: user.id,
      code: user.code,
      firstName: user.firstName.toUpperCase(),
      lastName: user.lastName.toUpperCase(),
      occupation: user.occupation.toUpperCase(),
      images: user.images,
    };

    console.log(user);
    console.log("data", data);

    dataSource.push(data);

    console.log("dataSource", dataSource);

    return data;
  });

  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
      setRows(selectedRows);
    },
  };

  // console.log(rows)
  // console.log(rows ? rows[0].name : 'Nenhum selecionado');

  const gerarPDF = () => {
    if (rows.length <= 0) {
      message.error("Por favor, selecione ao menos um funcionário.");
    } else {
      const doc = new jsPDF({ format: "a4", orientation: "l" });

      //Primeiro
      if (rows.length >= 1) {
        doc.addImage(logo, "PNG", 20, 26, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(5, 9, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(5, 54, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[0].firstName.concat(" " + rows[0].lastName), 17, 59);
        } else {
          doc.text(rows[0].firstName.concat(" " + rows[0].lastName), 12, 59);
        }
        doc.text(rows[0].firstName, 32, 93, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[0].occupation, 33, 100, { align: "center" });
        doc.addImage(
          rows[0].images[0].url,
          "JPEG",
          22,
          62,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 2) {
        doc.addImage(logo, "PNG", 78, 26, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(63, 9, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(63, 54, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[1].firstName.concat(" " + rows[1].lastName), 69, 59);
        } else {
          doc.text(rows[1].firstName.concat(" " + rows[1].lastName), 64, 59);
        }
        doc.text(rows[1].firstName, 90, 93, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[1].occupation, 90, 100, { align: "center" });
        doc.addImage(
          rows[1].images[0].url,
          "JPEG",
          80,
          62,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 3) {
        doc.addImage(logo, "JPEG", 137, 26, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(123, 9, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(123, 54, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[2].firstName.concat(" " + rows[2].lastName), 135, 59);
        } else {
          doc.text(rows[2].firstName.concat(" " + rows[2].lastName), 130, 59);
        doc.text(rows[2].firstName, 150, 93, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[2].occupation, 150, 100, { align: "center" });
        doc.addImage(
          rows[2].images[0].url,
          "JPEG",
          140,
          62,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 4) {
        doc.addImage(logo, "JPEG", 194, 26, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(181, 9, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(181, 54, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[3].firstName.concat(" " + rows[3].lastName), 190, 59);
        } else {
          doc.text(rows[3].firstName.concat(" " + rows[3].lastName), 185, 59);
        }

        doc.text(rows[3].firstName, 208, 93, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[3].occupation, 208, 100, { align: "center" });
        doc.addImage(
          rows[3].images[0].url,
          "JPEG",
          198,
          62,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 5) {
        doc.addImage(logo, "JPEG", 254, 26, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(239, 9, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(239, 54, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[4].firstName.concat(" " + rows[4].lastName), 250, 59);
        } else {
          doc.text(rows[4].firstName.concat(" " + rows[4].lastName), 245, 59);
        }

        doc.text(rows[4].firstName, 266, 93, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[4].occupation, 265, 100, { align: "center" });
        doc.addImage(
          rows[4].images[0].url,
          "JPEG",
          257,
          62,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 6) {
        doc.addImage(logo, "JPEG", 20, 125, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(5, 108, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(5, 153, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[5].firstName.concat(" " + rows[5].lastName), 20, 160);
        } else {
          doc.text(rows[5].firstName.concat(" " + rows[5].lastName), 15, 160);
        }

        doc.text(rows[5].firstName, 32, 195, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[5].occupation, 33, 200, { align: "center" });
        doc.addImage(
          rows[5].images[0].url,
          "JPEG",
          22,
          163,
          19,
          25,
          undefined,
          "NONE"
        );
      }
      if (rows.length >= 7) {
        doc.addImage(logo, "JPEG", 78, 125, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(63, 108, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(63, 153, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[6].firstName.concat(" " + rows[6].lastName), 75, 160);
        } else {
          doc.text(rows[6].firstName.concat(" " + rows[6].lastName), 70, 160);
        }

        doc.text(rows[6].firstName, 88, 194, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[6].occupation, 88, 199, { align: "center" });
        doc.addImage(
          rows[6].images[0].url,
          "JPEG",
          80,
          163,
          19,
          25,
          undefined,
          "NONE"
        );
        //Fim Segundo
      }
      if (rows.length >= 8) {
        doc.addImage(logo, "JPEG", 138, 125, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(123, 108, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(123, 153, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[7].firstName.concat(" " + rows[7].lastName), 134, 160);
        } else {
          doc.text(rows[7].firstName.concat(" " + rows[7].lastName), 129, 160);
        }

        doc.text(rows[7].firstName, 149, 194, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[7].occupation, 149, 200, { align: "center" });
        doc.addImage(
          rows[7].images[0].url,
          "JPEG",
          140,
          163,
          19,
          25,
          undefined,
          "NONE"
        );

        //Fim Terceiro
      }
      if (rows.length >= 9) {
        doc.addImage(logo, "JPEG", 196, 125, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(181, 108, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(181, 153, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[8].firstName.concat(" " + rows[8].lastName), 193, 160);
        } else {
          doc.text(rows[8].firstName.concat(" " + rows[8].lastName), 188, 160);
        }

        doc.text(rows[8].firstName, 208, 194, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[8].occupation, 209, 200, { align: "center" });
        doc.addImage(
          rows[8].images[0].url,
          "JPEG",
          200,
          163,
          19,
          25,
          undefined,
          "NONE"
        );
        //Fim Quarto
      }
      if (rows.length >= 10) {
        doc.addImage(logo, "JPEG", 252, 125, 25, 25, undefined, "NONE");
        doc.setDrawColor(0, 0, 0);
        doc.rect(239, 108, 55, 45);

        doc.setDrawColor(0, 0, 0);
        doc.setFillColor(255, 0, 0);
        doc.rect(239, 153, 55, 50, "F");
        doc.setTextColor("white");
        doc.setFontSize(11);
        if (rows[0].firstName.concat(" " + rows[0].lastName).length <= 13) {
          doc.text(rows[9].firstName.concat(" " + rows[9].lastName), 248, 160);
        } else {
          doc.text(rows[9].firstName.concat(" " + rows[9].lastName), 243, 160);
        }
        doc.text(rows[9].firstName, 267, 194, { align: "center" });
        doc.setFontSize(12);
        doc.text(rows[9].occupation, 265, 200, { align: "center" });
        doc.addImage(
          rows[9].images[0].url,
          "JPEG",
          258,
          163,
          19,
          25,
          undefined,
          "NONE"
        );
        //Fim Quinto
      }
      doc.save("cracha");
    }
  };
}

  return (
    <>
      <HeaderComponent />

      <div style={{ padding: "60px 250px 45px 250px" }}>
        <Table
          id="myTable"
          rowSelection={{
            type: "checkbox",
            ...rowSelection,
          }}
          columns={columns}
          dataSource={dataSource}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 20,
          }}
        >
          <Button></Button>
          <Button style={{ width: 250, height: 50 }} onClick={gerarPDF}>
            Gerar PDF
          </Button>
          <Button></Button>
        </div>
      </div>
    </>
  );
};


export default Listagem
