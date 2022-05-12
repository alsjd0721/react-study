import { useRef } from "react";

const InputFile = () => {
  const fileEl = useRef(null);

  return (
    <>
      <button onClick={() => fileEl.current.click()}>업로드</button>
      <input type="file" style={{ display: "none" }} ref={fileEl} />
    </>
  );
};

export default InputFile;
