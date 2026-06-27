"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import styles from "./page.module.css";

export default function Home() {
  const [code, setCode] = useState(`# Python Boty IDE\nprint("Hello Boty 👋")`);
  const [output, setOutput] = useState("");

  // 💡 Fake autocomplete simple (MVP)
  const suggestions = [
    "print",
    "def",
    "return",
    "import",
    "for",
    "while",
    "if",
    "elif",
    "else",
    "class",
    "try",
    "except",
  ];

  function handleRun() {
    // ⚠️ Fake execution (frontend only)
    try {
      setOutput("🚧 Execution not connected to backend yet\n\nCode received:\n" + code);
    } catch (e) {
      setOutput("Error running code");
    }
  }

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <div className={styles.header}>
        <h1>BOTY IDE</h1>

        <div className={styles.actions}>
          <button onClick={handleRun}>▶ Run</button>
        </div>
      </div>

      {/* EDITOR */}
      <div className={styles.main}>
        <div className={styles.editor}>
          <Editor
            height="100%"
            defaultLanguage="python"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || "")}
            options={{
              fontSize: 14,
              minimap: { enabled: false },
              automaticLayout: true,
              suggestOnTriggerCharacters: true,
              quickSuggestions: true,
            }}
            beforeMount={(monaco) => {
              // 🧠 Custom autocomplete provider
              monaco.languages.registerCompletionItemProvider("python", {
                provideCompletionItems: (model, position) => {
                  const word = model.getWordUntilPosition(position);

                  const range = {
                    startLineNumber: position.lineNumber,
                    endLineNumber: position.lineNumber,
                    startColumn: word.startColumn,
                    endColumn: word.endColumn,
                  };

                  return {
                    suggestions: suggestions.map((s) => ({
                      label: s,
                      kind: monaco.languages.CompletionItemKind.Keyword,
                      insertText: s,
                      range,
                    })),
                  };
                },
              });
            }}
          />
        </div>

        {/* OUTPUT PANEL */}
        <div className={styles.output}>
          <h3>Output</h3>
          <pre>{output || "No output yet"}</pre>
        </div>
      </div>
    </div>
  );
}