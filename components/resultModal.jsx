function ResultModal({ result, wrongAnswerds, setResultModal }) {
    const downloadTxtFile = () => {
        const element = document.createElement("a");
        const txt = wrongAnswerds.toString().replace(/,/g, "\n");
        const file = new Blob([txt], {
          type: "text/plain"
        });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element);
        element.click();
      };

  return (
    <div className="absolute top-[25] h-[50vh] w-11/12 max-w-lg py-8 px-6">
      <h4>Your Result</h4>
        <p>{result}</p>
        <button disabled={wrongAnswerds.length===0} onClick={downloadTxtFile}>download worng answerd questions</button>
        <button onClick={()=>setResultModal(false)}CLOSE></button>
    </div>
  )
}

export default ResultModal
