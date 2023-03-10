export default function CPreview() {
    const gif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-C-recording2.gif`;
    return(
        
        <div>
             <h1>C preview</h1>
            <img src={gif} alt="preview of code" />
        </div>
    );
}