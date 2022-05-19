import { useState } from "react";
import styled from "styled-components";
import { countryList } from "../../datas";

const SearchForm = ({ onChange }) => {
  const [title, setTitle] = useState("");
  const onHandle = (e) => {
    e.preventDefault();
    onChange({ name: "query", value: title });
  };
  return (
    <Form onSubmit={onHandle}>
      <select
        onChange={(e) => onChange({ name: "country", value: e.target.value })}
      >
        <option value="ALL">전체</option>
        {countryList.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
      <InputText onChange={(e) => setTitle(e.target.value)} value={title} />
      <BtnSubmit>검색</BtnSubmit>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
const InputText = styled.input`
  flex: 1;
`;

const BtnSubmit = styled.button`
  margin-left: 10px;
`;

export default SearchForm;
