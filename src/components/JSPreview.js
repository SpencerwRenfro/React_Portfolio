export default function JSPreview() {
    const gif = `${process.env.PUBLIC_URL}/Gifs/Polytopia-JS-recording.gif`;
    return(
        
        <div>
       
            <img src={gif} alt="preview of code" />
            <h1>JavaScript preview</h1>
        </div>
    );
}