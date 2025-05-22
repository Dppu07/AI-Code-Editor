import React, { useEffect , useState } from "react";
import "./App.css";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import axios from "axios";
import Editor from "react-simple-code-editor";
function App() {

const [code,setCode] = useState(` function sum(){
   return 1+1
   }`);
  
  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function handleReview(){
  const response = await axios.post("http://localhost:3000/ai/get-review",{code});
    console.log(response.data);
    
  }
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor 
              value={code}
              onValueChange={code =>setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript,"javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                border:"1px solid #ddd",
                borderRadius:"5px",
                height:"100%",
                width:"100%"
              }}
             />
          </div>
          <div onClick = {handleReview}
            className="review">Review</div>
        </div>
        <div className="right"></div>
      </main>
    </>
  );
}

export default App;
