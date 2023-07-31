import { FC, useRef, useState } from "react";
import "./input.scss";
import { ReactComponent as Attach } from "../../assets/icons/attach.svg";
import { ReactComponent as Send } from "../../assets/icons/send.svg";
import { IInput } from "./interface";

const Input: FC<IInput> = (props: IInput) => {
  const { id } = props;

  const [textInput, setTextInput] = useState("");
  const [fileInput, setFileInput] = useState<File | null>(null);
  const textAreaRef = useRef<HTMLDivElement>(null);

  const handleTextChange = () => {
    if (textAreaRef.current) {
      setTextInput(textAreaRef.current.innerText);
    }
  };

  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    console.log("Отправлены данные", {
      message: textInput,
      file: fileInput,
      id: id
    });
    setTextInput("");
    setFileInput(null);
    if (textAreaRef.current) textAreaRef.current.innerText = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="custom-textarea-wrapper">
        <div
          ref={textAreaRef}
          className={`custom-textarea ${
            textInput.trim() === "" ? "empty" : ""
          }`}
          contentEditable
          onInput={handleTextChange}
          suppressContentEditableWarning
          onKeyDown={(event: React.KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "Enter" && !event.shiftKey) {
              event.preventDefault();
              handleSubmit();
            }
          }}
        />
      </div>
      <div className="buttons-container">
        <label className="file-input-label">
          <input
            type="file"
            className="file-input"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              if (event.target.files && event.target.files.length > 0)
                setFileInput(event.target.files[0]);
            }}
          />
          <Attach />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={textInput.trim().length === 0 && !fileInput}
        >
          <Send />
        </button>
      </div>
    </form>
  );
};

export default Input;
