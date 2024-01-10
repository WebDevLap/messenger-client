import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
// import {
//   FaBold,
//   FaHeading,
//   FaItalic,
//   FaListOl,
//   FaListUl,
//   FaQuoteLeft,
//   FaRedo,
//   FaStrikethrough,
//   FaUnderline,
//   FaUndo,
// } from "react-icons/fa";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatStrikethroughIcon from "@mui/icons-material/FormatStrikethrough";
import TitleIcon from "@mui/icons-material/Title";
import ChecklistIcon from "@mui/icons-material/Checklist";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";

const MenuBar = ({ editor }: { editor: ReturnType<typeof useEditor> }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="tip_tap menuBar">
      <div style={{ width: "100vw", overflow: "auto", display: "flex" }}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive("bold") ? "tip_tap is_active" : ""}
        >
          <FormatBoldIcon color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive("italic") ? "tip_tap is_active" : ""}
        >
          <FormatItalicIcon color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive("underline") ? "tip_tap is_active" : ""}
        >
          <FormatUnderlinedIcon color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive("strike") ? "tip_tap is_active" : ""}
        >
          <FormatStrikethroughIcon color="action" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive("heading", { level: 2 }) ? "tip_tap is_active" : ""
          }
        >
          <TitleIcon color="action" />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive("heading", { level: 3 })
              ? "tip_tap heading3 is_active"
              : ""
          }
        >
          <TitleIcon fontSize="small" color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive("bulletList") ? "tip_tap is_active" : ""}
        >
          <ChecklistIcon color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive("orderedList") ? "tip_tap is_active" : ""}
        >
          <FormatListNumberedIcon color="action" />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive("blockquote") ? "tip_tap is_active" : ""}
        >
          <FormatQuoteIcon color="action" />
        </button>
      </div>
      <div>
        <button onClick={() => editor.chain().focus().undo().run()}>
          {/* <FaUndo /> */}
          <UndoIcon color="action" />
        </button>
        <button onClick={() => editor.chain().focus().redo().run()}>
          <RedoIcon color="action" />
        </button>
      </div>
    </div>
  );
};

export const TipTap = ({
  setDescription,
}: {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: ``,

    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setDescription(html);
    },
  });

  return (
    <div className="textEditor">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};
