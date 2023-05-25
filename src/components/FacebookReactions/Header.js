import '../../CSS/CSS/header.css'

export default function Header() {

    let closeSVG = `${process.env.PUBLIC_URL}/images/svgs/close.svg`;
    let ellipsisSVG = `${process.env.PUBLIC_URL}/images/svgs/ellipsis.svg`;


    return(
        <div className="post-header bg-base-300">
            <div className="user-profile-image"></div>
            <div className="user-info">
                <span className="post-header">Spencer Renfro</span>
                <span>19hr</span>
            </div>
            <img className="icon" src={ellipsisSVG} alt=""/>
            <img className="icon" src={closeSVG} alt=""/>
        </div>
    );
}
