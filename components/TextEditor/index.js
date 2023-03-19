import { Button } from "flowbite-react";
import dynamic from "next/dynamic";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import { FlexColContainer } from "../styled-global-components";

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
    min-height: 200px;
    resize: vertical;
  }
  .ql-container {
    max-height: 60vh;
    overflow-y: auto;
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
        <label htmlFor="title">Title</label>
        <input
          type="text"
          value={title}
          name="title"
          placeholder="Enter a title"
          onChange={handleTitleChange}
          required
        />
        <StyledQuillContainer>
          <QuillNoSSRWrapper
            modules={modules}
            onChange={setContent}
            theme="snow"
          />
        </StyledQuillContainer>
        <Button>Save</Button>
        {/*<p>{content}</p>*/}
      </FlexColContainer>
    </form>
  );
}
