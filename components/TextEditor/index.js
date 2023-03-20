import { Button } from "flowbite-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import {
  FlexRowContainer,
  FlexColContainer,
} from "../styled-global-components";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const StyledQuillContainer = styled.div`
  .ql-editor {
    box-shadow: 0px 5px 9px -1px #d0d0d0;
    min-height: 80vh;
    resize: both;
  }

  .ql-toolbar,
  .ql-editor {
    background-color: white;
    box-shadow: 0px 5px 9px -1px #d0d0d0;
  }
  .ql-snow,
  .ql-editor,
  .ql-container {
    border: none;
  }
  .ql-container {
    box-shadow: 0px 5px 9px -1px #d0d0d0;
  }
  #form-input {
    box-shadow: 0px 5px 9px -1px #d0d0d0;
  }
`;

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isDraft, setIsDraft] = useState(true);
  const [isPublished, setIsPublished] = useState(false);

  function submitHandler(event) {
    event.preventDefault();

    const requestObj = {
      id: new Date().toISOString(),
      title: title,
      content: content,
      isDraft: isDraft,
      isPublished: isPublished,
    };

    fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(requestObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleTitleChange(event) {
    event.preventDefault();
    setTitle(event.target.value);
  }

  return (
    <form onSubmit={submitHandler}>
      <FlexColContainer className="gap-5">
        <FlexRowContainer className="justify-between">
          <input
            type="text"
            value={title}
            name="title"
            placeholder="Enter a title"
            className="border-none shadow-sm flex-1"
            onChange={handleTitleChange}
            required
          />
          <Button className="max-w-sm">
            {isDraft ? "Save Draft" : "Publish"}
          </Button>
        </FlexRowContainer>

        <StyledQuillContainer>
          <QuillNoSSRWrapper
            modules={modules}
            onChange={setContent}
            theme="snow"
          />
        </StyledQuillContainer>

        {/*<p>{content}</p>*/}
      </FlexColContainer>
    </form>
  );
}
