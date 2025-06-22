import "./Preloader.css";

interface Props {
    isActivePreloader: boolean;
}

const Preloader = ({ isActivePreloader }: Props) => {
    let preloaderDisplayStyle: string = "";
    if (isActivePreloader) {
        preloaderDisplayStyle = "flex";
    }
    if (!isActivePreloader) {
        preloaderDisplayStyle = "none";
    }
    return (
        <div id="preloader" style={{ display: preloaderDisplayStyle }}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Preloader;
